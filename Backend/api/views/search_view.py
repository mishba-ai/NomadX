from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import action
from rest_framework import status ,viewsets , filters
from django.db.models import Q # this use for search query 
from api.models import Search
from rest_framework.permissions import IsAuthenticated
from api.serializers.search_serializer import SearchSerializer
from api.permissions import IsOwnerOrReadOnly
from django.core.exceptions import ValidationError
from rest_framework.exceptions import NotAuthenticated

#search view is designed to handle search requests. It receives filter criteria in the request data and constructs a database query based on these criteria.

#Q objects in Django are used to create complex database queries. They allow you to combine multiple conditions using logical operators (AND, OR, NOT).

#__icontains is a lookup that performs a case-insensitive containment test.


class SearchView(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated] # to ensure that only authenticated users can access the view.
    serializer_class = SearchSerializer # to specify the serializer class that will be used to serialize the data.
    queryset = Search.objects.all() # to specify the queryset that will be used to fetch data from the database.
    filter_backends = [filters.SearchFilter,DjangoFilterBackend , filters.OrderingFilter] # to specify the filter backend that will be used to filter the queryset.
    filterset_fields = ['continent','air_quality_index','internet_quality'] # to specify the fields that can be used to filter the queryset.
    ordering_fields = ['created_at''updated_at', 'budget_score', 'air_quality_index', 'internet_quality'] # to specify the fields that can be used to order the queryset.
    #Search_fields = ['cities']
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    
    def get_queryset(self):
        user = self.request.user
        if user.is_authenticated:
           return Search.objects.filter(user = 
           user)
        raise NotAuthenticated("Authentication required to access searches")
    
    @action(detail = False, methods = ['get'])
    def get_choices(self, request):
        """
        Retrieve the choices for the search filters.
        """
        try:
            choices = {
           'continent_choices': dict(Search.CONTINENT_CHOICES),
            'humidity_choices': dict(Search.HUMIDITY_CHOICES),
            'visa_type_choices': dict(Search.VISA_TYPE_CHOICES),
            'max_stay_choices': dict(Search.MAX_STAY_CHOICES),
            'safety_rating_choices': dict(Search.SAFETY_RATING),
            'travel_advisory_choices': dict(Search.TRAVEL_ADVISORY),
            'col_index_choices': dict(Search.COL_INDEX),
        }
            return Response(choices, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'error':str(e)},status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            

    # this is to handle the advanced search request. It receives filter criteria in the request data and constructs a database query based on these criteria.
    @action(detail=False, methods=['post']) # to specify the action that will be performed by the view.
    def advanced_search(self,request):
        try:
           queryset = self.get_queryset()
        

           # Apply filters based on request data
           if 'min_temp' in request.data and 'max_temp' in request.data:
            queryset = queryset.filter(min_temp__gte=request.data['min_temp'], max_temp__lte=request.data['max_temp'])
        
           if 'preferred_humidity' in request.data:
            queryset = queryset.filter(preferred_humidity=request.data['preferred_humidity'])
        
           serializer = self.get_serializer(queryset, many=True)
           return Response(serializer.data, status=status.HTTP_200_OK)  # Add this line to return the serialized data
        except Exception as e:
          return Response({'error':str(e)},status=status.HTTP_400_BAD_REQUEST)
