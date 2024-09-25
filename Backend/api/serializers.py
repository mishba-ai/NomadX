from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Note
# User Serializer means  that we are going to serialize the user model and convert it into JSON format so that we can send it to the frontend. 
class UserSerializer(serializers.ModelSerializer):
    # Meta class is used to define the fields that we want to serialize.
    class Meta: 
        model = User 
        fields =["id","username","password"] 
        extra_kwargs = {"password": {"write_only": True, "required": True}} # extra_kwargs is used to define the password field as write_only so that it is not visible to the user and required so that the user has to provide the password while registering.

    # create method is used to create a new user.
    def create(self,validated_data):
        user = User.objects.create_user(**validated_data) # ** it means that we are passing the validated_data as a dictionary. dictionary means key value pair. 
        return user 

class NoteSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Note
        fields = ["id","title","content","created_at","author"] # fields that we want to serialize.
        extra_kwargs = {"author": {"read_only": True}} # extra_kwargs is used to define the author field as read_only so that the user cannot change the author of the note.
        