# urls are configured here
from django.conf.urls import url
from services.views import service_api

urlpatterns = [
    url('services/',service_api )
]