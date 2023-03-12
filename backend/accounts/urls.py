from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.UserRegisterAPI.as_view(), name = 'registration'),
    path('login/', views.LoginAPI.as_view(), name = 'login'),
    path('user/', views.UserGetAPI.as_view(), name = 'user-data'),
    path('user-list/', views.UserListAPI.as_view(), name = 'user-list'),
    path('user-cluster/', views.UserClusterListAPI.as_view(), name = 'user-list')
]