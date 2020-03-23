from django.shortcuts import render

from rest_framework import viewsets

from .serializers import UtilisateurSerializer
from .models import Utilisateur
from .serializers import HorairesSerializer
from .models import Horaires
from .serializers import ChatSerializer
from .models import Chat
from .serializers import AnnoncesSerializer
from .models import Annonces

class UtilisateurViewSet(viewsets.ModelViewSet):
    queryset = Utilisateur.objects.all().order_by('idUtil')
    serializer_class = UtilisateurSerializer

class ChatViewSet(viewsets.ModelViewSet):
    queryset = Chat.objects.all().order_by('idMessage')
    serializer_class = ChatSerializer

class AnnoncesViewSet(viewsets.ModelViewSet):
    queryset = Annonces.objects.all().order_by('idAnnonces')
    serializer_class = AnnoncesSerializer

class HorairesViewSet(viewsets.ModelViewSet):
    queryset = Horaires.objects.all().order_by('idHoraires')
    serializer_class = HorairesSerializer
