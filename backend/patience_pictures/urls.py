from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views


urlpatterns = [
    path('patience_picture/', views.PatiencePictureList.as_view()),
    path('patience_picture/<int:pk>/', views.PatiencePictureDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)