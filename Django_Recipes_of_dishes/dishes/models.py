from django.db import models


class Dishes(models.Model):

    CATEGORY_CHOICES = (
        ('salads', 'Салаты'),
        ('first_courses', 'Рецепты первых блюд'),
        ('second_courses', 'Рецепты всторых блюд'),
        ('desserts', 'Дессерты'),
    )
    categoryType = models.CharField(max_length=20, choices=CATEGORY_CHOICES, verbose_name='Категория')
    name = models.CharField(max_length=256, verbose_name='Наименование')
    recipe = models.TextField(verbose_name='Рецепт')

    class Meta:
        verbose_name_plural = 'Рецептов'
        verbose_name = 'Рецепты'

    def __str__(self):
        return f'{self.name} | {self.categoryType}'
