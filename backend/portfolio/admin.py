from django.contrib import admin
from .models import *

# Register your models here.

class PhotographAdmin(admin.ModelAdmin):
    model = Photograph
    list_display = ['id','image', 'user', 'caption', 'location', 'created_at', 'category']
    list_filter = ['id','image', 'user', 'caption', 'location', 'created_at', 'category']

admin.site.register(Photograph, PhotographAdmin)