from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Notice(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, models.DO_NOTHING, blank=False, null=False)
    title = models.TextField(blank=False, null=False)
    content = models.TextField(blank=True, null=True)  # Field name made lowercase.
    created_at = models.DateTimeField(blank=True, null=True)  # Field name made lowercase.

    class Meta:
        db_table = 'notice'


class Chat(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, models.DO_NOTHING, blank=True, null=True)
    message = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        db_table = 'chat'


class Schedule(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, models.DO_NOTHING, blank=True, null=True)
    url = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        db_table = 'Schedule'
