# from rest_framework.response import Response
# from rest_framework import status
# from rest_framework.views import APIView
# from .serializers import UserSerializers


# # Create your views here.
# class UserViews(APIView):
#     def post(self,request):
#         user_data = request.data
#         user_serializer = UserSerializers(data=user_data)
#         if user_serializer.is_valid():
#             print(user_serializer.data)
#             return Response({"message":"user successfully created"},status=status.HTTP_201_CREATED)
#         return Response(user_serializer.errors,status=status.HTTP_400_BAD_REQUEST)