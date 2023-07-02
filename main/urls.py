from django.urls import path,include,re_path
from .views import index,ProfileListView
urlpatterns = [
    path('Home/',ProfileListView.as_view()),
    path('auth/', include('djoser.urls')),
    re_path(r'^auth/', include('djoser.urls.authtoken')),
    path('',index)
]