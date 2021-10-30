from django.shortcuts import render
from .models import PatiencePicture
from .serializers import PatiencePictureSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404

import cloudinary
import cloudinary.uploader
import cloudinary.api

cloudinary.config( 
  cloud_name = "daqpw3pug", 
  api_key = "624768845985428", 
  api_secret = "6Ag825vWVgRaveidqjN-ZGNVxV0" 
)


{
    "picture_link": "iuansdkj",
    "picture_title": "title",
    "picture_description": "description",
    "patience_id": "1",
    "disease_id": "1",
    "doctor_id": "1"
}

class PatiencePictureList(APIView):
    def get(self, request, format=None):
        patiencepicture = PatiencePicture.objects.all()
        srlr = PatiencePictureSerializer(patiencepicture, many=True)
        return Response(srlr.data)

    def post(self, request, format=None):
        srlr = PatiencePictureSerializer(data=request.data)
        if srlr.is_valid():
            srlr.save()
            return Response(srlr.data, status=status.HTTP_201_CREATED)
        return Response(srlr.errors, status=status.HTTP_400_BAD_REQUEST)

class PatiencePictureDetail(APIView):
    def get_object(self, pk):
        try:
            return PatiencePicture.objects.get(pk=pk)
        except PatiencePicture.DoesNotExist:
            raise Http404
    
    def get(self, request, pk, format=None):
        patiencepicture = self.get_object(pk=pk)
        srlr = PatiencePictureSerializer(patiencepicture)
        return Response(srlr.data)
    
    def put(self, request, pk, format=None):
        patiencepicture = self.get_object(pk=pk)
        srlr = PatiencePictureSerializer(patiencepicture, data=request.data)
        if srlr.is_valid():
            srlr.save()
            return Response(srlr.data)
        return Response(srlr.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        patiencepicture = self.get_object(pk)
        patiencepicture.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)        
