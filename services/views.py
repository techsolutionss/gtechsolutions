# create your views here
from django.shortcuts import render
from django.http.response import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from services.models import Service
from services.serializers import ServiceSerializer

@api_view(['GET'])
def service_api(request):
    if request.method == "GET":
        services = Service.objects.all()
        services_serializer = ServiceSerializer(services, many=True)
        return JsonResponse(services_serializer.data, safe=False) 