from django.shortcuts import render
from rest_framework import viewsets
from rest_framework_extensions.mixins import NestedViewSetMixin

from .models import Category, Grade
from .serializers import CategorySerializer, GradeSerializer


# Create your views here.
class CategoryViewset(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class GradeViewset(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = Grade.objects.all()
    serializer_class = GradeSerializer
