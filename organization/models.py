from django.db import models
from livetutor.models import MetaFields


class Organization(MetaFields):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    
    class Meta:
        verbose_name_plural = 'Organizations'
    def __str__(self):
        return self.name
