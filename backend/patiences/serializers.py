from rest_framework import serializers
from .models import Patience

class PatienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patience
        fields = (
            'id', 
            'patience_name',
            'patience_gender',
            'patience_weight',
            'patience_height',
            'patience_age',
            'patience_address',
            'patience_phone',
            'patience_email',
            'patience_insurance',
            'opt')
