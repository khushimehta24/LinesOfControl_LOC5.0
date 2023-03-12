from django.contrib import admin
from .models import *
# Register your models here.

class RegisterAdmin(admin.ModelAdmin):
    model = Register
    list_display = ['id', 'event_name', 'user_name']
    list_filter = ['id', 'event_name', 'user_name']


class GroupEventAdmin(admin.ModelAdmin):
    model = GroupEvent
    list_display = ['id', 'name','category', 'date','time', 'venue', 'desc', 'duration', 'creator', 'img']
    list_filter = ['id', 'name','category', 'date','time', 'venue', 'desc', 'duration', 'creator', 'img']


admin.site.register(GroupEvent, GroupEventAdmin)
admin.site.register(Register, RegisterAdmin)