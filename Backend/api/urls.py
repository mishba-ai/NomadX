from django.urls import path
from api.views import SearchView,UserProfileView



urlpatterns = [
    # path("notes/",views.NoteListCreate.as_view(),name="note-list"),
    # path("notes/<int:pk>/",views.NoteDelete.as_view(),name="note-delete"),
    path('search/',SearchView.as_view(),name='destination-search'),
    path('user/profile/',UserProfileView.as_view(),name='user-profile'),
]
