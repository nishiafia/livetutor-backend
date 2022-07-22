# from guardian.admin import GuardedModelAdmin

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from.models import User


# TODO:CHANGE TO USERADMIN
class UserAdmin(admin.ModelAdmin):
    pass


admin.site.register(User, UserAdmin)
