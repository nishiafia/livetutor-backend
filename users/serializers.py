from django.contrib.auth.models import Group, Permission
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name',
                  'photo', 'phone', 'address', 'password',
                  'user_type'
                ]
        extra_kwargs = {
            'password': {'write_only': True},
            'user_type': {'read_only': True},
        }

    def create(self, validated_data):
        user = super().create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user


class LoggedInUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = 'auth.User'
        fields = ['email']


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['username'] = user.username
        return token
