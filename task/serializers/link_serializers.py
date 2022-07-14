from task.models import Link
from rest_framework import serializers


class LinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Link
        fields = '__all__'
        read_only_fields = ('id',)
