from django.contrib import admin

from .models import Meeting, TrialMeeting

# Register your models here.


class MeetingInline(admin.TabularInline):
    model = Meeting
    extra = 0


admin.site.register(Meeting)
admin.site.register(TrialMeeting)
