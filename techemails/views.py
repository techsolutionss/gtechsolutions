from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import EmailQueue
from .serializers import EmailSerializer
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.core.mail import EmailMessage,BadHeaderError

# Create your views here.
class EmailViews(APIView):
    def post(self,request):
        email_data = request.data
        email_serializer = EmailSerializer(data=email_data)
        if email_serializer.is_valid():
            from_email = email_serializer.data.get("email")
            name = email_serializer.data.get("name")
            phone = email_serializer.data.get("phone")
            message = email_serializer.data.get("message")
            return Response({"message":"successful"},status=status.HTTP_202_ACCEPTED)
        return Response(email_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
