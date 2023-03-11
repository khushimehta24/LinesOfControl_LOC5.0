from django.http import JsonResponse
from rest_framework.generics import GenericAPIView, ListAPIView
from rest_framework.authtoken.models import Token
from .serializers import *
from rest_framework.response import Response
from rest_framework import status,permissions
from accounts.models import *


class FollowRequestAPI(GenericAPIView):
    serializer_class = FollowRequestSerializer
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        user = User.objects.get(id=request.user.id)
        data = request.data
        serializer = self.serializer_class(data=data)
        serializer.is_valid(raise_exception = True)
        follow = serializer.create(serializer.validated_data, user)
        return Response({"response":"Success"}, status=status.HTTP_201_CREATED)


class FollowAcceptAPI(GenericAPIView):
    serializer_class = FollowAcceptSerializer
    permission_classes = [permissions.IsAuthenticated]

    def put(self,request):
        user = User.objects.get(id=request.user.id)
        data = request.data
        serializer = self.serializer_class(data=data)
        serializer.is_valid()
        user = serializer.update(request.data)
        return Response({'message':'Success'}, status = status.HTTP_200_OK)


class FollowRequestListAPI(ListAPIView):
    serializer_class = FollowRequestListSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = User.objects.get(id=self.request.user.id)
        queryset = Follow.objects.filter(main_user = user, pending = True)
        return queryset