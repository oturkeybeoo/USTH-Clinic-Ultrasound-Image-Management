from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views


urlpatterns = [
    path('doctor/', views.DoctorList.as_view()),
    path('doctor/<int:pk>/', views.DoctorDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)