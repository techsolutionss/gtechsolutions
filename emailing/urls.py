from django.urls import path
from emailing.views import Recievemail

urlpatterns = [
    path('mailing/', Recievemail.as_view(), name='recieve_mail')
]