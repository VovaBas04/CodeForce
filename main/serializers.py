from rest_framework import serializers
from .models import Profile
class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields=['id','username','is_staff','birth_day','about_me']
