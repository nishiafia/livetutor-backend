from django.contrib import admin

from categories.models import Category, Grade, Subject


class SubjectInline(admin.TabularInline):
    model = Subject
    extra = 0


class CategoryAdmin(admin.ModelAdmin):
    inlines = [SubjectInline]


admin.site.register(Category, CategoryAdmin)
admin.site.register(Subject)
admin.site.register(Grade)
