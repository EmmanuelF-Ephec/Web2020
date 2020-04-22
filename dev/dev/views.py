from django.shortcuts import render
from rest_framework import viewsets


from .serializers import *
class UtilisateursAPI(viewsets.ModelViewSet):
    serializer_class = UtilisateursSerializer
    queryset = Tbutilisateurs.objects.all()

    def get_queryset(self):
        queryset = Tbutilisateurs.objects.all()
        mail = self.request.query_params.get('mail', None)
        if mail is not None:
            queryset = queryset.filter(mail=mail)
        return queryset

class AnnoncesAPI(viewsets.ModelViewSet):
    serializer_class = AnnoncesSerializer
    queryset = Tbannonces.objects.all()

class HorairesAPI(viewsets.ModelViewSet):
    serializer_class = HorairesSerializer
    queryset = Tbhoraires.objects.all()

class ChatAPI(viewsets.ModelViewSet):
    serializer_class = ChatSerializer
    queryset = Tbchat.objects.all()