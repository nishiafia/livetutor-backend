from django.db import models
from users.models import District, Division, MetaFields, PoliceStation, User

AVAILABILITY_OPTIONS = (('online', 'Online'),
                        ('offline', 'Offline'), ('both', 'Both'))


class TeacherListing(MetaFields):
    user = models.OneToOneField(
        "users.User", on_delete=models.CASCADE, related_name="teacher_listing")
    about = models.TextField(blank=True)
    subjects = models.ManyToManyField(
        'categories.Subject', blank=True,  related_name='subjects')
    grades = models.ManyToManyField('categories.Grade', related_name='grades')
    price_monthly = models.DecimalField(
        max_digits=10, decimal_places=2, blank=True, null=True)
    price_course = models.DecimalField(
        max_digits=10, decimal_places=2, blank=True, null=True)
    # TODO: add option if frontend for minute/hr
    trial_time = models.IntegerField(
        blank=True, null=True, verbose_name='Trial Time in Minutes')
    active = models.BooleanField(default=True)
    verified = models.BooleanField(default=False)
    video_link = models.URLField(blank=True, null=True)
    availability = models.CharField(
        max_length=10, choices=AVAILABILITY_OPTIONS)
    # subject #price #category->subject #class




class TeacherPremium(MetaFields):
    teacher = models.OneToOneField(
        TeacherListing, on_delete=models.PROTECT,)
    is_premium = models.BooleanField(default=False)

    def __str__(self) -> str:
        return f'{self.is_premium}'


class TeacherLocation(models.Model):
    # TODO Remove Pass
    # THANA, DISTRICT, CITY, AREA, VILLAGE, STREET, POSTCODE
    teacher = models.OneToOneField(TeacherListing, on_delete=models.CASCADE)
    # thana = models.ForeignKey(Thana, on_delete=models.CASCADE, null=True)
    address = models.CharField(max_length=255, null=True, blank=True)
    zipcode = models.CharField(max_length=10, null=True, blank=True)


class TeacherListingSubject(models.Model):
    teacher_listing = models.ForeignKey(
        TeacherListing, on_delete=models.CASCADE)
    subject = models.ForeignKey('categories.Subject', on_delete=models.CASCADE)
    listed = models.BooleanField(default=False)
