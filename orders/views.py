# raise ValidationError(_("input invalid %(value)s"),params:{"value":10})
from django.shortcuts import render
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from .serializers import OrderSerializers
from .models import Order
from rest_framework import status
from rest_framework.views import APIView

# Create your views here.

class OrderApi(APIView):
    def post(self,request):
            order_data = JSONParser().parse(request)
            order_serializer = OrderSerializers(data = order_data)
            if order_serializer.is_valid():
                print(order_serializer.initial_data)  
                return Response("successful",status=status.HTTP_201_CREATED)
            return Response(order_serializer.errors)
