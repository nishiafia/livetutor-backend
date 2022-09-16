from re import L

from django.shortcuts import render
from rest_framework import parsers, response, status, viewsets
from rest_framework_extensions.mixins import NestedViewSetMixin
from task.models import *
from task.permissions import RoomAuthorOrTeacherOnly
from task.serializers.note_serializers import *


class NoteViewset(NestedViewSetMixin, viewsets.ModelViewSet):
    # permission_classes = [RoomAuthorOrTeacherOnly]
    parser_classes = (parsers.MultiPartParser, parsers.FormParser, parsers.JSONParser)
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

    def create(self, request, *args, **kwargs):
        note_files = [{'file': file}
                      for file in request.data.getlist('attachments[]')]
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

    def update(self, request, *args, **kwargs):
        return super().update(request, *args, **kwargs)

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

class NoteFileViewSet(NestedViewSetMixin,viewsets.ModelViewSet):
    serializer_class = NoteFileSerializer
    queryset = NoteFile.objects.filter(is_active=True)

    def create(self, request, *args, **kwargs):
        note_id = request.data.get('note_id')
        data = []
        for file in request.data.getlist('attachments[]'):
            data.append({
                'file': file,
                'note': note_id
            })
        serializer = self.get_serializer(data=data, many=True)
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_201_CREATED)
        return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


