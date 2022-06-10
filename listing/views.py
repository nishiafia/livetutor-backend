
from urllib import request

from django.db.models import Max, Min
from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from paginations import StandardResultsSetPagination
from rest_framework import filters, generics, response, views, viewsets

from .models import Booking, TeacherListing
from .serializers import (BookingSerializer, TeacherListingSerializer,
                          TeacherListPricingSerializer)


class TeacherListPricingView(views.APIView):
   
    

    def get(self, request, format=None):
        
        return response.Response({'price_min': 40, ' price_max': 50})
        # queryset = TeacherListing.objects.aggregate(
        #     price_min=Min('price_from'), price_max=Max('price_from'))
        # return response.Response(queryset)

#TODO: ORDERING
# PRIORITY: STARRED/PREMIUM TEACHER
# ADD ICON FOR STARRED/PREMIUM TEACHER
# PRIORITY: RECENTLY CREATED (DEFAULT)


class TeacherListingViewset(viewsets.ModelViewSet):
    
    pagination_class = StandardResultsSetPagination
    queryset = TeacherListing.objects.filter(verified=True, active=True)
    serializer_class = TeacherListingSerializer
    filter_backends = [DjangoFilterBackend]
 
    def get_queryset(self):
        filters={}
        for i in self.request.query_params:
            if i.replace('[]','') not in filters:
                    filters[i.replace('[]','')] = self.request.query_params.getlist(i) 
        return   self.queryset.filter(**filters).distinct()

    def create(self, request, *args, **kwargs):
        data = request.data
        data['user'] = request.user.id
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return response.Response(serializer.data)
        # return super().create(request, *args, **kwargs)
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
            return response.Response(serializer.data, status=201)
        else:
            return response.Response(serializer.errors,
                                     status=400)
