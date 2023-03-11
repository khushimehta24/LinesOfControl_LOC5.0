from rest_framework import serializers
from .models import *
from accounts.models import *
from accounts.serializers import *


class FollowRequestSerializer(serializers.ModelSerializer):
    follower  = serializers.CharField(read_only=True)

    class Meta:
        model = Follow
        fields = ['follower', 'main_user']

    def create(self, data, user):
        follow = Follow.objects.create(follower = user, main_user = data['main_user'])
        follow.save()
        return follow

class FollowAcceptSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField()

    class Meta:
        model = Follow
        fields = ['id', 'accepted']

    def update(self,validated_data):
        instance = Follow.objects.get(id=validated_data['id'])
        instance.accepted = validated_data['accepted']
        instance.pending = False
        instance.save()
        return instance


class FollowRequestListSerializer(serializers.ModelSerializer):
    follower = UserSerializer()
    main_user = UserSerializer()

    class Meta:
        model = Follow
        fields = ['id', 'follower', 'main_user']

# class NotificiationSerializer(serializers.ModelSerializer):
#     user = serializers.CharField(read_only=True)

#     class Meta:
#         model = Notification
#         fields = ['user', 'message']