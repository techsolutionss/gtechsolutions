from django.shortcuts import render
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from django.core.mail import send_mail, BadHeaderError
from .serializers import MailSerializers

# Create your views here.
class Recievemail(APIView):
    def post(self,request):
        # parse the incoming data to json format
        mail_data = JSONParser().parse(request)
        mail_serializer = MailSerializers(data = mail_data)
        if mail_serializer.is_valid():
            # if data is valid collect email data to be sent
            
            name = mail_serializer.data["name"]
            phone =mail_serializer.data["phone"]
            email = mail_serializer.data["email"]
            message = mail_serializer.data["message"]
            
            # collecting email parameters

            subject = "we are in need of your services"
            from_email = email

            try:
                send_mail(subject,message,from_email,["austinejoseph60@gmail.com"],fail_silently = False)
                return Response({"message":"successfully received"},status=status.HTTP_202_ACCEPTED)    
            except BadHeaderError:
                return Response("email sending failed")
        
            
        return Response(mail_serializer.errors)
        
        
        
