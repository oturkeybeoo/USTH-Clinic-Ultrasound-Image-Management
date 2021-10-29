from rest_framework import serializers
from .models import PatiencePicture

class PatiencePictureSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatiencePicture
        fields = (
            'id',
            'picture_link',
            'picture_title',
            'picture_description',
            'patience_id',
            'doctor_id',
            'taken_date'
        )