from django.contrib import admin

from .models import TeacherListing, TeacherLocation, TeacherPremium


@admin.register(TeacherPremium)
class TeacherPremiumAdmin(admin.ModelAdmin):
    pass


@admin.register(TeacherLocation)
class TeacherLocationAdmin(admin.ModelAdmin):
    pass


@admin.register(TeacherListing)
class TeacherListingAdmin(admin.ModelAdmin):
    list_display = ['user',
                    'active', 'verified']


