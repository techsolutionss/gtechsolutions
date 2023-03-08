from rest_framework import serializers

from techblog.models import PostField, Tag

class TagSerializers(serializers.ModelSerializer):

    class Meta:
        model = Tag
        fields = ['id', 'name']

class PostFieldSerializers(serializers.ModelSerializer):
    
    class Meta:
        model = PostField
        fields = ['title', 'slug', 'thumbnail', 'body', 
                   'read_time', 'create_at', 'edited_at', 'is_public']