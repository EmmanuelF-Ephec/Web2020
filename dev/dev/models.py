# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models



class Tbannonces(models.Model):
    idannonces = models.AutoField(db_column='idAnnonces', primary_key=True)  # Field name made lowercase.
    idutil = models.ForeignKey('Tbutilisateurs', models.DO_NOTHING, db_column='idUtil', blank=True, null=True)  # Field name made lowercase.
    texteannonce = models.TextField(db_column='texteAnnonce', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbannonces'


class Tbchat(models.Model):
    idmessage = models.AutoField(db_column='idMessage', primary_key=True)  # Field name made lowercase.
    idutil = models.ForeignKey('Tbutilisateurs', models.DO_NOTHING, db_column='idUtil', blank=True, null=True)  # Field name made lowercase.
    textemessage = models.TextField(db_column='texteMessage', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'tbchat'


class Tbhoraires(models.Model):
    idhoraires = models.AutoField(db_column='idHoraires', primary_key=True)  # Field name made lowercase.
    idutil = models.ForeignKey('Tbutilisateurs', models.DO_NOTHING, db_column='idUtil', blank=True, null=True)  # Field name made lowercase.
    url = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tbhoraires'


class Tbutilisateurs(models.Model):
    idutil = models.AutoField(db_column='idUtil', primary_key=True)  # Field name made lowercase.
    typecompte = models.CharField(db_column='typeCompte', max_length=8)  # Field name made lowercase.
    nom = models.CharField(max_length=50, blank=True, null=True)
    prenom = models.CharField(max_length=50, blank=True, null=True)
    mail = models.CharField(max_length=100)
    mdp = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'tbutilisateurs'
