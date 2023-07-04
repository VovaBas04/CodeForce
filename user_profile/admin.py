from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import UserProfile,Tasks
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ['user','first_name','city']
    list_editable = list_display[1:]
class TasksProfileAdmin(admin.ModelAdmin):
    list_display = ['author','title','test_input','test_output']
    list_editable = list_display[1:]
admin.site.register(UserProfile,UserProfileAdmin)
admin.site.register(Tasks,TasksProfileAdmin)