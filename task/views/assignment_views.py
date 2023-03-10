import json

from django.shortcuts import render
from livetutor.permissions import (CreateObjectPermission, ObjectPermission,
                                   RoomAdminPermission)
from rest_framework import decorators, permissions, response, status
from rest_framework.parsers import FormParser, JSONParser, MultiPartParser
from rest_framework.viewsets import ModelViewSet
from rest_framework_extensions.mixins import NestedViewSetMixin
from task.models import *
from task.serializers.assignment_serializers import *


class AssignmentSubmissionViewset(NestedViewSetMixin, ModelViewSet):
    parser_classes = [MultiPartParser, FormParser, JSONParser]
    queryset = AssignmentSubmission.objects.all()
    serializer_class = AssignmentSubmissionSerializer

    def create(self, request, *args, **kwargs):
        files = [{'file': file}
                 for file in request.data.pop('assignment_submission_files[]')]
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

    @decorators.action(detail=False, methods=['put'], url_name='update_assignment_mark', url_path='update-mark', )
    def update_mark(self, request, **kwargs):
        assignment_submission, created = AssignmentSubmissionMark.objects.get_or_create(
            assignment_submission__id=request.data.get(
                'assignment_submission_id'),
        )
        assignment_submission.mark = request.data.get('mark')
        assignment_submission.save()
        return response.Response(status=status.HTTP_200_OK)


class AssignmentViewset(NestedViewSetMixin, ModelViewSet):
    #permission_classes = [RoomAdminPermission, ]
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
        serializer = self.get_serializer(
            data=data)
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AssignmentCommentViewset(NestedViewSetMixin, ModelViewSet):
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

class AssignmentFileViewSet(NestedViewSetMixin,ModelViewSet):
    serializer_class = AssignmentFilesSerializer
    queryset = AssignmentFile.objects.filter(is_active=True)

    def create(self, request, *args, **kwargs):
        assignment_id = request.data.get('assignment_id')
        data = []
        for file in request.data.getlist('attachments[]'):
            data.append({
                'file': file,
                'assignment': assignment_id
            })
        serializer = self.get_serializer(data=data, many=True)
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_201_CREATED)
        return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


