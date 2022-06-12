from distutils.command.build_scripts import first_line_re

from django.shortcuts import render
from rest_framework import decorators, response, viewsets

from .models import Booking
from .serializers import BookingSerializer


class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.queryset.filter(booking_user=request.user)
        serializer = self.get_serializer(queryset, many=True)
        return response.Response(serializer.data)

    def create(self, request, *args, **kwargs):
        data = {
            'listed_teacher': request.data.get('listed_teacher'),
            'booking_user': request.user.id,
            'title': request.data.get('title'),
            'details': request.data.get('details'),
        }
        serializer = self.get_serializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer .data, status=201)
        else:
            return response.Response(serializer.errors,
                                     status=400)
    @decorators.action(methods=['get'], detail=False, url_path='bookings-for-teacher')
    def get_bookings_for_teacher(self, request, *args, **kwargs):
        queryset = self.queryset.filter(listed_teacher__user_id=request.user.id)
        serializer = self.get_serializer(queryset, many=True)
        return response.Response(serializer.data)
