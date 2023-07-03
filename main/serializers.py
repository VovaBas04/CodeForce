from rest_framework import serializers
from .models import Profile,Task
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields=['id','username','is_staff','birth_day','about_me']
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields='__all__'
