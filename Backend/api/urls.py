from api.views import SearchView,UserProfileView
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views.search_view import SearchView

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'search', SearchView, basename='search')

urlpatterns = [
    # Include the router URLs
    path('', include(router.urls)),
    
    # path("notes/",views.NoteListCreate.as_view(),name="note-list"),
    # path("notes/<int:pk>/",views.NoteDelete.as_view(),name="note-delete"),
    
    path('user/profile/',UserProfileView.as_view(),name='user-profile'),
]