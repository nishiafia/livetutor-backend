from email.policy import default
from pickle import FALSE
from django.db import models

# Create your models here.
class Sms(models.Model):
    mobile_no = models.CharField(max_length=200)

    def __str__(self):
        return self.mobile_no