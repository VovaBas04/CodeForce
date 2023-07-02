from django.contrib import admin
from .models import Profile,Task
# Register your models here.
class ProfileAdmin(admin.ModelAdmin):
    list_display = ['username','birth_day','is_staff','about_me']
    list_editable = list_display[1:]
admin.site.register(Profile,ProfileAdmin)
class TaskAdmin(admin.ModelAdmin):
    list_display = ['author','title','task','test_input','test_output']
    list_editable = list_display[1:]
admin.site.register(Task,TaskAdmin)