from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
 path('get_all_events/',get_all_events),
 path('create_event/', create_event),
 path('all_events_user/', all_events_user),
 path('<int:pk>/open_event/', open_event),
 path('on_register/', OnRegisterAPI.as_view()),
 path('on_register_get/', on_register_get),
 path('<int:pk>/get_all_applicants/', get_all_applicants),
]
