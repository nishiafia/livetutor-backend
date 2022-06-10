from django.db import models
from users.models import MetaFields


# Create your models here.
class Category(MetaFields):
    '''
        category of different type.
        category can belong to user, room, or both.
    '''
    title = models.CharField(max_length=40)
    user = models.ForeignKey('users.User', on_delete=models.CASCADE,
                             related_name='categories', blank=True, null=True)
    # user = models.ForeignKey( 'auth.User', on_delete=models.PROTECT)

    class Meta:
        verbose_name_plural = 'Categories'

    def __str__(self) -> str:
        return self.title


class Subject(models.Model):
    category = models.ForeignKey(
        Category, related_name='subjects', on_delete=models.PROTECT)
    title = models.CharField(max_length=40)
    description = models.TextField(blank=True, null=True)

    def __str__(self) -> str:
        return self.title


class Grade(models.Model):
    title = models.CharField(max_length=20)
    description = models.TextField(blank=True, null=True)

    def __str__(self) -> str:
        return self.title
