from django.conf.urls import url
from emailing.views import Recievemail

urlpatterns = [
    url('mailing/', Recievemail.as_view(), name='recieve_mail')
]