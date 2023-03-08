from django.contrib import admin
from django.urls import (path,re_path,include)
from django.conf.urls.static import static
from django.views.generic import TemplateView
from django.conf import settings
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
   openapi.Info(
      title="Snippets API",
      default_version='v1',
      description="Test description",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="contact@snippets.local"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=[permissions.AllowAny],
)





urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('techusers.urls')),
    path('api/',include('techservices.urls')),
    path('api/',include('techemails.urls')),
    path('api/',include('techorders.urls')),
    path('api/',include('techblog.urls')),
    re_path('(?!.*(static))',TemplateView.as_view(template_name="index.html")),
    re_path(r'^swagger(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    re_path(r'^swagger/$', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    re_path(r'^redoc/$', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc')
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)