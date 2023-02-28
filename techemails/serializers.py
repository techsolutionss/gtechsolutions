from rest_framework import serializers
from rest_framework.serializers import ValidationError

class EmailSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=50)
    email = serializers.EmailField()
    phone = serializers.CharField(max_length=15)
    message = serializers.CharField(max_length=500)

    def validate(self,data):
        name = data["name"]
        phone = data["phone"]
        email = data["email"]
        message = data["message"]
        special_characters = "!#$%^&*=+}{][;:/,><"
        if len(name) < 5:
            raise ValidationError({"name":"name should not be less than 5 characters"})
        if len(phone) > 13:
            raise ValidationError({"phone":"phone should not be more than 11 characters"})
        if len(email) < 10:
            raise ValidationError({"email":"email should not be less than 10 characters"})
        if any(c in name for c in special_characters):
            raise ValidationError({"name":"name should not contain special characters"})
        if any(c in phone for c in special_characters):
            raise ValidationError({"phone":"phone should not contain special characters"})
        return data