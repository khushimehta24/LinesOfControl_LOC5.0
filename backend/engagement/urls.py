from django.urls import path
from . import views

urlpatterns = [
     path('follow/', views.FollowAPI.as_view(), name = 'follow'),
     path('follow-list', views.FollowListAPI.as_view(), name= 'follow-list')
]