from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from api.serializers.userProfile_serializer import UserProfileSerializer

class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserProfileSerializer(request.user)
        return Response(serializer.data)

   #this is the put method that allows us to update the user profile 
    # def put(self, request):
    #     serializer = UserProfileSerializer(request.user, data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors, status=400)
    
    # #this is the delete method that allows us to delete the user profile 
    # def delete(self, request):
    #     request.user.delete()
    #     return Response(status=204)
    


