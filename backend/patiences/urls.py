from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views


urlpatterns = [
    path('patience/', views.PatienceList.as_view()),
    path('patience/<int:pk>/', views.PatienceDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)