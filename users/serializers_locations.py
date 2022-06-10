from rest_framework import serializers

from .models import District, Division, PoliceStation


class PoliceStationSerializer(serializers.ModelSerializer):
    class Meta:
        model = PoliceStation
        fields = ['name']


class DistrictSerializer(serializers.ModelSerializer):
    police_stations = PoliceStationSerializer(many=True, required=False)

    class Meta:
        model = District
        fields = ['name', 'police_stations']


class DivisionSerializer(serializers.ModelSerializer):
    districts = DistrictSerializer(many=True, required=False)

    class Meta:
        model = Division
        fields = ['name', 'districts']
