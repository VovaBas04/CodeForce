from rest_framework import serializers
from .models import UserProfile,Tasks

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'
class TasksSerializer(serializers.ModelSerializer):
    class Meta:
        model=Tasks
        fields='__all__'