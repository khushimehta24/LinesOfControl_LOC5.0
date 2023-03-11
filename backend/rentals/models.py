from django.db import models

from accounts.models import User

# # Create your models here.
class Product(models.Model):

    name = models.CharField(max_length=50,blank=True,)
    desc = models.TextField(max_length=300,blank=True,)
    rentpday = models.IntegerField(blank=True,null=True)
    image = models.URLField(max_length=200, blank=True)
    from_date = models.CharField(max_length=10)
    to_date = models.CharField(max_length=10)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

# class Register(models.Model):

#     event_name = models.ForeignKey(GroupEvent,  on_delete=models.CASCADE)
#     user_name = models.ForeignKey(User,  on_delete=models.CASCADE)
#     # mode_chosen = models.CharField(max_length=10) #off/on

#     def __str__(self):
#         return self.event_name.name