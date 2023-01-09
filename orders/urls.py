# create urls here
from django.urls import path
from .views import OrderApi

urlpatterns = [
    path('sendorder/',OrderApi.as_view() ),
]