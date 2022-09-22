from django.shortcuts import render
from rest_framework import status, views, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.exceptions import InvalidToken, TokenError
from rest_framework_simplejwt.views import TokenObtainPairView

from users.models import User

from .serializers import CustomTokenObtainPairSerializer, UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.filter(is_active=True)
    @action(detail=False, methods=['get'])
    def me(self, request, pk=None):
        serializer = self.get_serializer(request.user)
        return Response(serializer.data)
    
    

    @action(detail=False, methods=['post'])
    def verify(self, request, pk=None):
        '''
            verify logged in user using jwt token
        '''
        try:
            user = User.objects.get(pk=request.user.id)
        except:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
        serializer = self.get_serializer(user)
        if user:
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

class LoggedInUserView(APIView):
    pass


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
