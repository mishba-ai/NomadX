"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from api.views import CreateUserAuthView
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
