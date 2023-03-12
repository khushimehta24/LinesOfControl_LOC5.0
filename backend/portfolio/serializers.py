from rest_framework import serializers
from .models import *
from accounts.models import *
from accounts.serializers import *


class PhotographSerializer(serializers.ModelSerializer):
    created_at = serializers.DateField(read_only=True)
    user = serializers.CharField(read_only=True)
    category = serializers.CharField(read_only=True)

    class Meta:
        model = Photograph
        fields = ['image', 'user', 'caption', 'location', 'created_at', 'category']

    def create(self, data, user):
        obj = Photograph.objects.create(user = user, category = 'nature', **data)
        photos = Photograph.objects.filter(user=user)
        photos_count = photos.count()
        nature = 0
        wildlife= 0
        portrait = 0
        urban = 0
        for photo in photos:
            if photo.category == 'nature':
                nature+=1
            if photo.category == 'wildlife':
                wildlife+=1
            if photo.category == 'portrait':
                portrait+=1
            if photo.category == 'urban':
                urban+=1
        user.nature = nature
        user.wildlife = wildlife
        user.portrait = portrait
        user.urban = urban
        user.save()
        obj.save()
        return obj
