from django.urls import path
from . import views


app_name = "techemails"
urlpatterns=[
    path("mailing/",views.EmailViews.as_view(),name="email view")
]