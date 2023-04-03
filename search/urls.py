from django.conf import settings
from django.urls import path

from . import views


app_name = "search"

urlpatterns = [
    path('', views.get, name='all_scraping'),
    path('restart/', views.restart, name='restart'),

]

