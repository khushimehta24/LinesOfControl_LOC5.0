from rest_framework import serializers
from .models import *


class FollowRequestSerializer(serializers.ModelSerializer):
    follower  = serializers.CharField(read_only=True)

    class Meta:
        model = Follow
        fields = ['follower', 'main_user']

class NotificiationSerializer(serializers.ModelSerializer):
    user = serializers.CharField(read_only=True)

    class Meta:
        model = Notification
        fields = ['user', 'message']