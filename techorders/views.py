from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Comments
import datetime
from .serializers import CommentsSerializer

class CommentView(APIView):
    def post(self,request):
        comment_data = request.data
        comment_serializer = CommentsSerializer(data=comment_data)
        if comment_serializer.is_valid():
            comment_serializer.save()
            return Response({"message":"successfull"},status=status.HTTP_201_CREATED)
        return Response(comment_serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def get(self,request):
        comment_list = []
        comments = Comments.objects.all().values()
        if comments and len(comments) > 0:
            for comment in comments:
                formated_date = str(comment['date'].strftime("%Y-%m-%d"))
                comment_list.append(
                    {"id":comment['id'],
                    "name":comment['name'],
                    "email":comment['email'],
                    "date":formated_date,
                    "comment":comment['comments']
                    }
                )
            if len(comment_list) <= 4:
                return Response(comment_list,status=status.HTTP_200_OK)
            else:    
                return Response(comment_list[-4:],status=status.HTTP_200_OK)    
        return Response([],status=status.HTTP_204_NO_CONTENT)

