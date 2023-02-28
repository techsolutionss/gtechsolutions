from rest_framework.response import Response
from rest_framework.views import APIView 
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication 
from .serializers import (UserSerializer,LoginSerializers)
from django.contrib.auth.models import User 
from django.core import serializers
from django.contrib.auth import authenticate
# from rest_framework.auth_token.model import Token

# Create your views here.
class UserViews(APIView):
    def post(self,request):
        user_data = request.data
        user_serializer = UserSerializer(data=user_data)
        if user_serializer.is_valid():
            user_serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        return Response(user_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    

class LoginViews(APIView):
    authentication_classes = (TokenAuthentication,)
    def post(self,request):
        login_data = request.data
        login_serializer = LoginSerializers(data=login_data)
        if not login_serializer.is_valid():
            return Response(login_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
        
        # getting the data from login_serializers
        username = login_serializer.data.get("username")
        password = login_serializer.data.get("password")

        # authenticating the credential against our backends
        user = authenticate(username=username,password=password)
        if user is None:
            return Response({"message":"invalid username or password"},status=status.HTTP_401_UNAUTHORIZED)        
        if not user.is_active:
            return Response({"message":"this account has been deactivated"},status=status.HTTP_403_FORBIDDEN)
        try:
            token = Token.objects.get(user=user)
        except Token.DoesNotExist:
            return Response(status=status.HTTP_403_FORBIDDEN)
        except:
            return Response(status=status.HTTP_403_FORBIDDEN)
        # collecting user datails to be sent back as response
        parsed_user ={}
        parsed_user["username"] = user.username 
        parsed_user["lastname"] = user.last_name 
        parsed_user["firstname"] = user.first_name 
        parsed_user["email"] = user.email
        parsed_user["token_key"] = token.key
        return Response({"user":parsed_user},status=status.HTTP_202_ACCEPTED)
    
