from django.contrib.auth.models import User
from rest_framework import serializers
from django.contrib import messages
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth.hashers import make_password
from . import models

class UserSerializer(serializers.HyperlinkedModelSerializer): 
    class Meta:
        model = User
        fields = [ 'id', 'email', 'last_name', 'first_name', 'password', 'is_staff', 'username' ]
    
    def validate_password (self, password) :
        return make_password(password)

class changePasswordSerializer(serializers.Serializer):
    model = User

    """
    Serializer for password change endpoint.
    """
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)

    #def validate_new_password (self, password) :
      #  return make_password(password)


class NoticeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Notice
        fields = ['user','id','title', 'content', 'created_at']

class ScheduleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Schedule
        fields = ['id', 'name', 'url', 'created_at']

class ChatSerializer(serializers.HyperlinkedModelSerializer):
    class Meta: 
        model = models.Chat
        fields = ['id', 'user', 'message', 'created_at']

class CustomJWTSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token["email"] = user.email
        token["first_name"] = user.first_name
        token["last_name"] = user.last_name
        token["is_staff"] = user.is_staff
        token["id"] = user.id

        return token

    def validate(self, attrs):
        credentials = {
            'username': '',
            'password': attrs.get("password")   
        }

        user_obj = User.objects.filter(email=attrs.get("username")).first() or User.objects.filter(
            username=attrs.get("username")).first()

        if user_obj:
            credentials['username'] = user_obj.username

        return super().validate(credentials)
