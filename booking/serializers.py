from listing.serializers import TeacherListingSerializer
from rest_framework import serializers
from users.serializers import UserSerializer

from .models import Booking, BookingResponse


class BookingResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookingResponse
        fields = '__all__'

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['user'] = UserSerializer(instance.user).data
        return data


class BookingSerializer(serializers.ModelSerializer):
    booking_responses = BookingResponseSerializer(many=True, required=False)

    class Meta:
        model = Booking
        fields = '__all__'

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['teacher'] = TeacherListingSerializer(
            instance.listed_teacher).data

        return data
