from django.contrib import admin

from .models import Booking, BookingResponse


# Register your models here.
@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    pass

@admin.register(BookingResponse)
class BookingResponseAdmin(admin.ModelAdmin):
    pass
