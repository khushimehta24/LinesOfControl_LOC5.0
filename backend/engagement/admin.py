from django.contrib import admin
from .models import *

# Register your models here.
class FollowAdmin(admin.ModelAdmin):
    model = Follow
    list_display = ['id','follower', 'main_user']
    list_filter = ['id','follower', 'main_user']

# class NotificationAdmin(admin.ModelAdmin):
#     model = Notification
#     list_display = ['id','user', 'message']
#     list_filter = ['id','user', 'message']

admin.site.register(Follow, FollowAdmin)
# admin.site.register(Notification, NotificationAdmin)