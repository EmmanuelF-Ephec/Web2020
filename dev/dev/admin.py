
from django.contrib import admin

# Register your models here.
from . import *

admin.site.register(models.Tbutilisateurs)
admin.site.register(models.Tbannonces)
admin.site.register(models.Tbhoraires)
admin.site.register(models.Tbchat)