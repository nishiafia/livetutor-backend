

from django.contrib.auth.models import AbstractUser
from django.db import models
from livetutor.models import MetaFields
from locations.models import City, Country, District, Division, PoliceStation


class UserTypes(models.TextChoices):
    ORGANIZATION = 'ORGANIZATION', 'Organization'
    REGULAR = 'REGULAR', 'Regular'

class User(AbstractUser, MetaFields):
    # first_name = None  # removing first name
    # last_name = None  # removing last name
    photo = models.ImageField(upload_to='users/', blank=True, null=True)
    name = models.CharField(max_length=30, blank=True)
    email = models.EmailField(max_length=250, blank=True)
    username = models.CharField(null=True, blank=True, max_length=20)
    phone = models.CharField(max_length=20, unique=True)
    address = models.CharField(max_length=255, null=True, blank=True)
    user_type = models.CharField(
        max_length=20, choices=UserTypes.choices, default=UserTypes.REGULAR)

    USERNAME_FIELD = 'phone'

    REQUIRED_FIELDS = ['username', 'email']

    def __str__(self):
        return f'{self.email}'
