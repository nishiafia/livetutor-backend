from rest_framework import permissions
from room.models import Room, RoomUser


class ObjectPermission(permissions.DjangoObjectPermissions):
    # def has_permission(self, request, view):
    #     if request.user.has_perm('view_room') or request.user.has_perm('change_room'):
    #         return True

    def has_object_permission(self, request, view, obj):
        if request.method == 'GET':
            return request.user.has_perm(f'(view_{obj._meta.model_name}', obj)
        if request.method == 'DELETE':
            return request.user.has_perm(f'(delete_{obj._meta.model_name}', obj)
        if request.method == 'PUT':
            return request.user.has_perm(f'(change_{obj._meta.model_name}', obj)
        # if request.method == 'POST':
        #     return request.user.has_perm(f'(change_{obj._meta.model_name}', obj)


class CreateObjectPermission(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method == 'POST':
            return True
        # return super().has_object_permission(request, view, obj)


class RoomUpdatePermission(permissions.DjangoObjectPermissions):
    def has_object_permission(self, request, view, obj):
        if request.method == 'DELETE':
            return request.user.has_perm('delete_room', obj.room)
        if request.method == 'PUT':
            return request.user.has_perm('change_room', obj.room)
        if request.method == 'POST':
            return request.user.has_perm('change_room', obj.room)


class RoomAdminPermission(permissions.DjangoObjectPermissions):
    def has_permission(self, request, view):
        if request.method == 'POST':
            if view.action == 'assign_bulk_room_users':
                return True
            try:
                if Room.objects.filter(pk=request.data['room'], author=request.user).exists():
                    return True
            except:
                return False
        else:
            return super().has_permission(request, view)

    def has_object_permission(self, request, view, obj):
        if request.method in ['POST', 'PUT', 'DELETE', ]:
            try:
                if Room.objects.filter(pk=obj.room.id, author=request.user, ).exists():
                    return True
            except:
                return False
