from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework import permissions
from . import models, serializers

from McCrew.app.serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class NoticeViewSet(viewsets.ModelViewSet):
    queryset = models.Notice.objects.all()
    serializer_class = serializers.NoticeSerializer
    permission_classes = [permissions.IsAuthenticated]

class ChatViewSet(viewsets.ModelViewSet):
    queryset = models.Chat.objects.all()
    serializer_class = serializers.ChatSerializer
    permission_classes = [permissions.IsAuthenticated]

class ScheduleViewSet(viewsets.ModelViewSet):
    queryset = models.Schedule.objects.all()
    serializer_class = serializers.ScheduleSerializer
    permission_classes = [permissions.IsAuthenticated]
