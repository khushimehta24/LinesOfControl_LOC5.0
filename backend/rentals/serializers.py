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
    creator = serializers.CharField(read_only=True)
    class Meta:
        model = Product
        fields = ['name','desc','rentpday','image','from_date','to_date','creator']

    def create(self, validated_data, user):
        obj = Product.objects.create(creator = user, **validated_data)
        return obj

class ProductSearchSerializer(serializers.Serializer):
    search = serializers.CharField(write_only = True)
