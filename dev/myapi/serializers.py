from rest_framework import serializers

from .models import Utilisateur
from .models import Chat
from .models import Horaires
from .models import Annonces

class UtilisateurSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Utilisateur
        fields = ('idUtil', 'typeCompte', 'nom', 'prenom', 'mail', 'mdp')

class ChatSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Chat
        fields = ('idMessage', 'idUtil', 'textMessage')

class HorairesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Horaires
        fields = ('idHoraires', 'idUtil', 'url')

class AnnoncesSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Chat
        fields = ('idAnnonces', 'idUtil', 'textAnnonce')
