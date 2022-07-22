import uuid

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
