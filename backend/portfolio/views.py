from django.http import JsonResponse
from rest_framework.generics import GenericAPIView, ListAPIView
from rest_framework.authtoken.models import Token
from .serializers import *
from rest_framework.response import Response
from rest_framework import status,permissions
from accounts.models import *


class PhotographAPI(GenericAPIView):
    serializer_class = PhotographSerializer
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        user = User.objects.get(id=request.user.id)
        data = request.data
        serializer = self.serializer_class(data=data)
        serializer.is_valid(raise_exception = True)
        obj = serializer.create(serializer.validated_data, user)
        return Response({"response":"Success"}, status=status.HTTP_201_CREATED)


class PhotographListAPI(ListAPIView):
    serializer_class = PhotographSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        queryset = Photograph.objects.filter(user=self.request.user)
        return queryset