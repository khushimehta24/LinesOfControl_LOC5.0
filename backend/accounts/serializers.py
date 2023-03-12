from rest_framework import serializers
from .models import *
import re
from portfolio.serializers import *

from rest_framework.exceptions import ValidationError

email_pattern = re.compile(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)")
phone_no_pattern = re.compile(r"\d{10}")

class UserRegisterSerializer(serializers.ModelSerializer):
    password= serializers.CharField(max_length = 16, min_length = 8, write_only=True)
    confirm_password= serializers.CharField(max_length = 16, min_length = 8, write_only=True)
    id = serializers.IntegerField(read_only=True)

    class Meta:
        model = User
        fields = ['id','uid', 'name', 'email', 'password','confirm_password','phone_no', 'city', 'image', 'likes', 'followers', 'following', 'is_client', 'engagement', 'nature', 'portrait', 'wildlife', 'urban', 'cluster']

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
    id = serializers.IntegerField(read_only=True)
    uid = serializers.CharField(read_only=True)
    name = serializers.CharField(read_only=True)
    phone_no = serializers.CharField(read_only=True)
    city = serializers.CharField(read_only=True)
    image = serializers.CharField(read_only=True)
    likes = serializers.CharField(read_only=True)
    engagement = serializers.IntegerField(read_only=True)
    is_client = serializers.BooleanField(read_only=True)
    nature = serializers.IntegerField(read_only=True)
    portrait = serializers.IntegerField(read_only=True)
    wildlife = serializers.IntegerField(read_only=True)
    urban = serializers.IntegerField(read_only=True)
    cluster = serializers.IntegerField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'uid', 'name', 'email','phone_no', 'password', 'city', 'image', 'likes', 'followers', 'following', 'is_client', 'engagement', 'nature', 'portrait', 'wildlife', 'urban', 'cluster']

class UserSerializer(serializers.ModelSerializer):
    photos = PhotographSerializer(source ='user', many=True)
    password= serializers.CharField(max_length = 16, min_length = 8, write_only=True)
    uid = serializers.CharField(read_only=True)
    class Meta:
        model = User
        fields = ['id', 'uid', 'name', 'email','phone_no', 'password', 'city', 'image', 'likes', 'followers', 'following', 'is_client', 'engagement', 'nature', 'portrait', 'wildlife', 'urban', 'cluster', 'photos']   
    # To update user
    def update(self,validated_data,instance):
        instance.name = validated_data['name'] 
        instance.phone_no = validated_data['phone_no']
        instance.city = validated_data['city']
        if instance.password != validated_data['password']:
            instance.set_password(validated_data['password'])
        instance.save()
        return instance