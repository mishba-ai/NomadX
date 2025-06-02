from django.contrib.auth.models import User
from rest_framework import serializers

# User Serializer means  that we are going to serialize the user model and convert it into JSON format so that we can send it to the frontend. 
class UserAuthSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [ "username", "password","email"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user
