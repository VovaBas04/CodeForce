from rest_framework.views import APIView
from rest_framework.response import Response
from .models import UserProfile,Tasks
from .serializers import UserProfileSerializer,TasksSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
class GetUserProfileView(APIView):
    def get(self, request, format=None):
        try:
            user = self.request.user
            username = user.username

            user_profile = UserProfile.objects.get(user=user)
            user_profile = UserProfileSerializer(user_profile)

            return Response({ 'profile': user_profile.data, 'username': str(username) })
        except:
            return Response({ 'error': 'Something went wrong when retrieving profile' })

class UpdateUserProfileView(APIView):
    def put(self, request, format=None):
        try:
            user = self.request.user
            username = user.username

            data = self.request.data
            first_name = data['first_name']
            last_name = data['last_name']
            phone = data['phone']
            city = data['city']

            UserProfile.objects.filter(user=user).update(first_name=first_name, last_name=last_name, phone=phone, city=city)

            user_profile = UserProfile.objects.get(user=user)
            user_profile = UserProfileSerializer(user_profile)

            return Response({ 'profile': user_profile.data, 'username': str(username) })
        except:
            return Response({ 'error': 'Something went wrong when updating profile' })
class TasksViewSet(ModelViewSet):
    queryset = Tasks.objects.all()
    serializer_class =TasksSerializer
    # permission_classes = (IsAuthenticated, )
# from ..codeforce.settings import MEDIA_URL
from django.conf import settings
import os
class SendDecide(APIView):
    def post(self,request):
        try:
            data=self.request.data
            task=Tasks.objects.get(task_id=data['id'])
            programm=data['programm']
            dir_path=str(data['user_id'].username)+str(data['id'])
            full_dir_path=os.path.join(settings.MEDIA_URL,'code/'+dir_path)
            os.mkdir(full_dir_path)
            f=open(full_dir_path+'/'+'input.txt','w')
        except:
            pass


