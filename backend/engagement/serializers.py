from rest_framework import serializers
from .models import *
from accounts.models import *
from accounts.serializers import UserSerializer, UserRegisterSerializer


class FollowSerializer(serializers.ModelSerializer):
    follower  = serializers.IntegerField(read_only=True)

    class Meta:
        model = Follow
        fields = ['follower', 'main_user']

    def create(self, data, user):
        follow = Follow.objects.create(follower = user, main_user = data['main_user'])
        main_user = data['main_user']
        main_user.followers += str(user.id) + ','
        main_user.engagement +=1
        user.following += str(main_user.id) + ','
        follow.save()
        main_user.save()
        user.save()
        return main_user


class FollowListSerializer(serializers.ModelSerializer):
    follower = UserSerializer()
    main_user = UserSerializer()

    class Meta:
        model = Follow
        fields = ['id', 'follower', 'main_user']


class LikeSerializer(serializers.ModelSerializer):
    liked_by = UserSerializer(read_only=True)
    liked_to = UserSerializer(read_only=True)
    liked_profile = serializers.CharField(write_only=True)

    class Meta:
        model = Like
        fields = ['id', 'liked_by', 'liked_to', 'liked_profile']

    def create(self, validated_data, user):
        id = validated_data.pop('liked_profile')
        user2 = User.objects.get(id = id)
        like = Like.objects.create(liked_by = user, liked_to = user2)
        user2.likes += str(user.id)  +','
        user2.engagement +=1
        user2.save()
        return like, user2

