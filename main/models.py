from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser,User
class Profile(AbstractUser):
    birth_day = models.DateField(null=True)
    is_staff = models.BooleanField(default=False)
    about_me = models.TextField(null=True)