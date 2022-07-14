from livetutor.permissions import RoomAdminPermission
from rest_framework import viewsets
from task.models import Link
from task.serializers import link_serializers


class LinkViewSet(viewsets.ModelViewSet):
    queryset = Link.objects.all()
    serializer_class = link_serializers.LinkSerializer
    permission_classes = [RoomAdminPermission, ]
