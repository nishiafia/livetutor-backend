from django.contrib.auth import authenticate
from django.contrib.auth.hashers import check_password, make_password
from django.contrib.auth.models import Group, Permission, update_last_login
from locations.models import Country
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.settings import api_settings

from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'name',
                  'photo', 'phone', 'address', 'password',
                  "country",
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
    username_field = 'phone'
    country = serializers.PrimaryKeyRelatedField(queryset=Country.objects.all())
    def validate(self, attrs):
        self.user = User.objects.filter(phone=attrs['phone'],country=attrs['country']).first()
        password_ok =  check_password(attrs['password'], self.user.password)
        if(password_ok):
            refresh = self.get_token(self.user)
            data = {}
            data["refresh"] = str(refresh)
            data["access"] = str(refresh.access_token)
            if api_settings.UPDATE_LAST_LOGIN:
                update_last_login(None, self.user)
            return data
        else:
            raise serializers.ValidationError({'password':"Incorrect Password"})
            
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['username'] = user.username
        return token
    
