"""McCrew URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt import views as jwt_views
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from django.conf import settings
from django.conf.urls.static import static


from McCrew.app import views
from McCrew.app.serializers import CustomJWTSerializer

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'notices', views.NoticeViewSet)
router.register(r'lastNotice', views.LastNoticeViewSet)
router.register(r'chat', views.ChatViewSet)
router.register(r'schedule', views.ScheduleViewSet)
router.register(r'^changePassword', views.changePasswordViewSet, basename="changePassword")

schema_view = get_schema_view(
    openapi.Info(
        title="McCrew API",
        default_version='v1',
        description="McCrew API V1",
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)

urlpatterns = [ 
    url(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    url(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    url(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    url(r'^download(?P<file_path>.*)/$', views.file_download, name='file_download'),

    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('api/token/', jwt_views.TokenObtainPairView.as_view(serializer_class=CustomJWTSerializer),
         name='token_obtain_pair'),
    path('api/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('upload/', views.upload, name='upload'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)