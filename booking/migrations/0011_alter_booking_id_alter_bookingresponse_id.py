# Generated by Django 4.0.5 on 2022-07-12 20:18

from django.db import migrations, models
import users.models


class Migration(migrations.Migration):

    dependencies = [
        ('booking', '0010_alter_booking_id_alter_bookingresponse_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='booking',
            name='id',
            field=models.CharField(default=users.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='bookingresponse',
            name='id',
            field=models.CharField(default=users.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False),
        ),
    ]
