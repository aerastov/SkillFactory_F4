from rest_framework import serializers
from dishes.models import Dishes


class DishesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Dishes
        fields = ('categoryType', 'name', 'recipe')
