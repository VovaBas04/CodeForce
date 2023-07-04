from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.contrib import admin
from django.conf.urls.static import static
from django.conf import settings
urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('accounts/', include('main.urls')),
    path('profile/', include('user_profile.urls')),
    path('admin/',admin.site.urls)
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]