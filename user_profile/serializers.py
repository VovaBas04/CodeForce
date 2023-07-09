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
    def validate(self, data):
        file_input=data['test_input']
        file_output=data['test_output']
        # if file_input.name[-3:]!='txt' or file_output.name[-3:]!='txt':
        #     raise serializers.ValidationError("Неверный формат входного(выходного) файла, введите .txt")
        separator=b'$\n'
        file_input.open('r')
        file_output.open('r')
        count_input=0
        count_output=0
        for input_string in file_input.readlines():
            print(input_string)
            if input_string==separator:
               count_input+=1
        for input_string in file_output.readlines():
            if input_string==separator:
               count_output+=1
        # file_input.close()
        # file_output.close()
        if count_input!=count_output:
            raise serializers.ValidationError("Разное количество тестов в входных и выходных файлах")
        return data