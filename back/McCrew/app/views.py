from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from . import models, serializers

from McCrew.app.serializers import UserSerializer, GroupSerializer, NoticeSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


class NoticeViewSet(viewsets.ModelViewSet):
    queryset = models.Notice.objects.all()
    serializer_class = serializers.NoticeSerializer
    permission_classes = [permissions.IsAuthenticated]

class LastNoticeViewSet(viewsets.ModelViewSet):
    queryset = models.Notice.objects.all().order_by('-created_at')[:1]
    serializer_class = serializers.NoticeSerializer
    permission_classes = [permissions.IsAuthenticated]

class LastTenNoticesViewSet(viewsets.ModelViewSet):
    queryset = models.Notice.objects.all().order_by('-created_at')[:10]
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
