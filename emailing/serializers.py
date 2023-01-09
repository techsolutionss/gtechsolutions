from rest_framework import serializers
from rest_framework.serializers import ValidationError
from orders.utils import validate_phone

class MailSerializers(serializers.Serializer):
    name = serializers.CharField()
    email= serializers.EmailField()
    phone = serializers.CharField()
    message = serializers.CharField()

    def validate(self,data):
        if len(data['name']) < 6:
            raise ValidationError('name should not be less than 6 characters!')
        if not validate_phone(data['phone']):
            raise ValidationError('phone number not valid!')
        if len(data['message']) < 15:
            raise ValidationError('message field should not be less than 15 charcters!')

        return data