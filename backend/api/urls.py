from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name='index'),
    path('post', post_create, name='post_create'),

]