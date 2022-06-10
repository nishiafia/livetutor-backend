from rest_framework import serializers
from task.mixins import TaskFileUploadMixin
from task.models import Note, NoteComment, NoteFile


class NoteCommentSerializer(serializers.ModelSerializer):
    user_name = serializers.ReadOnlyField(source='user.name')
    class Meta:
        model = NoteComment
        fields = '__all__'


class NoteFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = NoteFile
        fields = ['file']


class NoteSerializer(TaskFileUploadMixin):
    files = NoteFileSerializer(many=True, required=False)
    comments = NoteCommentSerializer(many=True, required=False)

    class Meta:
        model = Note
        fields = '__all__'
