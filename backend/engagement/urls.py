from django.urls import path
from . import views

urlpatterns = [
     path('folow-request/', views.FollowRequestAPI.as_view(), name = 'follow-request'),
     path('follow-accept/',views.FollowAcceptAPI.as_view(), name = 'follow-accept' ),
     path('follow-request-list', views.FollowRequestListAPI.as_view(), name= 'follow-request-list')
]