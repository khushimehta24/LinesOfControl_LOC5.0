from rest_framework import serializers
from .models import *
from accounts.models import *
from accounts.serializers import *


class FollowSerializer(serializers.ModelSerializer):
    follower  = serializers.CharField(read_only=True)

    class Meta:
        model = Follow
        fields = ['follower', 'main_user']

    def create(self, data, user):
        follow = Follow.objects.create(follower = user, main_user = data['main_user'])
        follow.save()
        return follow


class FollowListSerializer(serializers.ModelSerializer):
    follower = UserSerializer()
    main_user = UserSerializer()

    class Meta:
        model = Follow
        fields = ['id', 'follower', 'main_user']
