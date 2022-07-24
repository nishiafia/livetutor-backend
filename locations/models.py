

from django.contrib.auth.models import AbstractUser
from django.db import models
from livetutor.models import MetaFields


class Country(MetaFields):
    name = models.CharField(max_length=100)
    flag = models.TextField(
        null=True, blank=True, help_text='https://github.com/lipis/flag-icons/tree/main/flags/4x3')
    short_code = models.CharField(
        max_length=5, null=True, blank=True, help_text='BD, US, IN, etc.')
    phone_code = models.CharField(max_length=10)
    min_digit = models.IntegerField()
    max_digit = models.IntegerField()

    def __str__(self):
        return self.name


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
