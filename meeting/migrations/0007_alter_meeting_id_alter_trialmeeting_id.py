# Generated by Django 4.0.5 on 2022-07-12 20:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('meeting', '0006_alter_meeting_id_alter_trialmeeting_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='meeting',
            name='id',
            field=models.UUIDField(default='e87ef7d321c345ceafaad230e5fab420', editable=False, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='trialmeeting',
            name='id',
            field=models.UUIDField(default='e87ef7d321c345ceafaad230e5fab420', editable=False, primary_key=True, serialize=False),
        ),
    ]