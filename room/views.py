from cmath import log
from urllib import request

from categories.models import Category
from django.db.models import Q
from livetutor import mixins, pagination
from livetutor.permissions import (CreateObjectPermission, ObjectPermission,
                                   RoomAdminPermission, RoomUpdatePermission)
from rest_framework import permissions, response, status, viewsets
from rest_framework.decorators import action
from rest_framework.filters import BaseFilterBackend
from rest_framework_extensions.mixins import NestedViewSetMixin

from .models import *
from .permissions import RoomAdminOnly
from .serializers import *


class RoomViewset(NestedViewSetMixin, viewsets.ModelViewSet, mixins.ExportMixin):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

    # permission_classes = [ObjectPermission | CreateObjectPermission]
    # filter_backends = [filters.ObjectPermissionsFilter]

    def get_category_pks(self,category_titles,user):
        categories = []
        if category_titles:
            for category_title in category_titles:
                category , created = Category.objects.get_or_create(title=category_title, user=user)
                categories.append(category.id)
        return categories

    def list(self, request):
        queryset = Room.objects.filter(
            Q(roomuser__user=request.user) | Q(author=request.user)).distinct()
        serializer = RoomSerializer(
            queryset, many=True, context={'user_id': request.user.id})
        return response.Response(serializer.data)

    def create(self, request, *args, **kwargs):
        data = {
            'name': request.data.get('name'),
            'author': request.user.id,
        }
        category_titles = request.data.get('categories')
        if category_titles:
            data['categories'] =  self.get_category_pks(category_titles,request.user)
    
        serializer = self.get_serializer(
            data=data, context={'user_id': request.user.id})
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # if serializer.is_valid():
        #     room = serializer.save()
        #     room.save()
        #     RoomUser.objects.create(
        #         room=room, user=request.user, role='admin')
        #     return response.Response(
        #         {'room': RoomSerializer(room).data}, status=status.HTTP_201_CREATED)


    def partial_update(self, request, *args, **kwargs):
        instance = self.get_object()
        data = request.data
        category_titles = request.data.get('categories')
        if category_titles:
            data['categories'] =  self.get_category_pks(category_titles,request.user)
        serializer = self.get_serializer(
            instance=instance, data=data, partial=True, 
            context={'user_id': request.user.id})
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


    @action(detail=False, methods=['post'])
    def join(self, request, pk=None):
        '''
            user join room using room code
        '''
        user = request.user
        room_code = request.data['code']
        try:
            room = Room.objects.get(code=room_code)
        except:
            return response.Response({'error': 'Room not found'}, status=status.HTTP_404_NOT_FOUND)
        if room:
            try:
                room_user = RoomUser.objects.get(room=room, user=user)
            except:
                room_user = RoomUser.objects.create(
                    room=room, user=user, has_joined=True)
                room_user.save()
            return response.Response({'success': 'Successfully joined room'}, status=status.HTTP_200_OK)


class RoomUserViewset(viewsets.ModelViewSet, NestedViewSetMixin, mixins.ExportMixin):
    permission_classes = [RoomAdminPermission]
    # filter_backends = [filters.ObjectPermissionsFilter]
    queryset = RoomUser.objects.all()
    serializer_class = RoomUserSerializer
    pagination_class = pagination.StandardResultsSetPagination
    # permission_classes = [RoomUpdatePermission]

    def get_queryset(self):
        query_params = {}
        for k, v in self.request.query_params.items():
            if k not in ['page', 'page_size']:
                query_params[k] = v

        return super().get_queryset().filter(
            room__author=self.request.user
        ).filter(
            **query_params
        )

    def create(self, request, *args, **kwargs):
        room_id = kwargs['parent_lookup_room']
        user_list = []
        # TODO: DO FOR EMAIL
        for user_email in request.data['user_emails']:
            user = User.objects.get_or_create(phone=user_email)
            user_list.append({'room_id': room_id, 'user': user})
        serializer = self.get_serializer(data=user_list, many=True)
        if serializer.is_valid():
            serializer.save()
            return super().create(request, *args, **kwargs)

    def partial_update(self, request, *args, **kwargs):
        print(request.data)
        return super().partial_update(request, *args, **kwargs)

    @ action(methods=['post'], detail=False, url_path='assign-bulk-room-users', )
    def assign_bulk_room_users(self, request, pk=None):
        room_users = request.data.get('room_users_data')
        room_users_data = []
        for data in room_users:
            if RoomUser.objects.filter(room__code=data['room'], user__phone=data['phone'], room__author=request.user).exists():
                data['user_exist_status'] = 'User Already Exists'
            else:
                user = User.objects.filter(phone=data['phone'])
                if user.exists():
                    user = user.first()
                    data['user_exist_status'] = 'User Exists'
                else:
                    user, created = User.objects.create(
                        phone=data['phone'], username=data['username'], password=data['password'], name=data['name'])
                    if created:
                        data['user_exist_status'] = 'User Created'
                author_room = Room.objects.filter(
                    code=data['room'], author=request.user)
                if author_room.exists():
                    room_users_data.append(
                        {'room': author_room.first().id,
                         'user': user.id,
                         'role': data['role']
                         }
                    )
                else:
                    data['room_error'] = 'Room not found'
        serializer = self.get_serializer(data=room_users_data, many=True)
        if serializer.is_valid():
            serializer.save()
            return response.Response(room_users, status=status.HTTP_201_CREATED)
        else:
            return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
