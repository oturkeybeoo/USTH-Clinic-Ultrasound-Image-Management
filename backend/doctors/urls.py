from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views


urlpatterns = [
    path('', views.DoctorList.as_view()),
    path('<int:pk>', views.DoctorDetail.as_view()),
    path('login', views.DoctorLogin.as_view()),
    path('create', views.DoctorCreate.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)