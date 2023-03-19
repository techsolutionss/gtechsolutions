from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import EmailQueue
from .serializers import EmailSerializer
from .utils import send_email_message

# Create your views here.
class EmailViews(APIView):
    def post(self,request):
        email_data = request.data
        email_serializer = EmailSerializer(data=email_data)
        if not email_serializer.is_valid():
            return Response(email_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        from_email = email_serializer.data.get("email")
        name = email_serializer.data.get("name")
        phone = email_serializer.data.get("phone") 
        message = email_serializer.data.get("message")
        send_message = send_email_message(from_email=from_email,message=message)
        if not send_message:
            print("wrong")
            return Response({"message":"something went wrong"},status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        print("well")
        return Response({"message":"email sent successfully"},status=status.HTTP_202_ACCEPTED)        

