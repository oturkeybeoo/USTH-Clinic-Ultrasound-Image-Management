from rest_framework import serializers
from .models import PatienceDisease

class PatienceDiseaseSerializer(serializers.Serializer):
    class meta:
        model = PatienceDisease
        field = ('id', 'disease_name')