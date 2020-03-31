from rest_framework import serializers
from .models import *

class UtilisateursSerializer(serializers.ModelSerializer):
    class Meta:
        model=Tbutilisateurs
        fields = "__all__"

class AnnoncesSerializer(serializers.ModelSerializer):
    class Meta:
        model=Tbannonces
        fields = "__all__"

class HorairesSerializer(serializers.ModelSerializer):
    class Meta:
        model=Tbhoraires
        fields = "__all__"

class ChatSerializer(serializers.ModelSerializer):
    class Meta:
        model=Tbchat
        fields = "__all__"