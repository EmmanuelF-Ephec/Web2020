from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework import permissions
from . import models, serializers
from django.views.decorators.csrf import csrf_exempt
from McCrew.app.serializers import UserSerializer, NoticeSerializer
from django.http import HttpResponse, Http404
from django.core.files.storage import FileSystemStorage
from django.conf import settings
import os

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-last_name')
    serializer_class = UserSerializer
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
    queryset = models.Schedule.objects.all().order_by('-created_at')
    serializer_class = serializers.ScheduleSerializer
    permission_classes = [permissions.IsAuthenticated]

@csrf_exempt
def upload(request): 
    if (request.method == 'POST'):
        uploaded_file = request.FILES['file']
        fs = FileSystemStorage()
        name = fs.save(uploaded_file.name, uploaded_file)

    return HttpResponse(fs.url(name))

def download(request, path):
    file_path = os.path.join(settings.BASE_DIR, path)
    if os.path.exists(file_path):
        with open(file_path, 'rb') as fh:
            response = HttpResponse(fh.read(), content_type="application/vnd.ms-excel")
            response['Content-Disposition'] = 'inline; filename=' + os.path.basename(file_path)
            return response
    raise Http404