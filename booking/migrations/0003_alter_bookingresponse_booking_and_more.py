# Generated by Django 4.0.5 on 2022-06-13 15:59

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('booking', '0002_bookingresponse'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookingresponse',
            name='booking',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='booking_responses', to='booking.booking'),
        ),
        migrations.AlterField(
            model_name='bookingresponse',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='booking_responses', to=settings.AUTH_USER_MODEL),
        ),
    ]