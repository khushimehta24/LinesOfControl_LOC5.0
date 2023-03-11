from django.db import models

from accounts.models import User

# # Create your models here.
class GroupEvent(models.Model):

    name = models.CharField(max_length=50)
    category = models.CharField(max_length=100)
    date = models.CharField(max_length=10)
    time = models.CharField(max_length=10)
    duration = models.CharField(max_length=10)
    venue = models.CharField(max_length=200)
    desc = models.TextField(max_length=300)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Register(models.Model):

    event_name = models.ForeignKey(GroupEvent,  on_delete=models.CASCADE)
    user_name = models.ForeignKey(User,  on_delete=models.CASCADE)
    # mode_chosen = models.CharField(max_length=10) #off/on

    def __str__(self):
        return self.event_name.name