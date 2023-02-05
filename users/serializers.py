from rest_framework import serializers
from django.contrib.auth.hashers import make_password,check_password
# from rest_framework.serializers import ValidationError
# from rest_framework.authtoken.models import Token
# # from django.contrib.auth.models import User
# from django.conf import settings

# class UserSerializers(serializers.ModelSerializer):
#     class Meta:
#         model = settings.AUTH_USER_MODEL
#         fields = ("first_name","last_name","username","email","password")
#         extra_kwargs ={'password':{'write_only':True}}
    
#     def validate(self,data):
        
#         special_characters = "@#$%^&*)+(>?</"
        
#         firstname = data["first_name"]
#         lastname = data["last_name"]
#         email = data["email"]
        
#         # validating the incoming data 
#         if not firstname:
#             print(firstname)
#             raise ValidationError({"first_name":"this field is required"})
#         if not lastname:
#             raise ValidationError({"last_name":"this field is required"})
#         if not email:
#             raise ValidationError({"email":"this field is required"})
#         if len(firstname) < 6:
#             raise ValidationError({"first_name":"firstname should not be less than 6 characters!"})
#         if len(lastname) < 6:
#             raise ValidationError({"first_name":"lastname should not be less than 6 characters!"})
#         if any(c in special_characters for c in firstname):
#             raise ValidationError({"first_name":"firstname should not contain special characters!"})
#         if any(c in special_characters for c in lastname):
#             raise ValidationError({"last_name":"lastname should not contain special characters!"})
#         if User.objects.filter(username=data["username"]).exists():
#             raise ValidationError({"username":"username already exist!"})
#         return data
        
    # def create(self,validated_data):
    #     pass
    
