from listing.serializers import TeacherListingSerializer
from rest_framework import serializers

from .models import Booking


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'
    
    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['teacher'] = TeacherListingSerializer(instance.listed_teacher).data
        return data
