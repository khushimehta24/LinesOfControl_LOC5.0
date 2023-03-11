from rest_framework import serializers
from .models import *

class GroupEventSerializer(serializers.ModelSerializer):

    class Meta:
        model = GroupEvent
        fields = '__all__'
        # ['name','event_type', 'date','time', 'address', 'description', 'mode', 'latitude', 'longitude', 'ngo']

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
