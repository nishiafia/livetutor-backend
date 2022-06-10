

from rest_framework_extensions.routers import ExtendedSimpleRouter

from .views import CategoryViewset, GradeViewset

# from livetutor_py.urls import router

router = ExtendedSimpleRouter()
router.register(r'categories', CategoryViewset, basename='categories')
router.register(r'grades', GradeViewset, basename='grades')
urlpatterns = router.urls
