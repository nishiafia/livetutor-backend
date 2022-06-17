import json

from django.shortcuts import render
from livetutor.permissions import (CreateObjectPermission, ObjectPermission,
                                   RoomAdminPermission)
from rest_framework import permissions, response, status
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.viewsets import ModelViewSet
from rest_framework_extensions.mixins import NestedViewSetMixin
from task.models import *
from task.serializers.assignment_serializers import *


class AssignmentSubmissionViewset(NestedViewSetMixin, ModelViewSet):
    parser_classes = [MultiPartParser,FormParser]
    queryset = AssignmentSubmission.objects.all()
    serializer_class = AssignmentSubmissionSerializer

    def create(self, request, *args, **kwargs):
        files = [{'file': file} for file in request.data.pop('assignment_submission_files[]')]
        print(files)
        data = {
            'assignment': request.data.get('assignment_id'),
            'assignment_submission_files': files,
            'room_user': RoomUser.objects.get(user=request.user, room__assignment=request.data.get('assignment_id')).id,
        }
        serializer = AssignmentSubmissionSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        # return super().create(request, *args, **kwargs)

class AssignmentViewset(NestedViewSetMixin, ModelViewSet):
    permission_classes = [RoomAdminPermission, ]
    parser_classes = [MultiPartParser, FormParser]
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer

    def create(self, request, *args, **kwargs):
        files = [{'file': file}
                 for file in request.data.getlist('attachments[]')]
        data = {
            'name': request.data.get('name'),
            'description': request.data.get('description'),
            'room': request.data.get('room'),
            'files': files,
            'submission_date_time': request.data.get('submission_date_time'),
            'mark': request.data.get('mark'),
        }
        serializer = AssignmentSerializer(
            data=data)
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AssignmentCommentViewset(NestedViewSetMixin,ModelViewSet):
    serializer_class = AssignmentCommentSerializer
    queryset = AssignmentComment.objects.all()
    
    def create(self, request, *args, **kwargs):
        data = {
            'assignment': request.data.get('assignment'),
            'text': request.data.get('text'),
            'user': request.user.id
        }
        serializer = AssignmentCommentSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
