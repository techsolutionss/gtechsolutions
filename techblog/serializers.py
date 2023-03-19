from rest_framework import serializers
from techusers.serializers import UserSerializer

from techblog.models import PostField, Tag, Comment

class TagSerializers(serializers.ModelSerializer):

    class Meta:
        model = Tag
        fields = ['id', 'name']

class PostFieldSerializers(serializers.ModelSerializer):
    
    class Meta:
        model = PostField
        fields = ['title', 'slug', 'thumbnail', 'body', 
                   'read_time', 'create_at', 'edited_at', 'is_public']
        

class CommentSerializer(serializers.ModelSerializer):
    author = UserSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ['id', 'author', 'body', 'created_at']


class CreateCommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = ['body']
