from django.http import JsonResponse
from rest_framework.generics import GenericAPIView, ListAPIView
from rest_framework.authtoken.models import Token
from .serializers import *
from rest_framework.response import Response
from rest_framework import status,permissions
from accounts.models import *


class FollowAPI(GenericAPIView):
    serializer_class = FollowSerializer
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        user = User.objects.get(id=request.user.id)
        data = request.data
        serializer = self.serializer_class(data=data)
        serializer.is_valid(raise_exception = True)
        follow = serializer.create(serializer.validated_data, user)
        return Response({"response":"Success"}, status=status.HTTP_201_CREATED)


class FollowListAPI(ListAPIView):
    serializer_class = FollowListSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = User.objects.get(id=self.request.user.id)
        queryset = Follow.objects.filter(follower = user)
        list_of_ids = []

        for query in queryset:
            follow_back = Follow.objects.filter(follower = query.main_user, main_user = user)
            if follow_back.exists():
                list_of_ids.append(follow_back.first().id)
        queryset1 = Follow.objects.filter(id__in=list_of_ids)
        return queryset1


class LikeAPI(GenericAPIView):
    serializer_class = LikeSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        user = User.objects.get(id=request.user.id)
        data = request.data
        serializer = self.serializer_class(data=data)
        serializer.is_valid(raise_exception = True)
        like, user2 = serializer.create(serializer.validated_data, user)
        serializer2 = UserSerializer(user2)
        return Response({"response":"Success", "user":serializer2.data}, status=status.HTTP_201_CREATED)