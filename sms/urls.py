from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import SmsViewSet

# from livetutor_py.urls import router

router = DefaultRouter()
router.register('sms', SmsViewSet,  basename='sms')
urlpatterns = [
    path('', include(router.urls)),
   # path('read_excel/', VehicleRouteMovementViewSet.as_view(), name='read_excel'),


]