from django.contrib.auth.models import User
from rest_framework import viewsets, permissions, generics, mixins, status
from rest_framework.response import Response
from . import models, serializers
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse

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
    queryset = models.Notice.objects.all().order_by('-created_at')[]
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

class changePasswordViewSet(viewsets.GenericViewSet, mixins.UpdateModelMixin):
   
        serializer_class = serializers.changePasswordSerializer
        model = User
        permission_classes = [permissions.IsAuthenticated]
        queryset = User.objects.all()
@csrf_exempt
def upload(request): 
    if (request.method == 'POST'):
        uploaded_file = request.FILES['file']
        fs = FileSystemStorage()
        name = fs.save(uploaded_file.name, uploaded_file)

    return HttpResponse(fs.url(name))

def file_download(request, file_path):
    try:
        response = StreamingHttpResponse(open(file_path, 'rb'))
        response['content_type'] = "application/octet-stream"
        response['Content-Disposition'] = 'attachment; filename=' + os.path.basename(file_path)
        return response
    except Exception:
        raise Http404

class changePasswordViewSet(viewsets.ModelViewSet):
    queryset = models.User.objects.all()
    serializer_class = serializers.changePasswordSerializer
    permission_classes = [permissions.IsAuthenticated]

        def get_object(self, queryset=None):
            obj = self.request.user
            return obj

        def update(self, request, *args, **kwargs):
            self.object = self.get_object()
            serializer = self.get_serializer(data=request.data)

            if serializer.is_valid():
                # Check old password
                if not self.object.check_password(serializer.data.get("old_password")):
                    return Response({"old_password": ["Wrong password."]}, status=status.HTTP_400_BAD_REQUEST)
                # set_password also hashes the password that the user will get
                self.object.set_password(serializer.data.get("new_password"))
                self.object.save()
                response = {
                    'status': 'success',
                    'code': status.HTTP_200_OK,
                    'message': 'Password updated successfully',
                    'data': []
                }

                return Response(response)

            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


