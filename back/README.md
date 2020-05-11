python3 -m pip install --user virtualenv
python3 -m venv env
chmod u+x env/bin/activate
source env/bin/activate
pip install -r requirements.txt

cp McCrew/.env.example McCrew/.env

python manage.py migrate
python manage.py createsuperuser

python manage.py runserver



* Command for pip
pip install
pip freeze > requirements.txt