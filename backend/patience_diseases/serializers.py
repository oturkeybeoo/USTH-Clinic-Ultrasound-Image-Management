from rest_framework import serializers
from .models import PatienceDisease

class PatienceDiseaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatienceDisease
        fields = ('id', 'disease_name')