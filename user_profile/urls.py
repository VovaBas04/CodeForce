from django.urls import path
from .views import GetUserProfileView, UpdateUserProfileView, TasksViewSet
from rest_framework.routers import SimpleRouter
router = SimpleRouter(trailing_slash=False)
router.register('tasks', TasksViewSet)

urlpatterns = [
    path('user', GetUserProfileView.as_view()),
    path('update', UpdateUserProfileView.as_view()),
]
urlpatterns += router.urls