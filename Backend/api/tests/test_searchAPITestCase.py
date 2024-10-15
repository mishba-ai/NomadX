from django.urls import reverse
from django.contrib.auth.models import User
from rest_framework.test import APITestCase
from api.models.search import Search
from rest_framework import status
from rest_framework_simplejwt.tokens import AccessToken

class SearchAPITestCase(APITestCase):
    def setUp(self):
        # Create a test user and log them in
        self.user = User.objects.create_user(
            username='testuser', password='secret'
        )
        '''
        login_success = self.client.login(username='testuser', password='secret')
        self.assertTrue(login_success, "User login failed!")
        
        #After logging in, you can check if the session contains the expected user ID:
        self.assertIn('_auth_user_id', self.client.session)
        self.assertEqual(self.client.session['_auth_user_id'], str(self.user.id))
        '''
        # Obtain JWT token for the user

        response = self.client.post('/api/token/',{'username':'testuser','password':'secret'})
        self.assertEqual(response.status_code,status.HTTP_200_OK)

        #Store the access token
        self.access_token = response.data['access']
        
        # Set the authorization header for subsequent requests
        self.client.credentials(HTTP_AUTHORIZATION='Bearer ' + self.access_token)
        # Define test data for creating a search
        self.search_data = {
            'name': 'Test Search',
            'continent': 'AF',
            'min_temp': 20,
            'max_temp': 30,
            'preferred_humidity': 'ANY',
            'sunny': True,
            'rainy': False,
            'snowy': False,
            'windy': False,
            'visa_type': 'ANY',
            'max_stay_duration': 'ANY',
            'visa_on_arrival': False,
            'no_visa_required': False,
            'e_visa_available': True,
            'embassy_application': False,
            'max_processing_time': 30,
            'safety_rating': 'ANY',
            'crime_concerns': False,
            'political_concerns': False,
            'natural_disaster_concerns': False,
            'health_concerns': False,
            'lgbtq_friendly': False,
            'solo_friendly': False,
            'travel_advisory': 'ANY',
            'cost_of_living_index': 'LOW',
            'budget_score': 50,
            'wifi_amenities': False,
            'workspaces': False,
            'kitchen_amenities': False,
            'laundry_amenities': False,
            'air_quality_index': 50,
            'low_allergen': False,
            'clean_indoor_air': False,
            'low_humidity': False,  
            'low_pollution': False,
            'only_monitoring_stations': False,  
            'internet_quality': 50,
            'include_5G': False,
        }
              # Create a search object for testing

        self.search = Search.objects.create(user=self.user, **self.search_data)

    def test_create_search_get(self):
        # Test retrieving the list of searches
        response = self.client.get(reverse('search-list'))
        #print(response.status_code)  # Debugging line

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_create_search_post(self):
        # Test creating a new search

        url = reverse('search-list')
        data = {
            'name': 'Test Search',
            'continent': 'ANY',
            'min_temp': 15,
            'max_temp': 25,
            'preferred_humidity': 'HUM',
            'user': self.user.id
        }
        response = self.client.post(url,data)
        #print(response.data)  # Debugging line

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
      

    def test_search_list_get(self):
        # Test retrieving the search list page
        response = self.client.get(reverse('search-list'))
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_search_detail_get(self):
        # Test retrieving a specific search's details
        response = self.client.get(reverse('search-detail', args=[self.search.id]))
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_search_update_get(self):
        # Test retrieving the search update page
        url = reverse('search-detail', args=[self.search.id])
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        

    def test_search_update_post(self):
       # Test updating an existing search
        url = reverse('search-detail', args=[self.search.id])
        data = {
            'name': self.search.name,
            'continent': 'AS',
            'min_temp': 20,
            'max_temp': 35,
            'preferred_humidity': 'DRY',
            'user': self.user.id
        }
        response = self.client.put(url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_search_delete_get(self):
        # Test retrieving the search delete confirmation page
        response = self.client.get(reverse('search-detail', args=[self.search.id]))
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_search_delete_post(self):
        # Test deleting a search
        response = self.client.delete(reverse('search-detail', args=[self.search.id]))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Search.objects.count(), 0)
