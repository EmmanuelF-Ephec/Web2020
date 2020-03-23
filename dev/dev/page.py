from django.shortcuts import render
from django.http import HttpResponse

def afficheLorem(request):
    return render(request, 'TP06_Prepa_HE201749/lorem.html')

def afficheHello(request):
    return HttpResponse('<h1>Bonjour toi</h1>')
    
