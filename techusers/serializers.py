from rest_framework import serializers
from rest_framework.serializers import ValidationError
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User

# create a serializer class to serialize the incoming data
class UserSerializer(serializers.Serializer):
    
    first_name = serializers.CharField(max_length=50)
    last_name = serializers.CharField(max_length=50)
    email = serializers.EmailField()
    username = serializers.CharField(max_length=50)
    password = serializers.CharField(max_length=50)

    class Meta:
        extra_kwargs ={'password':{'write_only':True}}
    
    # validating the incoming data 
    def validate(self,data):
        special_characters = "!#$%^&*)(_+-=;:\/.,<>}{"
        if any(c in data["first_name"] for c in special_characters):
            raise ValidationError({"first_name":"firstname should not contain special charcters"})
        if any(c in data["last_name"] for c in special_characters):
            raise ValidationError({"last_name":"lastname should not contain special charcters"})
        if any(c in data["username"] for c in special_characters):
            raise ValidationError({"username":"username should not contain special charcters"})
        if len(data["first_name"]) < 5:
            raise ValidationError({"first_name":"firstname should not be less than 5 charcters!"})
        if len(data["last_name"]) < 5:
            raise ValidationError({"last_name":"lastname should not be less than 5 charcters!"})
        if len(data["username"]) < 5:
            raise ValidationError({"username":"username should not be less than 5 charcters!"})
        
        # check to see if the user already exist in the database
        if User.objects.filter(username=data["username"]).exists():
            raise ValidationError({"username":"there already exist a user with the given username"})
        return data
    # saving the validated data to the database
    def create(self, validated_data):
        firstname = validated_data["first_name"]
        lastname = validated_data["last_name"]
        username = validated_data["username"]
        email = validated_data["email"]
        password = validated_data["password"]
        user = User(
            first_name =firstname,
            last_name = lastname,
            email = email,
            username = username
        )
        user.set_password(password)
        user.save()
        Token.objects.create(user=user)
        return user
    
    def update(self, instance, validated_data):
        pass

class LoginSerializers(serializers.Serializer):
    username = serializers.CharField(max_length=50)
    password = serializers.CharField(max_length=50)


    