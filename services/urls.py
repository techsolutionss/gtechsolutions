# urls are configured here
from django.urls import path
from services.views import service_api

urlpatterns = [
    path('services/',service_api )
]