

from django.urls import include, path
from rest_framework_extensions.routers import ExtendedSimpleRouter

from .views import TeacherListingViewset, TeacherListPricingView

# from livetutor_py.urls import router

router = ExtendedSimpleRouter()
router.register(r'listing', TeacherListingViewset, basename='listing')
urlpatterns = [
    path('listing/price_range/', TeacherListPricingView.as_view(),
         ),
    path('', include(router.urls)),

]
