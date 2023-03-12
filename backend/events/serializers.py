from rest_framework import serializers
from .models import *
from accounts.models import *
from accounts.serializers import *

class GroupEventSerializer(serializers.ModelSerializer):
    creator = UserSerializer()
    class Meta:
        model = GroupEvent
        fields = '__all__'
        # ['name','event_type', 'date','time', 'address', 'description', 'mode', 'latitude', 'longitude', 'ngo']

class GroupEventCreateSerializer(serializers.ModelSerializer):
    creator = serializers.IntegerField(read_only=True)
    class Meta:
        model = GroupEvent
        fields = ['name','category', 'date','time', 'venue', 'desc', 'duration', 'creator', 'img']

    def create(self, validated_data, user):
        obj = GroupEvent.objects.create(creator = user, **validated_data)


class RegisterSerializer(serializers.ModelSerializer):
    r_id = serializers.IntegerField(write_only=True)
    event_name = serializers.CharField(read_only = True)
    user_name = serializers.CharField(read_only = True)

    def create(self, validated_data):
        validated_data.pop('r_id')
        obj = Register.objects.create(event_name = validated_data['event_name'], user_name = validated_data['user_name'])
    
    class Meta:
        model = Register
        fields = ['r_id','event_name','user_name']
