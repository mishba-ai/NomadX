from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Search(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    climate = models.CharField(max_length=100)
    safety_score = models.IntegerField()
    cost_of_living = models.IntegerField()
    budget_score = models.IntegerField()
    visa_ease = models.CharField(max_length=100)
    air_quality = models.IntegerField()

    def __str__(self):
        return self.name