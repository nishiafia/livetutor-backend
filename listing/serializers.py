from categories.serializers import (CategorySerializer, GradeSerializer,
                                    SubjectSerializer)
from rest_framework import serializers
from users.serializers import UserSerializer

from .models import TeacherListing


class TeacherListPricingSerializer(serializers.Serializer):
    price_min = serializers.DecimalField(max_digits=10, decimal_places=2)
    price_max = serializers.DecimalField(max_digits=10, decimal_places=2)


class TeacherListingSerializer(serializers.ModelSerializer):
    # user = UserSerializer()
    # categories = CategorySerializer(
    #     many=True, required=False)
    # grades = GradeSerializer(many=True, required=False)
    # subjects = SubjectSerializer(many=True, required=False)

    class Meta:
        model = TeacherListing
        fields = '__all__'

    def to_representation(self, instance):
        data =  super().to_representation(instance)
        data['user'] = UserSerializer(instance.user).data
        data['grades'] = GradeSerializer(instance.grades, many=True).data
        #data['categories'] = CategorySerializer(instance.categories, many=True).data
        data['subjects'] = SubjectSerializer(instance.subjects, many=True).data
        return data

    # def create(self, validated_data):
    #     print(validated_data)
        # return super().create(validated_data)
