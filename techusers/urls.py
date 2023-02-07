from django.urls import path
from . import views

app_name="techusers"

urlpatterns = [
    path('createuser/',views.UserViews.as_view(), name="createuser"),
]
