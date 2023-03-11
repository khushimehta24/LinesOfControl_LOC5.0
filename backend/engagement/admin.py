from django.contrib import admin
from .models import *

# Register your models here.
class FollowAdmin(admin.ModelAdmin):
    model = Follow
    list_display = ['id','follower', 'main_user']
    list_filter = ['id','follower', 'main_user']


class LikeAdmin(admin.ModelAdmin):
    model = Like
    list_display = ['id','liked_by', 'liked_to']
    list_filter = ['id','liked_by', 'liked_to']

admin.site.register(Follow, FollowAdmin)
admin.site.register(Like, LikeAdmin)