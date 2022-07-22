

from django.contrib.auth.models import AbstractUser
from django.db import models
from livetutor.models import MetaFields


class Country(MetaFields):
    country = models.CharField(max_length=100)
    flag = models.TextField(null=True, blank=True)
    short_code = models.CharField(
        max_length=5, null=True, blank=True, help_text='BD, US, IN, etc.')
    phone_code = models.CharField(max_length=10)
    min_digit = models.IntegerField()
    max_digit = models.IntegerField()

    def __str__(self):
        return self.country


class User(AbstractUser):
    # first_name = None  # removing first name
    # last_name = None  # removing last name
    photo = models.ImageField(upload_to='users/', blank=True, null=True)
    name = models.CharField(max_length=30, blank=True)
    email = models.EmailField(max_length=250, blank=True)
    username = models.CharField(null=True, blank=True, max_length=20)
    phone = models.CharField(max_length=20, unique=True)
    address = models.CharField(max_length=255, null=True, blank=True)
    city = models.ForeignKey(
        'users.city', max_length=255, null=True, blank=True, on_delete=models.CASCADE)
    USERNAME_FIELD = 'phone'

    REQUIRED_FIELDS = ['username', 'email']

    def __str__(self):
        return f'{self.email}'


class City(MetaFields):
    name = models.CharField(max_length=30)

    class Meta:
        verbose_name_plural = 'Cities'

    def __str__(self):
        return f'{self.name}'


class Division(MetaFields):
    name = models.CharField(max_length=30)


class District(MetaFields):
    division = models.ForeignKey(
        Division, on_delete=models.CASCADE, related_name='districts')
    name = models.CharField(max_length=30)


class PoliceStation(MetaFields):
    district = models.ForeignKey(
        District, on_delete=models.CASCADE, related_name='police_stations')
    name = models.CharField(max_length=30)
