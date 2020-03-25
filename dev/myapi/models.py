from django.db import models
        

class Utilisateur(models.Model):
        
        idUtil = models.IntegerField(primary_key=True)
        typeCompte = models.CharField(max_length=8)
        nom = models.CharField(max_length=50)
        prenom = models.CharField(max_length=50)        
        mail = models.EmailField(max_length=100, unique=True)
        mdp = models.CharField(max_length=100)

        def __str__(self):
                return self.name

class Annonces(models.Model):
        
        idAnnonces = models.IntegerField(primary_key=True)
        idUtil = models.ForeignKey(Utilisateur, on_delete=models.CASCADE)
        texteAnnonce = models.CharField(max_length=10000)

        def __str__(self):
                return self.name

class Horaires(models.Model):
        
        idHoraires = models.IntegerField(primary_key=True)
        idUtil = models.ForeignKey(Utilisateur, on_delete=models.CASCADE)
        url = models.CharField(max_length=100)

        def __str__(self):
                return self.name

class Chat(models.Model):
        
        idMessage = models.IntegerField(primary_key=True)
        idUtil = models.ForeignKey(Utilisateur, on_delete=models.CASCADE)
        texteMessage = models.CharField(max_length=5000)

        def __str__(self):
                return self.name

        

