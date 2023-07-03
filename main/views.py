from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .models import Profile,Task
from .serializers import ProfileSerializer,TaskSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
# Create your views here.
def index(request):
    return render(request,'index.html')
class ProfileListView(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = (IsAuthenticated,)
class TaskListView(ListAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer