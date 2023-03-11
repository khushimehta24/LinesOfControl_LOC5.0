from django.urls import path
from . import views

urlpatterns = [
    path('photo-post/', views.PhotographAPI.as_view(), name = 'photo-post'),
    path('photo-list/', views.PhotographListAPI.as_view(), name = 'photo-list'),
]