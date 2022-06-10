from django.apps import apps
from rest_framework.serializers import ModelSerializer

from .models import Task, TaskFile


class TaskFileUploadMixin(ModelSerializer):
    """
    abstract serializer class to add file upload functionality to a serializer
    """
    class Meta:
        model = Task
        abstract = True

    def create(self, validated_data):
        _model_name = self.Meta.model._meta.model_name
        instance_files = validated_data.pop('files')
        instance = self.Meta.model.objects.create(**validated_data)
        _files_model = apps.get_model(
            app_label='task', model_name=f'{_model_name.title()}File')
        for instance_file in instance_files:
            instance_file['{}_id'.format(_model_name)] = instance.id
            _files_model.objects.create(**instance_file)
        return instance
