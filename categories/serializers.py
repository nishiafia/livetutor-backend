from rest_framework import serializers

from .models import Category, Grade, Subject


class GradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Grade
        fields = ['id', 'title', 'description']


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ['id', 'title', 'description']


class CategorySerializer(serializers.ModelSerializer):
    subjects = SubjectSerializer(many=True, required=False)

    class Meta:
        model = Category
        fields = '__all__'
