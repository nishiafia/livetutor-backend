
from django.db import models
from django.utils import crypto
from livetutor.models import MetaFields
from users.models import User


class RoomUserRole:
    STUDENT = 'student'
    TEACHER = 'teacher'
    ADMIN = 'admin'
    ROLE_CHOICES = (
        (STUDENT, 'Student'),
        (TEACHER, 'Teacher'),
        (ADMIN, 'Admin'),
    )


class RoomManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(is_active=True)


class Room(MetaFields):
    author = models.ForeignKey(
        User, on_delete=models.PROTECT, verbose_name='Room Admin', related_name='author')
    name = models.CharField(max_length=55)
    code = models.CharField(max_length=10, unique=True,
                            editable=False, )
    categories = models.ManyToManyField(
        'categories.Category', related_name='rooms', blank=True)
    user = models.ManyToManyField(
        User, through='RoomUser', verbose_name='Users')
    # TODO: add a manager for active rooms
    # objects = RoomManager()

    def save(self, *args, **kwargs):
        self.code = crypto.get_random_string(length=10)
        return super().save(*args, **kwargs)


class RoomUser(MetaFields):
    """
    This is a model that represents a user's relationship with a room.
    Roomuser with a role admin is the owner of the room.
    """
    room = models.ForeignKey(
        Room, on_delete=models.CASCADE, related_name='roomuser')
    user = models.ForeignKey(
        'users.user', on_delete=models.CASCADE, related_name='roomuser')
    role = models.CharField(
        max_length=10, choices=RoomUserRole.ROLE_CHOICES, default=RoomUserRole.STUDENT)
    has_joined = models.BooleanField(default=False)

    class Meta:
        unique_together = ('room', 'user')
