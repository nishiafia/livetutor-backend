from rest_framework_extensions.routers import ExtendedSimpleRouter

from .views import *

router = ExtendedSimpleRouter()
router.register('fees', RoomFeeViewset, basename='room_fees')
router.register('payments', PaymentViewset, basename='payments')
router.register('user_fees', RoomUserFeeViewSet, basename='user_fees')
router.register('summary', SummaryViewset, basename='summary')
urlpatterns = router.urls
