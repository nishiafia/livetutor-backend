import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models


def generate_uuid():
    return str(uuid.uuid4().hex)


class MetaFields(models.Model):
    '''This is an abstract model that provides created and modified time data.'''
    id = models.CharField(
        primary_key=True, default=generate_uuid, editable=False, max_length=32)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        abstract = True


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
