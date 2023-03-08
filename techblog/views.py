from django.shortcuts import get_object_or_404
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework import status
from rest_framework.generics import ListAPIView
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView

from techblog.models import PostField
from techblog.serializers import PostFieldSerializers


class PostFieldList(ListAPIView):
    """
    display the list of all the post from database.
    """
    
    serializer_class = PostFieldSerializers

    def get_queryset(self):
        recent = self.request.query_params.get('recent')
        if recent == 'true':
            return PostField.objects.all()[:4]
        
        return PostField.objects.all()
    
    @swagger_auto_schema(Response={200: PostFieldSerializers(many=True)})
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)
    
class PostListDetials(APIView):

    """
    details about the information posted 
    """
    @swagger_auto_schema(responses={200: PostFieldSerializers(), 404: openapi.Response(description='Not Found')})
    def get(self, request: Request, slug: str, format=None):
        post = get_object_or_404(PostField, slug=slug)

        data = PostFieldSerializers(post).data
        return Response(data, status=status.HTTP_200_OK)
    
