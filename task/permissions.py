from django.db.models import Q
from rest_framework import permissions
from room.models import Room


class RoomAuthorOrTeacherOnly(permissions.BasePermission):
    '''only the author of the room or branch admin for this room or the super admin of the organization can create,update,delete'''

    def has_permission(self, request, view):
        if request.method in ['POST', 'PUT', 'DELETE', ]:
            if Room.objects.filter(Q(pk=request.data['room']) & (Q(author=request.user) | Q(roomuser__role='teacher'))).exists():
                return True
            else:
                return False
        else:
            return super().has_permission(request, view)

    def has_object_permission(self, request, view, obj):
        if request.method in ['POST', 'PUT', 'DELETE', ]:
            if Room.objects.filter(Q(pk=request.data['room']) & (Q(author=request.user) | Q(roomuser__role='teacher'))).exists():
                return True
            return False
