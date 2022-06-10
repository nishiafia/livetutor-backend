
from django.contrib.auth.models import Group, Permission
from django.db.models import Q
from rest_framework import serializers
from users.models import User
from users.serializers import UserSerializer
from categories.serializers import CategorySerializer

from .models import Room, RoomUser




class RoomSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(
        many=True, required=False)
    # checks if the author is the current user
   # is_author = serializers.ReadOnlyField()

    class Meta:
        model = Room
        fields = '__all__'
        extra_kwargs = {
            'id': {'read_only': True},
            'code': {'read_only': True},
        }

    def to_representation(self, instance):
        data = super().to_representation(instance)

        try:

            if instance.author.id == self.context['user_id']:
                # If the room author is the current user, then add the is_author field
                # if RoomUser.objects.filter(
                #         room=instance, user=self.context['user_id'], role='admin').exists():
                data['is_author'] = True
            # else:

            #     branch_room = BranchRoom.objects.filter(
            #         Q(room=instance) & (Q(branch_users__user=self.context['user_id']) | Q(author__user=self.context['user_id'])))[0]

            #     if branch_room:
            #         data['branch'] = branch_room.branch.name
            #         data['organization'] = branch_room.branch.organization.name

            #         if branch_room.author.user.id == self.context['user_id']:
            #             data['is_author'] = True
        except:
            pass

        return data


class RoomUserSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=False)

    class Meta:
        model = RoomUser
        fields = '__all__'

    # def save(self, **kwargs):
    #     created = self.instance is not None
    #     result = super().save(**kwargs)
    #     assign_perm('room.view_room', self.instance.user, self.instance.room)
    #     return result
        # assign_perm('view_room', self.instance.user, self.instance.room)
        # permissions_map = self.get_permissions_map(created)
        # self.assign_permissions(permissions_map)

    # def get_permissions_map(self, created):
    #     current_user = self.context['request'].user
    #     room_users, created = Group.objects.get_or_create(name='room_users')
    #     supervisors, created = Group.objects.get_or_create(name='supervisors')
    #     return {
    #         'add_room_user': [current_user],
    #         'view_room_user': [current_user, room_users, supervisors],
    #         'change_room_user': [current_user, supervisors],
    #         'delete_room_user': [current_user, supervisors]
    #     }
