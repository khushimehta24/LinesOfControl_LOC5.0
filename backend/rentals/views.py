# Create your views here.
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.generics import GenericAPIView, ListAPIView
from rest_framework.response import Response
from rest_framework import status,permissions
from .models import *
from .serializers import *
from accounts.models import *

#displays all events
@api_view(['GET'])
def get_all_products(request):
    event_objs = Product.objects.all()
    serializer = ProductSerializer(event_objs,many=True)
    return Response({'status':200, 'all products': serializer.data})

#all events of an ngo
@api_view(['GET'])
def all_products_user(request):
    event_objs = Product.objects.filter(creator=request.user)
    serializer = ProductSerializer(event_objs,many=True)
    return Response({'status':200, 'all products of a user': serializer.data})

#all events of an ngo
@api_view(['GET'])
def search_product(request):
    event_objs = Product.objects.filter(creator=request.user)
    serializer = ProductSerializer(event_objs,many=True)
    return Response({'status':200, 'all products of a user': serializer.data})
