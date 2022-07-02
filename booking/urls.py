

from django.urls import include, path
from rest_framework_extensions.routers import ExtendedSimpleRouter

from .views import BookingResponseViewSet, BookingViewSet

# from livetutor_py.urls import router

router = ExtendedSimpleRouter()

router.register(r'booking', BookingViewSet, basename='booking')
router.register(r'booking-response', BookingResponseViewSet,
                basename='booking-response')
urlpatterns = [
    path('', include(router.urls)),

]
