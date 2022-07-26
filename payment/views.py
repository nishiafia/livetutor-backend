from django.db.models import Q
from rest_framework import filters, response, status, viewsets
from rest_framework.decorators import action
from rest_framework_extensions.mixins import NestedViewSetMixin

from .models import *
from .serializers import *


class RoomUserFeeViewSet(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = RoomUserFee.objects.all()
    serializer_class = RoomUserFeeSerializer

    def get_queryset(self):
        return super().get_queryset().filter(Q(room_user__user=self.request.user) & Q(payments__isnull=True))


class RoomFeeViewset(NestedViewSetMixin, viewsets.ModelViewSet):
    queryset = RoomFee.objects.all()
    serializer_class = RoomFeeSerializer
    filter_backends = (filters.OrderingFilter,)
    ordering = ['year', 'month', ]

    def get_queryset(self):
        return super().get_queryset().filter(Q(room__author=self.request.user)).distinct()

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(
            data=request.data, many=True)
        if serializer.is_valid():
            serializer.save()
            return response.Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SummaryViewset(NestedViewSetMixin, viewsets.ModelViewSet):
    serializer_class = PerUserPaymentSerializer
    queryset = RoomUser.objects.all()
    # TODO: add filter for user
    # def get_queryset(self):
    #     return super().get_queryset().filter(
    #         room_fee__room__author=self.request.user)


class PaymentViewset(NestedViewSetMixin, viewsets.ModelViewSet):
    serializer_class = PaymentSerializer
    filter_backends = (filters.OrderingFilter,)
    ordering = ['-created_at', ]
    queryset = Payment.objects.all()

    def get_queryset(self):
        return super().get_queryset().filter(room_user_fee__room_user__user=self.request.user).distinct()
