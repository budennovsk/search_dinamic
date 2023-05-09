from django.db import models

# Create your models here.
from django.db import models


class Product(models.Model):
    weight = models.CharField(max_length=50, blank=True, null=True)
    heigth = models.CharField(max_length=50, blank=True, null=True)
    radius = models.CharField(max_length=50, blank=True, null=True)
    brand = models.CharField(max_length=255, blank=True, null=True)
    model = models.CharField(max_length=255, blank=True, null=True)
    season = models.CharField(max_length=255, blank=True, null=True)
    spikes = models.CharField(max_length=255, blank=True, null=True)
    article = models.CharField(max_length=255)
    count = models.IntegerField()
    price = models.IntegerField()
    title = models.CharField(max_length=255, blank=True, null=True)
    address = models.CharField(max_length=255, blank=True, null=True)
    runflat = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        ordering = ['-pk']

    def __repr__(self):
        return f'{self.pk} - {self.brand} - {self.model} - {self.weight} - {self.heigth} - {self.radius}'

    def get_data(self) -> dict:
        """ Получение от клиента результата и проверка его в ORM"""
        return {
            'weight': self.weight,
            'heigth': self.heigth,
            'radius': self.radius,
            'brand': self.brand,
            'model': self.model,
            'season': self.season,
            'spikes': self.spikes,
            'article': self.article,
            'count': self.count,
            'price': self.price,
            'title': self.title,
            'address': self.address,
            'runflat': self.runflat
        }
