# Generated by Django 4.0.5 on 2022-07-12 20:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('payment', '0008_alter_fee_id_alter_payment_id_alter_roomfee_id_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fee',
            name='id',
            field=models.CharField(default='7b6d0ded9f9b4c579ff4a191629bb2b1', editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='payment',
            name='id',
            field=models.CharField(default='7b6d0ded9f9b4c579ff4a191629bb2b1', editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='roomfee',
            name='id',
            field=models.CharField(default='7b6d0ded9f9b4c579ff4a191629bb2b1', editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='roomfeepayment',
            name='id',
            field=models.CharField(default='7b6d0ded9f9b4c579ff4a191629bb2b1', editable=False, max_length=32, primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='roomuserfee',
            name='id',
            field=models.CharField(default='7b6d0ded9f9b4c579ff4a191629bb2b1', editable=False, max_length=32, primary_key=True, serialize=False),
        ),
    ]