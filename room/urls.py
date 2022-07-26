

from categories.views import CategoryViewset
from payment.views import PaymentViewset, RoomFeeViewset, SummaryViewset
from rest_framework_extensions.routers import ExtendedSimpleRouter

# from livetutor_py.urls import router
from .views import RoomUserViewset, RoomViewset

router = ExtendedSimpleRouter()
room_routes = router.register(r'rooms', RoomViewset, basename='room')
# route for room users and related
room_routes.register(r'users', RoomUserViewset, parents_query_lookups=[
                     'room'], basename='room-users')
room_routes.register(r'fees', RoomFeeViewset,
                     basename='room-fees',  parents_query_lookups=['room'])
#  .register('invite', RoomUserViewSet())
room_routes.register(r'payments', PaymentViewset,
                     basename='room-fee-payments', parents_query_lookups=['room_fee__room'])

room_routes.register(r'payment-summary', SummaryViewset,
                     basename='payment-summary', parents_query_lookups=['room'])
router.register('categories', CategoryViewset, basename='categories')

urlpatterns = router.urls
