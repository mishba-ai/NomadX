from django.core.management.base import BaseCommand 
from datetime import datetime
from django.conf import setting 
import requests
import json
import psycopg2
import csv
from bs4 import BeautifulSoup
import os

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
        OPENWEATHERMAP_API_KEY = os.getenv('OPENWEATHERMAP_API_KEY')

        url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={OPENWEATHERMAP_API_KEY}&units=metric"
        response = requests.get(url)
        if response.status_code == 200:
            data= response.json()
            return{
                'temperature':data['main']['temp'],
                 'humidity':data['main']['temp'],
                 'description':data['weather'][0]['description']           
                }
        return None
        

    def collect_air_quality_data(self):

        #
        pass

    def collect_cost_of_living_data(self):

        #
        pass
    
    def collect_safety_data(self):

        #
        pass