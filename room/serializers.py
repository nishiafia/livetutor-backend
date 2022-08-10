
from categories.serializers import CategorySerializer
from django.contrib.auth.models import Group, Permission
from django.db.models import Q
from rest_framework import serializers
from users.models import User
from users.serializers import UserSerializer

from .models import Room, RoomUser, RoomUserRole


class RoomSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(
        many=True, required=False)
    is_author = serializers.BooleanField(read_only=True, default=False)
    is_teacher = serializers.BooleanField(read_only=True, default=False)

    class Meta:
        model = Room
        fields = '__all__'
        extra_kwargs = {
            'id': {'read_only': True},
            'code': {'read_only': True},
        }

    def to_representation(self, instance):
        data = super().to_representation(instance)
        if instance.author.id == self.context['user_id']:
            data['is_author'] = True
        if RoomUser.objects.filter(room=instance, user=self.context['user_id'], role='teacher').exists():
            data['is_teacher'] = True
        return data


class RoomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoomUser
        fields = '__all__'

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['user'] = UserSerializer(instance.user).data
        return data
