from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=255, default='')
    last_name = models.CharField(max_length=255, default='')
    phone = models.CharField(max_length=20, default='')
    city = models.CharField(max_length=20, default='')

    def __str__(self):
        return self.user.username
class Tasks(models.Model):
    author=models.ForeignKey(UserProfile,on_delete=models.CASCADE)
    title=models.CharField(max_length=100)
    task=models.TextField()
    test_input=models.FileField(upload_to='input')
    test_output=models.FileField(upload_to='output')
    image=models.ImageField(upload_to='image',null=True)

