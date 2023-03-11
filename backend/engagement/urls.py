from django.urls import path
from . import views

urlpatterns = [
     path('follow/', views.FollowRequestAPI.as_view(), name = 'follow'),
     path('follow-list', views.FollowListAPI.as_view(), name= 'follow-list')
]