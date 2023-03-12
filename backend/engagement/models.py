from django.db import models
from accounts.models import User

# Create your models here.
class Follow(models.Model):

    follower = models.ForeignKey(User,on_delete=models.CASCADE, related_name='follower')
    main_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='main_user')
    
    class Meta:
        unique_together = ('follower', 'main_user',)

class Like(models.Model):

    liked_to = models.ForeignKey(User, on_delete=models.CASCADE, related_name='liked_to')
    liked_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='liked_by')

    class Meta:
        unique_together = ('liked_to', 'liked_by',)