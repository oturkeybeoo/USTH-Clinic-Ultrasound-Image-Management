from rest_framework import serializers
from .models import Doctor

class DoctorSerializer(serializers.Serializer):
    class meta:
        model = Doctor
        field = ('id', 'doctor_name', 'doctor_phone', 'doctor_email', 'doctor_description')