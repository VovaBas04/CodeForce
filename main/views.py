from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .models import Profile
from .serializers import ProfileSerializer
from rest_framework.permissions import IsAuthenticated
# Create your views here.
def index(request):
    return render(request,'index.html')
class ProfileListView(ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = (IsAuthenticated,)