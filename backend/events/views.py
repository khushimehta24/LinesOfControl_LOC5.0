# Create your views here.
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.generics import GenericAPIView, ListAPIView
from rest_framework.response import Response
from rest_framework import status,permissions
from .models import *
from .serializers import *
from .utils import *
from accounts.models import *

#displays all events
@api_view(['GET'])
def get_all_events(request):
    event_objs = GroupEvent.objects.all()
    serializer = GroupEventSerializer(event_objs,many=True)
    return Response({'status':200, 'all_events': serializer.data})


#creates an event
class CreateEventAPI(GenericAPIView):
    serializer_class = GroupEventCreateSerializer
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        data = request.data
        data 
        serializer = GroupEventCreateSerializer(data = request.data)
        print(request.data)
        if not serializer.is_valid():
            return Response({'status':403,'message': "something went wrong"})
        serializer.create(serializer.validated_data, request.user)
        return Response({'status':200, 'payload': serializer.data,'message': "Data entered"})    

#all events of an ngo
@api_view(['GET'])
def all_events_user(request,pk):
    event_objs = GroupEvent.objects.filter(creator=pk)
    serializer = GroupEventSerializer(event_objs,many=True)
    return Response({'status':200, 'all_events_user': serializer.data})


#view an event - dynamic url
@api_view(['GET'])
def open_event(request, pk):
    event_objs = GroupEvent.objects.get(id=pk)
    serializer = GroupEventSerializer(event_objs)
    return Response({'status':200, 'opened_event': serializer.data})


#on register -- mode  
# @api_view(['POST'])
class OnRegisterAPI(GenericAPIView):
    serializer_class = RegisterSerializer
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        pk = request.data['r_id']
        event_name = GroupEvent.objects.get(id=pk)
        user_name = request.user
        request.data.update({'event_name': event_name, 'user_name': user_name})
        data = request.data
        serializer = RegisterSerializer(data = request.data)
        if not serializer.is_valid():
            return Response({'status':403,'message': "something went wrong"})
        serializer.create(request.data)
        print(request.data)
        event_obj = GroupEvent.objects.get(name=request.data['event_name'])
        creator = User.objects.get(id=event_obj.creator.id)
        serializer = GroupEventSerializer(event_obj)
        # creator = User.objects.get(id=serializer.data['creator'])
        send_event_mail(serializer.data, request.user, 'not creator', creator)
        send_event_mail(serializer.data, request.user, 'creator', creator)        
        return Response({'status':200, 'payload': serializer.data,'message': "Data entered"})    

@api_view(['GET'])
def on_register_get(request):
    event_objs = Register.objects.all()
    serializer = RegisterSerializer(event_objs, many=True)
    return Response({'status':200, 'opened_event': serializer.data})

@api_view(['GET'])
def get_all_applicants(request,pk):
    event_objs = Register.objects.filter(id=pk)
    serializer = RegisterSerializer(event_objs, many=True)
    return Response({'status':200, 'all_applicants': serializer.data})