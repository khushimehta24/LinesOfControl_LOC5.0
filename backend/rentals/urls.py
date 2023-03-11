from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
 path('get_all_products/',get_all_products),
 path('<int:pk>/all_products_user/', all_products_user),
 path('search_product/', SearchRentalAPI.as_view()),
 path('<int:pk>/open_product/', open_product),
 path('create_rental/', CreateRentalAPI.as_view()),
]
