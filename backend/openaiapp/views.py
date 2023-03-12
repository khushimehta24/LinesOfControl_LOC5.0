from django.shortcuts import render
from .serializers import *
from django.http.response import JsonResponse
from rest_framework import status,permissions
from rest_framework.generics import GenericAPIView, ListAPIView
from .utils import *

# Create your views here.
class CoordinatesOpenaiAPI(GenericAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = OpenaiSerializer

    def post(self, request):
        serializer= self.serializer_class(data=request.data)
        if not serializer.is_valid():
            return JsonResponse({'status':403,'message': "something went wrong"})
        prompt1 = f"Give 5 latitude and longitude of {serializer.data['category']} related locations in {serializer.data['city']} in the format '(place) : (latitude) (longitude)' "
        coordinates = generate_coordinates(prompt1)
        return JsonResponse({"coordinates": coordinates}, status= status.HTTP_200_OK)