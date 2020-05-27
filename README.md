# Web2020
Manuel d'installation: 

Creer une base de données mysql avec un nom quelconque

Aller dans le directory 'back' et créer un fichier que on nomme '.env'

Dans ce fichier ajouter tous les champs suivant:

SECRET_KEY=UneSecretKey DEBUG=True DB_NAME= B_HOST=127.0.0.1 DB_PORT=3306 DB_USER= DB_PASSWORD=

Changer les endroits ou c'est vide par vos coordonées

En back-end:

Ouvrir un terminal dans la directory "back"

python3 -m pip install --user virtualenv(installer environnement virtuel)

python3 -m venv env(créer l'environnement virtuel)

chmod u+x env/bin/activate

source env/bin/activate(Activer l'environnement virtuel)

pip install -r requirements.txt(installer toutes les dépendances nécessaires pour le fonctionnement du serveur Django)

python manage.py migrate pour créer toutes les tables dans la base de données(besoin d'être créée avant la commande)

python manage.py runserver(démarrer le serveur Django + connexion à la base de donnée)

En Front-end

Ouvrir un nouveau terminal dans la directory "fend"

npm install(installer toutes les dépendances react)

npm start(démarrer l'application react)
