from django.urls import path
from . import views

urlpatterns = [
    path('photo-post/', views.PhotographAPI.as_view(), name = 'photo-post'),
    path('photo-list/', views.PhotographListAPI.as_view(), name = 'photo-list'),
    path('photo-list/<int:pk>/', views.PhotographListIdAPI.as_view(), name = 'photo-list-id'),
    path('photo-following/', views.PhotographFollowingListAPI.as_view(), name = 'photo-following'),
]