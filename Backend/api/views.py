from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer ,DestinationSerializer
from rest_framework.permissions import IsAuthenticated , AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Q # this use for search query 
from api.models import Search
from rest_framework.authentication import TokenAuthentication

class DestinationSearchView(APIView):
    def get(self,request):
        query = request.query_params.get('query','')
        start_Date = request.query_params.get('start_date')
        end_Date = request.query_params.get('end_date')
        filters = request.query_params.get('filters','').split(',')

        search = Search.objects.all()

        if query:
            search = search.filter(
                Q(name__icontains = query)| Q (country__icontains = query)
            )

        #Apply filters
        if 'internet_quality' in filters:
            search = search.order_by('-internet_quality')
        if 'safety' in filters:
            search = search.order_by('-safety_score')
        

        serializer = DestinationSerializer(search,many=True)
        return Response(serializer.data)


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]
    authentication_classes = []

