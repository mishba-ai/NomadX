from django.contrib.auth.models import User
from rest_framework import serializers
from api.models import Search


class SearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Search
        fields = '__all__'

    def validate(Self, data):
         """
        Validate the entire data dictionary.
        """
         if 'startdate' in data and 'enddate' in data:
            if data['startdate'] > data['enddate']:
                raise serializers.ValidationError("Start date cannot be greater than end date")

         if 'min_temp' in data and 'max_temp' in data:
            if data['min_temp'] > data['max_temp']:
              raise serializers.ValidationError("Min temperature cannot be greater than max temperature")
         
         #visa validation
         visa_fields = [
             data.get('visa_on_arrival', False),
             data.get('no_visa_required', False),
             data.get('e_visa_available', False),
             data.get('embassy_application', False),

         ]
    
         if sum(visa_fields) > 1:
            raise serializers.ValidationError("Only one visa option can be selected at a time.")
         

         return data
    
    def validate_budget_score(self, value):
        """
        Validate budget score against cost of living index.
        """
        if self.initial_data.get('cost_of_living_index') == 'ANY' and value is not None:
            raise serializers.ValidationError("If a budget score is provided, cost of living index cannot be 'ANY'.")
        
        return value