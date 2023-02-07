from django.urls import path
from .views import ServiceViews


app_name ='techservices'
urlpatterns = [
    path('services/', ServiceViews.as_view(), name='services')
]