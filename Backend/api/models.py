from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Note(models.Model):
    title = models.CharField(max_length=100)  
    content =models.TextField() 
    created_at = models.DateTimeField(auto_now_add=True)
    author =models.ForeignKey(User,on_delete=models.CASCADE,related_name="notes") #author specifying who made this note. foreign key is used to link the user model with the note model. on_delete=models.CASCADE means that if the user is deleted then all the notes that are created by that user will also be deleted.

    def __str__(self): # this method will return the title of the note
        return self.title

