from django.db.models import Q
from livetutor.permissions import (CreateObjectPermission, ObjectPermission,
                                   RoomAdminPermission, RoomUpdatePermission)
from rest_framework import permissions, response, status, viewsets
from rest_framework.decorators import action
from rest_framework.filters import BaseFilterBackend
from rest_framework_extensions.mixins import NestedViewSetMixin

from .models import *
from .permissions import RoomAdminOnly
from .serializers import *




class RoomViewset(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

    # permission_classes = [ObjectPermission | CreateObjectPermission]
    # filter_backends = [filters.ObjectPermissionsFilter]
    def list(self, request):
        queryset = Room.objects.filter(
            Q(roomuser__user=request.user) | Q(author=request.user)).distinct()
        serializer = RoomSerializer(
            queryset, many=True, context={'user_id': request.user.id})
        return response.Response(serializer.data)

    def create(self, request, *args, **kwargs):
        data = {
            'name': request.data.get('name'),
            'author': request.user.id
        }
        serializer = self.get_serializer(
            data=data)
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

    @ action(detail=False, methods=['post'])
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


class RoomUserViewset(NestedViewSetMixin, viewsets.ModelViewSet):
    permission_classes = [RoomAdminPermission]
    # filter_backends = [filters.ObjectPermissionsFilter]
    queryset = RoomUser.objects.all()
    serializer_class = RoomUserSerializer
    # permission_classes = [RoomUpdatePermission]

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
