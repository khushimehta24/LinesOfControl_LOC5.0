from django.contrib import admin
from .models import *

# Register your models here.
class FollowAdmin(admin.ModelAdmin):
    model = Follow
    list_display = ['id','follower', 'main_user']
    list_filter = ['id','follower', 'main_user']

admin.site.register(Follow, FollowAdmin)