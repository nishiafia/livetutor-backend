from django.urls import path

from .views import *

urlpatterns = [
    path('cities/',  CityView.as_view()),
    path('countries/', CountryListView.as_view()),
]
