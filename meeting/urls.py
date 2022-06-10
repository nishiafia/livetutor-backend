from rest_framework_extensions.routers import ExtendedSimpleRouter
from .views import *
router = ExtendedSimpleRouter()

router.register('meetings', MeetingViewset, basename='meetings')

urlpatterns = router.urls
