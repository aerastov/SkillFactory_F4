from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import Dishesview


router = DefaultRouter()
router.register('dishes', Dishesview)

urlpatterns = [
    path('', include(router.urls)),
]


