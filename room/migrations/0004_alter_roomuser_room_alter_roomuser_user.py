# Generated by Django 4.0.5 on 2022-08-08 16:02

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('room', '0003_alter_roomuser_role'),
    ]

    operations = [
        migrations.AlterField(
            model_name='roomuser',
            name='room',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='room_users', to='room.room'),
        ),
        migrations.AlterField(
            model_name='roomuser',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='room_users', to=settings.AUTH_USER_MODEL),
        ),
    ]