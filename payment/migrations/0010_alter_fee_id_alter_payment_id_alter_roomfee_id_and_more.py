# Generated by Django 4.0.5 on 2022-07-12 20:18

from django.db import migrations, models
import users.models


class Migration(migrations.Migration):

    dependencies = [
        ('payment', '0009_alter_fee_id_alter_payment_id_alter_roomfee_id_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fee',
            name='id',
            field=models.CharField(default=users.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='payment',
            name='id',
            field=models.CharField(default=users.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='roomfee',
            name='id',
            field=models.CharField(default=users.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='roomfeepayment',
            name='id',
            field=models.CharField(default=users.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='roomuserfee',
            name='id',
            field=models.CharField(default=users.models.generate_uuid, editable=False, max_length=32, primary_key=True, serialize=False),
        ),
    ]