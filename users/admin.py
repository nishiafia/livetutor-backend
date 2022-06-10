# from guardian.admin import GuardedModelAdmin

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from.models import City, Division, User, District, PoliceStation


# TODO:CHANGE TO USERADMIN
class UserAdmin(admin.ModelAdmin):
    pass


admin.site.register(User, UserAdmin)
admin.site.register(City)
admin.site.register(Division)
admin.site.register(District)
admin.site.register(PoliceStation)
