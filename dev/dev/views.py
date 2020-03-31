from django.shortcuts import render
from rest_framework import viewsets

from .serializers import *

class UtilisateursAPI(viewsets.ModelViewSet):
    serializer_class = UtilisateursSerializer
    queryset = Tbutilisateurs.objects.all()

class AnnoncesAPI(viewsets.ModelViewSet):
    serializer_class = AnnoncesSerializer
    queryset = Tbannonces.objects.all()

class HorairesAPI(viewsets.ModelViewSet):
    serializer_class = HorairesSerializer
    queryset = Tbhoraires.objects.all()

class ChatAPI(viewsets.ModelViewSet):
    serializer_class = ChatSerializer
    queryset = Tbchat.objects.all()