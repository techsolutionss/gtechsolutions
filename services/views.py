# create your views here
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from services.models import Service
from services.serializers import ServiceSerializer
from rest_framework.response import Response

@api_view(['GET'])
def service_api(request):
    if request.method == "GET":
        services = Service.objects.all()
        services_serializer = ServiceSerializer(services, many=True)
        return Response(services_serializer.data) 