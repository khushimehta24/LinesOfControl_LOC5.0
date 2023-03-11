from rest_framework import serializers
from .models import *
import re

from rest_framework.exceptions import ValidationError

email_pattern = re.compile(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)")
phone_no_pattern = re.compile(r"\d{10}")

class UserRegisterSerializer(serializers.ModelSerializer):
    password= serializers.CharField(max_length = 16, min_length = 8, write_only=True)
    confirm_password= serializers.CharField(max_length = 16, min_length = 8, write_only=True)

    class Meta:
        model = User
        fields = ['uid', 'name', 'email', 'password','confirm_password','phone_no', 'city', 'image', 'is_client']

    # To validate data received
    def validate(self, attrs):
        email = attrs.get('email', ' ')
        password = attrs.get('password')
        phone_no = attrs.get('phone_no')
        confirm_password = attrs.pop('confirm_password')
        if password != confirm_password:
            raise ValidationError("The password doesn't match!")
        if not email_pattern.match(email):
            raise serializers.ValidationError('Please enter a valid email!')
        if not phone_no_pattern.match(phone_no):
            raise serializers.ValidationError('Please enter a valid phone number!')
        return attrs

    # To create a new user
    def create(self, validated_data):
        validated_data['is_active'] = True
        return User.objects.create_user(**validated_data)
    

class LoginSerializer(serializers.ModelSerializer):
    password=serializers.CharField(max_length=32,min_length=8,write_only = True)
    is_client = serializers.BooleanField(read_only=True)
    class Meta:
        model = User
        fields = ['email','password', 'is_client']

class UserSerializer(serializers.ModelSerializer):
    password= serializers.CharField(max_length = 16, min_length = 8, write_only=True)
    uid = serializers.IntegerField(read_only=True)
    class Meta:
        model = User
        fields = ['id', 'uid', 'name', 'email','phone_no', 'password', 'city', 'image', 'likes', 'is_client']

    # To update user
    def update(self,validated_data,instance):
        instance.name = validated_data['name'] 
        instance.phone_no = validated_data['phone_no']
        instance.city = validated_data['city']
        if instance.password != validated_data['password']:
            instance.set_password(validated_data['password'])
        instance.save()
        return instance