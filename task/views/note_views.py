from django.shortcuts import render
from livetutor.permissions import RoomAdminPermission
from rest_framework import parsers, response, status, viewsets
from rest_framework_extensions.mixins import NestedViewSetMixin
from task.models import *
from task.serializers.note_serializers import *


class NoteViewset(NestedViewSetMixin, viewsets.ModelViewSet):
    permission_classes = [RoomAdminPermission]
    parser_classes = (parsers.MultiPartParser, parsers.FormParser)
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

    def create(self, request, *args, **kwargs):
        note_files = [{'file': file}
                      for file in request.data.pop('attachments[]')]
        data = {
            'name': request.data.get('name'),
            'description': request.data.get('description'),
            'room': request.data.get('room'),
            'files': note_files
        }
        serializer = self.get_serializer(
            data=data)
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class NoteCommentViewset(NestedViewSetMixin, viewsets.ModelViewSet):
    serializer_class = NoteCommentSerializer
    queryset = NoteComment.objects.all()

    def create(self, request, *args, **kwargs):
        data = {
            'note': request.data.get('note'),
            'text': request.data.get('text'),
            'user': request.user.id
        }
        serializer = self.get_serializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
