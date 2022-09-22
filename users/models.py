

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
    username = models.CharField(null=True, blank=True, max_length=20, unique=True)
    photo = models.ImageField(upload_to='users/', blank=True, null=True)
    name = models.CharField(max_length=30, blank=True)
    email = models.EmailField(max_length=250, blank=True)
    phone = models.CharField(max_length=20)
    address = models.CharField(max_length=255, null=True, blank=True)
    country = models.ForeignKey(Country, on_delete=models.SET_NULL, null=True, related_name='country')
    user_type = models.CharField(
        max_length=20, choices=UserTypes.choices, default=UserTypes.REGULAR)

    USERNAME_FIELD = 'username'

    REQUIRED_FIELDS = ['phone', 'country']

    class Meta:
        unique_together = ('phone', 'country')

    def __str__(self):
        return f'{self.email}'
