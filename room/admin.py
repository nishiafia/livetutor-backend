from django.contrib import admin
from meeting.admin import MeetingInline
from payment.admin import RoomFeeInline

from .models import *


class RoomUserInline(admin.TabularInline):
    model = RoomUser
    extra = 0


class RoomAdmin(admin.ModelAdmin):
    inlines = [MeetingInline, RoomUserInline, RoomFeeInline]
    readonly_fields = ['code']


admin.site.register(Room, RoomAdmin)
admin.site.register(RoomUser)

