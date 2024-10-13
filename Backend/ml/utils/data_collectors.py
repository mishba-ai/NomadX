import requests 
import os
from dotenv import load_dotenv

load_dotenv()

def get_weather_data(lat,lon):
    api_key = os.getenv('OPENWEATHER_API_KEY')
    base_url = f"http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={api_key}&units=metric"
    response = requests.get(base_url)
    if response.status_code == 200:
      data = response.json()
      return {
        'temperature' : data['main']['temp'],
        'humidity':data['main']['humidity'],
        'weather_description':data['weather'][0]['description']
    }
    return None