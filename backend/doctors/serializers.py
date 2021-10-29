from rest_framework import serializers
from .models import Doctor

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = ('id', 'doctor_name', 'doctor_phone', 'doctor_email', 'doctor_description')