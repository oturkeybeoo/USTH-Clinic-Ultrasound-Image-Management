from rest_framework import serializers
from .models import PatiencePicture

class PatiencePictureSerializer(serializers.Serializer):
    class meta:
        model = PatiencePicture
        field = ('id', 'picture_title', 'picture_description', 'patience_id', 'disease_id', 'doctor_id', 'taken_date')