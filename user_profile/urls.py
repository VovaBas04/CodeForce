from django.urls import path
from .views import GetUserProfileView, UpdateUserProfileView, TasksViewSet,SendDecide
from rest_framework.routers import SimpleRouter
router = SimpleRouter(trailing_slash=False)
router.register('tasks', TasksViewSet)

urlpatterns = [
    path('user', GetUserProfileView.as_view()),
    path('update', UpdateUserProfileView.as_view()),
    path('test',SendDecide.as_view())
]
urlpatterns += router.urls