# Generated by Django 4.0.3 on 2022-05-19 14:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('categories', '0007_alter_category_title_alter_grade_title_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='grade',
            name='title',
            field=models.CharField(max_length=20),
        ),
    ]
