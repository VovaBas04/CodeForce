from django.urls import path,include,re_path
from .views import index,ProfileListView,TaskListView
from rest_framework import routers
router=routers.SimpleRouter()
router.register('home',ProfileListView)
urlpatterns = [
    path('tasks',TaskListView.as_view()),
    path('auth/', include('djoser.urls')),
    re_path(r'^auth/', include('djoser.urls.authtoken')),
    path('',index)
]
urlpatterns+=router.urls
