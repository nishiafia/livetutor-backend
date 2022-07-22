# Generated by Django 4.0.5 on 2022-07-22 12:45

from django.db import migrations, models
import django.db.models.deletion
import livetutor.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Booking',
            fields=[
                ('id', models.CharField(default=livetutor.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('is_active', models.BooleanField(default=True)),
                ('title', models.CharField(blank=True, max_length=100, null=True)),
                ('details', models.TextField(blank=True, null=True)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='BookingResponse',
            fields=[
                ('id', models.CharField(default=livetutor.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('is_active', models.BooleanField(default=True)),
                ('is_read', models.BooleanField(default=False)),
                ('message', models.TextField()),
                ('booking', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='booking_responses', to='booking.booking')),
            ],
            options={
                'ordering': ['-updated_at'],
            },
        ),
    ]
