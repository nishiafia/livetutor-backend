from django.shortcuts import render
from rest_framework import generics, response, views, viewsets

from .models import City, Country, Division
from .serializers import CitySerializer, CountrySerializer, DivisionSerializer


class CountryListView(generics.ListAPIView):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)


class DivisionViewset(viewsets.ModelViewSet):
    queryset = Division.objects.all()
    serializer_class = DivisionSerializer


class CityView(views.APIView):
    def get(self, request):
        city = City.objects.all()
        serializer = CitySerializer(city, many=True)
        return response.Response(serializer.data)
