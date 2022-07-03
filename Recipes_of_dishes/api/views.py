from dishes.models import Dishes
from .serializers import DishesSerializer
from rest_framework.viewsets import ModelViewSet

class Dishesview(ModelViewSet):
    queryset = Dishes.objects.all()
    serializer_class = DishesSerializer
