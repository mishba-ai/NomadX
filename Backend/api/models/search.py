from django.db import models
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
# Create your models here.

class Search(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='searches')
    name = models.CharField(max_length=100)
    country = models.CharField(max_length=100, null=True, blank=True)
    continent = models.CharField(max_length=50)
    climate = models.CharField(max_length=50, null=True, blank=True)
    safety_score = models.PositiveSmallIntegerField(null=True, blank=True)
    cost_of_living = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True)
    budget_score = models.PositiveSmallIntegerField(null=True, blank=True)
    visa_ease = models.CharField(max_length=50, null=True, blank=True)
    air_quality = models.PositiveSmallIntegerField(null=True, blank=True)
    internet_quality = models.PositiveSmallIntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Searches"
        ordering = ['-created_at']

    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)

    def clean(self):       
        if self.start_date and self.end_date and self.start_date > self.end_date:
            raise ValidationError("End date must be after start date.")

    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)

  

    def __str__(self):
        return self.name