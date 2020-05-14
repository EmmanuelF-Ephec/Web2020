from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from . import models

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups', ]


class NoticeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Notice
        fields = ['user','id','title', 'content', 'created_at']

class ScheduleSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.Schedule
        fields = ['id', 'user', 'url', 'created_at']

class ChatSerializer(serializers.HyperlinkedModelSerializer):
    class Meta: 
        model = models.Chat
        fields = ['id', 'user', 'message', 'created_at']

class CustomJWTSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
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
