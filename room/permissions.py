from rest_framework import permissions

from .models import RoomUser


class RoomAdminOnly(permissions.BasePermission):
    '''only the author of the room or branch admin for this room or the super admin of the organization can create,update,delete'''

    def has_object_permission(self, request, view, obj):
        if request.method in ['POST', 'DELETE', 'PUT']:
            if RoomUser.objects.filter(room=obj, user=request.user, role='admin').exists():
                return True
            else:
                return False
        
