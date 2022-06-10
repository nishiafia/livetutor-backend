# Generated by Django 4.0.5 on 2022-06-07 14:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listing', '0002_rename_teacher_list_booking_listed_teacher_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='booking',
            name='booking_date',
        ),
        migrations.RemoveField(
            model_name='booking',
            name='booking_time',
        ),
        migrations.AddField(
            model_name='booking',
            name='details',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='booking',
            name='title',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
