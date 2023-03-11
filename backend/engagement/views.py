from django.http import JsonResponse
from rest_framework.generics import GenericAPIView
from rest_framework.authtoken.models import Token
from .serializers import *
from rest_framework.response import Response
from rest_framework import status,permissions


