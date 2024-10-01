from django.contrib.auth.models import User
from rest_framework import serializers
from api.models import Search


class SearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Search
        fields = '__all__'