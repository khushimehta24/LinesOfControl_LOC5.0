from rest_framework import serializers
from .models import *
from accounts.models import *
from accounts.serializers import *

class ProductGetSerializer(serializers.ModelSerializer):
    creator = UserSerializer()
    class Meta:
        model = Product
        fields = ['name','desc','rentpday','image','from_date','to_date','creator']

class ProductPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['name','desc','rentpday','image','from_date','to_date','creator']

class ProductSearchSerializer(serializers.Serializer):
    search = serializers.CharField(write_only = True)
