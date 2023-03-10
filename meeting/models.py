import uuid

from django.db import models
from livetutor.models import MetaFields


class Meeting(MetaFields):
    room = models.ForeignKey('room.Room', on_delete=models.PROTECT)
    name = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    start_date_time = models.DateTimeField()
    end_date_time = models.DateTimeField()
    lobby_name = models.CharField(
        max_length=255,null=True, blank=True)

    def save(self,**kwargs) -> None:
        self.lobby_name = uuid.uuid4().hex[:8]
        return super().save()

class TrialMeeting(MetaFields):
    """
    users with role 'trial' can see only these meetings
    """
    meeting = models.ForeignKey(Meeting, on_delete=models.PROTECT)
    roomuser = models.ForeignKey('room.RoomUser', on_delete=models.PROTECT)
