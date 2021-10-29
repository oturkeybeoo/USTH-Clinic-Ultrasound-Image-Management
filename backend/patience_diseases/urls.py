from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('patience_diseases/', views.PatienceDiseasesList.as_view()),
    path('patience_diseases/<int:pk>/', views.PatienceDiseasesDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)