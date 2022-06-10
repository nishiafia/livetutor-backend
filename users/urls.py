from django.urls import include, path
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView

from users.views_locations import DivisionViewset

from .views import CityView, CustomTokenObtainPairView, UserViewSet

router = DefaultRouter()
router.register('users', UserViewSet)
router.register('locations', DivisionViewset)
urlpatterns = [
    path('', include(router.urls)),
    path('cities',  CityView.as_view()),
    path('token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),

]
