# Generated by Django 4.0.5 on 2022-07-12 20:18

from django.db import migrations, models
import users.models


class Migration(migrations.Migration):

    dependencies = [
        ('task', '0017_alter_assignment_id_alter_assignmentcomment_id_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='assignment',
            name='id',
            field=models.CharField(default=users.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='assignmentcomment',
            name='id',
            field=models.CharField(default=users.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='assignmentfile',
            name='id',
            field=models.CharField(default=users.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='assignmentsubmission',
            name='id',
            field=models.CharField(default=users.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='assignmentsubmissionfile',
            name='id',
            field=models.CharField(default=users.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='assignmentsubmissionmark',
            name='id',
            field=models.CharField(default=users.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='exam',
            name='id',
            field=models.CharField(default=users.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='examcomment',
            name='id',
            field=models.CharField(default=users.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='examfile',
            name='id',
            field=models.CharField(default=users.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='examsubmission',
            name='id',
            field=models.CharField(default=users.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='examsubmissionfile',
            name='id',
            field=models.CharField(default=users.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='examsubmissionmark',
            name='id',
            field=models.CharField(default=users.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='note',
            name='id',
            field=models.CharField(default=users.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='notecomment',
            name='id',
            field=models.CharField(default=users.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='notefile',
            name='id',
            field=models.CharField(default=users.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False),
        ),
    ]
