from django.core.management.base import BaseCommand #
# from api.models import C
import requests
import csv
from bs4 import BeautifulSoup

class Command(BaseCommand):
    help = 'Collect and update city data' # 

    def handle(self,*args,**options):
        self.stdout.writer('Starting data collection...') #
        
        self.collect_basic_city_data()
        self.collect_Weather_data()
        self.collect_air_quality()
        self.collect_cost_of_living_data() 
        self.collect_Budget_data()
        self.collect_safety_data()
        self.collect_internet_quality_data()

        self.stdout.write(self.style.SUCCESS('Data collection'))

    def collect_basic_city_data(self):

        #
        pass

    def collect_weather_data(self):

        #
        pass

    def collect_air_quality_data(self):

        #
        pass

    def collect_cost_of_living_data(self):

        #
        pass
    
    def collect_safety_data(self):

        #
        pass