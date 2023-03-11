from django.db import models
from accounts.models import User

# Create your models here.
class Follow(models.Model):

    follower = models.ForeignKey(User,on_delete=models.CASCADE, related_name='follower')
    main_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='main_user')
    accepted = models.BooleanField(blank=True, default=False)
    pending = models.BooleanField(blank=True, default=True)


# class Notification(models.Model):

#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     message = models.CharField(max_length=200, blank=True)
