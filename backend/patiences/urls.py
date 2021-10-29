from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views


urlpatterns = [
    path('', views.PatienceList.as_view()),
    path('<int:pk>/', views.PatienceDetail.as_view()),
    path('create', views.CreatePatience.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)