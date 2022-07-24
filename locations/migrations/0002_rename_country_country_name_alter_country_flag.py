# Generated by Django 4.0.5 on 2022-07-24 16:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('locations', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='country',
            old_name='country',
            new_name='name',
        ),
        migrations.AlterField(
            model_name='country',
            name='flag',
            field=models.TextField(blank=True, help_text='https://github.com/lipis/flag-icons/tree/main/flags/4x3', null=True),
        ),
    ]
