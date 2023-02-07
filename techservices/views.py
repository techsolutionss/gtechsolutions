from rest_framework.response import Response
from .models import Services
from .serializers import ServiceSerializer
from rest_framework import status
from rest_framework.views import APIView

# Create your views here.
class ServiceViews(APIView):
    def get(self,request):
        services = Services.objects.all().order_by('title')
        service_serializer = ServiceSerializer(services, many=True)
        return Response(service_serializer.data,status=status.HTTP_200_OK)
