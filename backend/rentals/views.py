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
    serializer = ProductGetSerializer(event_objs,many=True)
    return Response({'status':200, 'all_products': serializer.data})

#all events of an ngo
@api_view(['GET'])
def all_products_user(request,pk):
    event_objs = Product.objects.filter(creator=pk)
    serializer = ProductGetSerializer(event_objs,many=True)
    return Response({'status':200, 'all_products_user': serializer.data})

#search all events
class SearchRentalAPI(GenericAPIView):
    serializer_class = ProductSearchSerializer
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        product_objs = Product.objects.all()
        search_list = []
        for obj in product_objs:
            if request.data['search'].lower() in obj.name.lower():
                search_list.append(obj)
        serializer = ProductPostSerializer(search_list,many=True)
        return Response({'status':200, 'search_result': serializer.data})

#creates a rental post
class CreateRentalAPI(GenericAPIView):
    serializer_class = ProductPostSerializer
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        data = request.data
        serializer = ProductPostSerializer(data = request.data)
        print(request.data)
        if not serializer.is_valid():
            return Response({'status':403,'message': "something went wrong"})
        serializer.save()
        return Response({'status':200, 'payload': serializer.data,'message': "Data entered"})    

#view a product - dynamic url
@api_view(['GET'])
def open_product(request, pk):
    event_objs = Product.objects.get(id=pk)
    serializer = ProductGetSerializer(event_objs)
    return Response({'status':200, 'opened_product': serializer.data})