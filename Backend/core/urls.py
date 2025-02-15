from django.contrib import admin
from django.urls import path, include
from auth.views import CreateUserAuthView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView  #these views are built in views that allow us to obtain our access token and refresh token

# this is the url configuration for the backend project means that the urls that we want to use in our project for example the admin url that we can use to access the admin panel of our project

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/register/',CreateUserAuthView.as_view(),name='register'), # this is the url that we will use to register a new user
    path('api/token/',TokenObtainPairView.as_view(),name='get_token'), # this is the url that we will use to obtain our access token
    path('api/token/refresh/',TokenRefreshView.as_view(),name='refresh_token'), # this is the url that we will use to refresh our access token
    path('api-auth/',include('rest_framework.urls')), # this is the url that we will use to access the rest framework urls
    path("api/",include("api.urls")), # this is the url that we will use to access the api urls
]
