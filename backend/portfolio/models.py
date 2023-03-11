from django.db import models
from accounts.models import User


class Photograph(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user')
    image = models.URLField(max_length=200)
    caption = models.CharField(max_length=200)
    location = models.CharField(max_length=100)
    created_at = models.DateField(auto_now_add=True)
    category = models.CharField(max_length=20, blank=True)