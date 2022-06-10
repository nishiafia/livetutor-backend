

from xml.etree.ElementInclude import include

from django.urls import include, path
from rest_framework_extensions.routers import ExtendedSimpleRouter

from .views import (BookingViewSet, TeacherListingViewset,
                    TeacherListPricingView)

# from livetutor_py.urls import router

router = ExtendedSimpleRouter()
router.register(r'listing', TeacherListingViewset, basename='listing')
router.register(r'booking', BookingViewSet, basename='booking')
urlpatterns = [
    path('listing/price_range/', TeacherListPricingView.as_view(),
         ),
    path('', include(router.urls)),

]
