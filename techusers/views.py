from rest_framework.response import Response
from rest_framework.views import APIView 
from rest_framework import status 
from .serializers import UserSerializer
from django.contrib.auth.models import User
# from rest_framework.auth_token.model import Token

# Create your views here.
class UserViews(APIView):
    def post(self,request):
        user_data = request.data
        user_serializer = UserSerializer(data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return Response(user_serializer.data,status=status.HTTP_201_CREATED)
        return Response(user_serializer.errors,status=status.HTTP_400_BAD_REQUEST)