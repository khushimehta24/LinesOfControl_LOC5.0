from rest_framework import serializers
from .models import *
from accounts.models import *
from accounts.serializers import *

class OpenaiSerializer(serializers.Serializer):
    category = serializers.CharField()
    city = serializers.CharField()

