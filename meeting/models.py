from django.db import models
from users.models import MetaFields


class Meeting(MetaFields):
    room = models.ForeignKey('room.Room', on_delete=models.PROTECT)
    name = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    start_date_time = models.DateTimeField()
    end_date_time = models.DateTimeField()


class TrialMeeting(MetaFields):
    """
    users with role 'trial' can see only these meetings
    """
    meeting = models.ForeignKey(Meeting, on_delete=models.PROTECT)
    roomuser = models.ForeignKey('room.RoomUser', on_delete=models.PROTECT)
