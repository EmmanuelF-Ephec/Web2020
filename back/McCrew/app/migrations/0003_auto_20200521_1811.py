# Generated by Django 3.0.5 on 2020-05-21 16:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_auto_20200511_1759'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='schedule',
            name='created_at',
        ),
        migrations.RemoveField(
            model_name='schedule',
            name='user',
        ),
        migrations.AddField(
            model_name='schedule',
            name='name',
            field=models.TextField(default=1),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='schedule',
            name='url',
            field=models.TextField(),
        ),
    ]
