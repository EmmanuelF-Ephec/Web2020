# Generated by Django 3.0.5 on 2020-05-23 14:06

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_schedule_created_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='schedule',
            name='created_at',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 5, 23, 16, 6, 41, 77032)),
        ),
    ]