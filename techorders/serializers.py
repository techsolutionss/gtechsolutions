from rest_framework import serializers
from .models import Comments

class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = '__all__'

    def validate(self,data):
        return data
    
    def create(self,validated_data):
        comment = Comments(
            name=validated_data['name'],
            email=validated_data['email'],
            comments=validated_data['comments']
        )
        comment.save()
        return comment