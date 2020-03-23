from django.contrib import admin
from .models import Utilisateur
from .models import Chat
from .models import Annonces
from .models import Horaires

admin.site.register(Utilisateur)
admin.site.register(Chat)
admin.site.register(Annonces)
admin.site.register(Horaires)
