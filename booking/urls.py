

from django.urls import include, path
from rest_framework_extensions.routers import ExtendedSimpleRouter

from .views import BookingViewSet

# from livetutor_py.urls import router

router = ExtendedSimpleRouter()

router.register(r'booking', BookingViewSet, basename='booking')
urlpatterns = [
    path('', include(router.urls)),

]
