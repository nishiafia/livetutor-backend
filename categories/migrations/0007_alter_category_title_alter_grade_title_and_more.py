# Generated by Django 4.0.3 on 2022-05-19 14:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('categories', '0006_alter_subject_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='title',
            field=models.CharField(max_length=40),
        ),
        migrations.AlterField(
            model_name='grade',
            name='title',
            field=models.CharField(max_length=40),
        ),
        migrations.AlterField(
            model_name='subject',
            name='title',
            field=models.CharField(max_length=40),
        ),
    ]
