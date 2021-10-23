from rest_framework import serializers
from .models import Patience

class PatienceSerializer(serializers.Serializer):
    class meta:
        model = Patience
        field = ('id', 'patience_name', 'patience_gender', 'patience_age', 'patience_address', 'patience_phone', 'patience_email', 'otp')