from django.contrib import admin
from django.urls import path, include
from AtonixCorp import views  

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('AtonixCorpApp.urls')),
    path('', views.home, name='home'),  
]