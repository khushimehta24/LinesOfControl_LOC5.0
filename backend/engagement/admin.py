from django.contrib import admin
from .models import *

# Register your models here.
class FollowAdmin(admin.ModelAdmin):
    model = Follow
    list_display = ['follower', 'main_user']
    list_filter = ['follower', 'main_user']

class NotificationAdmin(admin.ModelAdmin):
    model = Notification
    list_display = ['user', 'message']
    list_filter = ['user', 'message']

admin.site.register(Follow, FollowAdmin)
admin.site.register(Notification, NotificationAdmin)