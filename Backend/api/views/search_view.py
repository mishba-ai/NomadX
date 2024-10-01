from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q # this use for search query 
from api.models import Search
from datetime import datetime
from api.serializers.search_serializer import SearchSerializer

#search view is designed to handle search requests. It receives filter criteria in the request data and constructs a database query based on these criteria.

#Q objects in Django are used to create complex database queries. They allow you to combine multiple conditions using logical operators (AND, OR, NOT).

#__icontains is a lookup that performs a case-insensitive containment test.


class SearchView(APIView):
    def post(self,request): # post method is used to 
        filters =request.data # 
        query = Q()

        if 'continent' in filters:
            query &= Q(continent_icontains=filters['continent'])
        if 'climate' in filters:
            query &= Q(climate__icontains=filters['climate'])
        if 'safety_score' in filters:
            query &= Q(safety_score__gte=filters['safety_score'])
        if 'cost_of_living' in filters:
            query &= Q(cost_of_living__lte=filters['cost_of_living'])
        if 'budget_score' in filters:
            query &= Q(budget_score__gte=filters['budget_score'])
        if 'visa_ease' in filters:
            query &= Q(visa_ease__icontains=filters['visa_ease'])
        if 'air_quality' in filters:
            query &= Q(air_quality__gte=filters['air_quality'])
        if 'internet_quality' in filters:
            query &= Q(internet_quality__gte=filters['internet_quality'])
        
        # Handle date filters
        if 'start_date' in filters:
            start_date = datetime.strptime(filters['start_date'], '%Y-%m-%d').date() 
            query &= Q(start_date__lte=start_date)
        if 'end_date' in filters:
            end_date = datetime.strptime(filters['end_date'], '%Y-%m-%d').date()
            query &= Q(end_date__gte=end_date)

        results = Search.objects.filter(query) # to fetch matching results from the database.
        serializer = SearchSerializer(results, many=True) # to serialize the results into a format that can be returned in the API response.
        return Response(serializer.data, status=status.HTTP_200_OK)

        
