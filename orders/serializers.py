from rest_framework import serializers
from rest_framework.serializers import ValidationError
from django.utils.translation import gettext_lazy as _
from .models import Order
from django.core.validators import MinLengthValidator
from .utils import validate_phone

class OrderSerializers(serializers.ModelSerializer):
    class Meta:
        model = Order
        # fields = ['firstname','lastname','phone_no','email','order_title','order_description','location']
        exclude = ['order_reference','order_date','status']

    # validating incoming data before they are saved to the database 
    def validate(self,data):
        special_characters = "@#$%^&*)+(>?</"

        if len(data['firstname']) < 6:
            raise ValidationError(('firstname should not be less than eight characters!'))
        if any(c in special_characters for c in data['firstname']):
            raise ValidationError(('firstname should not contain any special characters!'))
        
        if len(data['lastname']) < 6:
            raise ValidationError(('lastname should not be less than eight characters!'))
        
        if any(c in special_characters for c in data['lastname']):
            raise ValidationError(('lastname should not contain any special characters!'))
        
        if data['firstname'] == data['lastname']:
            raise ValidationError('firstname must be different from lastname')

        # if not validate_phone(data['phone_no']):
        #     raise ValidationError('please enter a valid phone number')

        if len(data['order_description']) < 20:
            raise ValidationError('message field should not be less than 20 character!')
        return data      
