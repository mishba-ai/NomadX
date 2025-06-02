from django.db import models
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
# Create your models here.

class Search(models.Model):
    CONTINENT_CHOICES = [
        ('ANY','ANY'),
        ('AF','Africa'),
        ('AN','Antartica'),
        ('AS','Asia'),
        ('EU','Europe'),
        ('NA','North America'),
        ('OC','Oceania'),
        ('SA','South America'),
    ]
  
    HUMIDITY_CHOICES = [
        ('ANY', 'Any'),
        ('DRY', 'Dry'),
        ('MOD', 'Moderate'),
        ('HUM', 'Humid'),
    ]
    VISA_TYPE_CHOICES = [
      ('ANY','Any'),
      ('Tourist','Tourist Visa'),
      ('work','Work Visa'),
      ('student','Student Visa'),
      ('digital nomad','Digital Nomad Visa'),
    ]

    VISA_REQUIREMENT_CHOICES = [
        ('visa-free','Visa Free'),
        ('visa-on-arrival','Visa on Arrival'),
        ('e-visa','E-Visa'),
        ('visa-required','Visa Required'),
    ]

    MAX_STAY_CHOICES = [
        ('ANY', 'Any'),
        ('30D', '30 Days'),
        ('90D', '90 Days'),
        ('180D', '180 Days'),
        ('1Y', '1 Year'),
        ('1Y+', '1+ Years'),
    ]

    SAFETY_RATING = [
        ('ANY', 'Any'),
        ('V_HIGH','Very High'),
        ('HIGH','High'),
        ('MED','Medium'),
        ('LOW','Low'),
    ]

    TRAVEL_ADVISORY = [
        ('ANY', 'Any'),
        ('NW','No warnings'),
        ('ECN','Exercise caution'),
        ('RT','Reconsider travel'),
        ('DNT','Do not travel'),
    ]
    
    COL_INDEX = [
        ('ANY','Any'),
        ('LOW','Low'),
        ('MED','Medium'),
        ('HIGH','High'),    
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='api_searches')
    name = models.CharField(max_length=100)
    continent = models.CharField(max_length=3 ,choices=CONTINENT_CHOICES, null=True, blank=True)

    #climate prefereces
    min_temp=models.IntegerField(null=True, blank=True)
    max_temp=models.IntegerField(null=True, blank=True)
    preferred_humidity = models.CharField(max_length=3, choices=HUMIDITY_CHOICES, default='ANY')
    sunny =models.BooleanField(default=False)
    rainy =models.BooleanField(default=False)
    snowy =models.BooleanField(default=False)
    windy =models.BooleanField(default=False)

    #visa preferences
    visa_type = models.CharField(max_length=20, default='ANY', choices=VISA_TYPE_CHOICES)
    max_stay_duration = models.CharField(default='ANY', max_length=4, choices=MAX_STAY_CHOICES)
    visa_on_arrival = models.BooleanField(default=False)
    no_visa_required = models.BooleanField(default=False)
    e_visa_available = models.BooleanField(default=False)
    embassy_application = models.BooleanField(default=False)
    max_processing_time = models.PositiveIntegerField(null=True, blank=True)

    #safety preferences
    safety_rating = models.CharField(max_length=7 ,choices=SAFETY_RATING, default='ANY')
    crime_concerns = models.BooleanField(default=False)
    political_concerns = models.BooleanField(default=False)
    natural_disaster_concerns = models.BooleanField(default=False)
    health_concerns = models.BooleanField(default=False)
    lgbtq_friendly = models.BooleanField(default=False)
    solo_friendly = models.BooleanField(default=False)
    travel_advisory = models.CharField(max_length=3, choices=TRAVEL_ADVISORY, default='ANY')


   #cost of living
    cost_of_living_index = models.CharField(max_length=4, default='ANY', choices= COL_INDEX) 
    budget_score = models.PositiveSmallIntegerField(null=True, blank=True)
    wifi_amenities = models.BooleanField(default=False)
    workspaces = models.BooleanField(default=False)
    kitchen_amenities = models.BooleanField(default=False)
    laundry_amenities = models.BooleanField(default=False)

   #air quality
    air_quality_index = models.PositiveSmallIntegerField(null=True, blank=True)
    low_allergen = models.BooleanField(default=False)
    clean_indoor_air = models.BooleanField(default=False)
    low_humidity = models.BooleanField(default=False)
    low_pollution = models.BooleanField(default=False)
    only_monitoring_stations = models.BooleanField(default=False)

    #internet quality
    internet_quality = models.PositiveSmallIntegerField(null=True, blank=True)
    include_5G = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Searches"
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['user', 'created_at']),
            models.Index(fields=['continent']),
            models.Index(fields=['min_temp']),
            models.Index(fields=['budget_score']),
            models.Index(fields=['visa_type']),
            models.Index(fields=['safety_rating']),
            models.Index(fields=['cost_of_living_index']),
            models.Index(fields=['air_quality_index']),
            models.Index(fields=['internet_quality']),
            models.Index(fields=['preferred_humidity']),
        ]
    start_date = models.DateField(null=True, blank=True)
    end_date = models.DateField(null=True, blank=True)

    def clean(self):    
        super().clean() # call the parent clean method   
        
        if self.start_date and self.end_date and self.start_date > self.end_date:
            raise ValidationError("End date must be after start date.")
        
        if self.min_temp and self.max_temp and self.min_temp > self.max_temp:
            raise ValidationError("Max temperature must be greater than min temperature.")
        
        #visa validation
        visa_fields = [
          bool(self.visa_on_arrival),
          bool(self.no_visa_required),
          bool(self.e_visa_available),
          bool(self.embassy_application),
        ]

        if sum(visa_fields) > 1:
            raise ValidationError("Please select only one visa requirement.")
        
        #budget validation
        if self.budget_score is not None and self.cost_of_living_index == 'ANY':
            raise ValidationError("Please select a cost of living index.")

    def save(self, *args, **kwargs):
        self.full_clean()
        super().save(*args, **kwargs)

  
    def __str__(self):
        return f"{self.name} - {self.user.username}" 