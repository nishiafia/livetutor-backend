# Generated by Django 4.0.5 on 2022-07-12 20:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('categories', '0015_alter_category_id_alter_grade_id_alter_subject_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='id',
            field=models.CharField(default='7b6d0ded9f9b4c579ff4a191629bb2b1', editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='grade',
            name='id',
            field=models.CharField(default='7b6d0ded9f9b4c579ff4a191629bb2b1', editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='subject',
            name='id',
            field=models.CharField(default='7b6d0ded9f9b4c579ff4a191629bb2b1', editable=False, max_length=32, primary_key=True, serialize=False),
        ),
    ]