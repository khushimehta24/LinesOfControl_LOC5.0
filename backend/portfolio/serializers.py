from rest_framework import serializers
from .models import *
from accounts.models import *
from accounts.serializers import *


class PhotographSerializer(serializers.ModelSerializer):
    created_at = serializers.DateField(read_only=True)
    user = serializers.CharField(read_only=True)

    class Meta:
        model = Photograph
        fields = ['image', 'user', 'caption', 'location', 'created_at']

    def create(self, data, user):
        obj = Photograph.objects.create(user = user, **data)
        obj.save()
        return obj