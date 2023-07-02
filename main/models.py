from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser,User
class Profile(AbstractUser):
    birth_day = models.DateField(null=True)
    is_staff = models.BooleanField(default=False)
    about_me = models.TextField(null=True)
    REQUIRED_FIELDS = ['birth_day', 'is_staff', 'about_me']
class Task(models.Model):
    author=models.ForeignKey(Profile,on_delete=models.CASCADE)
    title=models.CharField(max_length=50)
    task=models.TextField()
    test_input=models.FileField(upload_to='input/',validators=[])
    test_output=models.FileField(upload_to='output/')
