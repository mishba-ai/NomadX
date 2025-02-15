from django.contrib.auth.models import User
from rest_framework import generics
from serializer import UserAuthSerializer 
from rest_framework.permissions import IsAuthenticated , AllowAny


class CreateUserAuthView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserAuthSerializer
    permission_classes = [AllowAny]
    authentication_classes = [] 