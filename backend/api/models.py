
from django.db import models

# Create your models here.

class Post(models.Model):
    heading = models.CharField(max_length=30)
    subheading = models.CharField(max_length=30)
    description = models.CharField(max_length=30)
    image = models.ImageField(null=True, blank=True)
