from django.contrib import admin

from .models import *


class RoomFeeInline(admin.TabularInline):
    """
    referenced in room admin
    """
    model = RoomFee
    extra = 0


class RoomUserFeeInline(admin.TabularInline):
    extra = 0
    model = RoomUserFee

# class FeeAdmin(admin.ModelAdmin):
#     inlines = [FeeTypeInline]


class RoomFeeAdmin(admin.ModelAdmin):
    inlines = [RoomUserFeeInline]


# admin.site.register(FeeType)
admin.site.register(Fee)
admin.site.register(Payment)
admin.site.register(RoomFee, RoomFeeAdmin)
# admin.site.register(RoomFeePayment)
admin.site.register(RoomUserFee)
# admin.site.register(Fee, FeeAdmin)
