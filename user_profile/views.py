from rest_framework.views import APIView
from rest_framework.response import Response
from .models import UserProfile,Tasks
from .serializers import UserProfileSerializer,TasksSerializer
from rest_framework.viewsets import ModelViewSet
import concurrent.futures as cf #подключение библиотек для работы с процессами
import shutil,traceback
from rest_framework.permissions import IsAuthenticated,AllowAny
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
    permission_classes = (AllowAny, )
    def create(self, request, *args, **kwargs):
        try:
            request.data['author']=self.request.user.id
            return super().create(request,*args,**kwargs)
        except Exception as err:
            print('Ошибка:\n', traceback.format_exc())
            return Response({'message': traceback.format_exc()})
# from ..codeforce.settings import MEDIA_URL
from django.conf import settings
import os
class SendDecide(APIView):
    permission_classes = (AllowAny,)
    def create_py_file(self,text):
        f=open('main.py','w')
        for i in text:
            f.write(i)
        f.close()
    def return_tests(self,task):
        separators = [b'$\n',b'$']
        file_input=task.test_input
        file_output=task.test_output
        tests=[]
        # print("В функции тестов",file_input.readlines()[2])
        text=''
        for input_string in file_input.readlines():
            if not input_string in separators:
                print(input_string, 'YOU')
                if input_string != b'':
                    text += input_string.decode()
            else:
                text_test=text.split('\n')[:-1]
                text_test=list(map(lambda x:x+'\n',text_test))
                print(text_test)
                tests.append([text_test])
                text=''
        text=''
        index=0
        for input_string in file_output.readlines():
            if not input_string in separators:
                if input_string != b'':
                    text += input_string.decode()
            else:
                text_test = text.split('\n')[:-1]
                text_test=list(map(lambda x:x+'\n',text_test))
                tests[index].append(text_test)
                text=''
                index+=1
        return tests
    def is_valid_test(self,text):
        f=open('output.txt','r')
        count_text_string=len(text)
        count=0
        for number_string,output_string in enumerate(f.readlines()):
            print("Я здесь")
            print(output_string)
            if number_string==count_text_string or output_string!=text[number_string]:
                f.close()
                print(number_string,count_text_string, output_string, text[number_string])
                return False
            count=number_string
        if count_text_string!=count+1:
            f.close()
            print(count_text_string,count+1, 'O')
            return False
        f.close()
        return True
    def post(self,request):
        data=self.request.data
        task=Tasks.objects.get(id=data['id'])
        programm=data['programm']
        dir_path=str(task.author.user.username)+str(data['id'])
        my_path = os.getcwd()
        print(my_path)
        try:
            os.chdir(os.getcwd()+settings.MEDIA_URL+'code/')
            os.mkdir(dir_path)
            os.chdir(os.getcwd()+'/'+dir_path)
            print(os.getcwd())
            file_input=open('input.txt','w')
            file_output=open('output.txt','w')
            file_output.close()
            self.create_py_file(programm)
            tests=self.return_tests(task)
            print("Тут такая")
            print(tests)
            for number_test,test in enumerate(tests):
                for string in test[0] :
                    file_input.write(string)
                file_input.close()
                print("D")
                worker1 = cf.ProcessPoolExecutor(max_workers=1)
                process=worker1.submit(os.system,"python3 main.py")
                print("never")
                try:
                    cod=process.result(timeout=3)
                    print(cod)
                    # cod=process.exception(timeout=3)
                except:
                    process.cancel()
                    shutil.rmtree(os.getcwd())
                    os.chdir(my_path)
                    return Response(
                        {"message": f'Время истекло при исполнении программы на тесте: {number_test + 1}',
                         "id": -1})
                if cod:
                    shutil.rmtree(os.getcwd())
                    os.chdir(my_path)
                    return Response({"message": f'Ошибка при исполнении программы на тесте: {number_test + 1}, 'f'код ошибки: {cod}',
                                     "id": -1})
                file_input = open('input.txt', 'w')
                if not self.is_valid_test(test[1]):
                    shutil.rmtree(os.getcwd())
                    os.chdir(my_path)
                    return Response({"message": f'Неправильный ответ на тест: {number_test+1}',
                                     "id": -1})
            shutil.rmtree(os.getcwd())
            os.chdir(my_path)
            return Response({"message":"Все окей",
                             "id": 0})
        except:
            shutil.rmtree(os.getcwd())
            os.chdir(my_path)
            return Response({"message": "Неизвестная ошибка",
                             "id": -1})