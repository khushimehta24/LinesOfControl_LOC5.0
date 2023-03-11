from django.db import models
from accounts.models import User

# Create your models here.
class Follow(models.Model):

    follower = models.ForeignKey(User,on_delete=models.CASCADE, related_name='follower')
    main_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='main_user')
