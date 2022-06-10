from calendar import month
from dataclasses import field

from django.db import transaction
from rest_framework import serializers
from room.models import RoomUser

from .models import *


class FeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fee
        exclude = ['created_at', 'updated_at', 'is_active']


class PaymentSerializer(serializers.ModelSerializer):
    room_user_fee = serializers.PrimaryKeyRelatedField(
        many=True, queryset=RoomUserFee.objects.all())

    class Meta:
        model = Payment
        fields = '__all__'


class RoomFeePaymentSerializer(serializers.ModelSerializer):
    # room_user_fee = serializers.PrimaryKeyRelatedField(
    #     many=True, queryset=RoomUserFee.objects.all())

    class Meta:
        model = RoomFeePayment
        exclude = ["created_at",
                   "updated_at",
                   "is_active"]


class RoomUserFeeSerializer(serializers.ModelSerializer):
    room = serializers.ReadOnlyField(source='room_user.room_id')
    amount = serializers.ReadOnlyField(source='room_fee.fee.amount')
    month = serializers.ReadOnlyField(source='room_fee.get_month_display')
    year = serializers.ReadOnlyField(source='room_fee.year')
    payment_amount = serializers.SerializerMethodField()
    room_fee_payment = RoomFeePaymentSerializer(read_only=True)

    class Meta:
        model = RoomUserFee
        exclude = ['created_at', 'updated_at', 'is_active']

    def get_payment_amount(self, obj):
        try:
            return obj.room_fee_payment.room_user_fee.room_fee.fee.amount
        except:
            return 0


class RoomFeeSerializer(serializers.ModelSerializer):
    fee = FeeSerializer()
    fee_month = serializers.CharField(
        source='get_month_display', read_only=True)
    amount = serializers.ReadOnlyField(source='fee.amount')
    room_user = serializers.PrimaryKeyRelatedField(
        many=True, queryset=RoomUser.objects.all())

    class Meta:
        model = RoomFee
        exclude = ['created_at', 'updated_at']

    @transaction.atomic
    def create(self, validated_data):
        print(validated_data)
        fee_data = validated_data.pop('fee')
        room_user = validated_data.pop('room_user')
        fee = Fee.objects.create(**fee_data)
        room_fee = RoomFee.objects.create(fee=fee, **validated_data)

        for user in room_user:
            room_fee.room_user.add(user)
        return room_fee
