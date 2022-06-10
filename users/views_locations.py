from rest_framework import viewsets

from .models import Division
from .serializers_locations import DivisionSerializer


class DivisionViewset(viewsets.ModelViewSet):
    queryset = Division.objects.all()
    serializer_class = DivisionSerializer
