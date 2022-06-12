from django.db import models
from listing.models import TeacherListing
from users.models import District, Division, MetaFields, PoliceStation, User


# Create your models here.
class Booking(MetaFields):
    listed_teacher = models.ForeignKey(
        TeacherListing, on_delete=models.CASCADE)
    booking_user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(null=True, blank=True, max_length=100)
    details = models.TextField(null=True, blank=True)
