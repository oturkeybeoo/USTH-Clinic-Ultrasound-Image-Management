from django.shortcuts import render
from .models import Patience
from patience_pictures.models import PatiencePicture
from patience_pictures.serializers import PatiencePictureSerializer
from .serializers import PatienceSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
import json

""" Patience form
{
    "patience_name": "Vinh",
    "patience_gender": "Male",
    "patience_weight": "67",
    "patience_height": "176",
    "patience_age": "20",
    "patience_disease": "stomachache",
    "patience_address": "Hanoi",
    "patience_phone": "81726381287",
    "patience_email": "vinh@gmail.com",
    "patience_insurance": "823798173"
}
"""

class PatienceList(APIView):
    def get(self, request, format=None):
        patience = Patience.objects.all()
        srlr = PatienceSerializer(patience, many=True)
        return Response(srlr.data)

    def post(self, request, format=None):
        srlr = PatienceSerializer(data=request.data)
        if srlr.is_valid():
            srlr.save()
            return Response(srlr.data, status=status.HTTP_201_CREATED)
        return Response(srlr.errors, status=status.HTTP_400_BAD_REQUEST)

class PatienceDetail(APIView):
    def get_object(self, pk):
        try:
            return Patience.objects.get(pk=pk)
        except Patience.DoesNotExist:
            raise Http404
    
    def get(self, request, pk, format=None):
        patience = self.get_object(pk=pk)
        srlr = PatienceSerializer(patience)
        return Response(srlr.data)
    
    def put(self, request, pk, format=None):
        patience = self.get_object(pk=pk)
        srlr = PatienceSerializer(patience, data=request.data)
        if srlr.is_valid():
            srlr.save()
            return Response(srlr.data)
        return Response(srlr.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        patience = self.get_object(pk)
        patience.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# CREATE NEW PATIENCE
{
    "patience_name": "Vinh",
    "patience_gender": "Male",
    "patience_weight": "67",
    "patience_height": "176",
    "patience_age": "20",
    "patience_disease": "stomachache",
    "patience_address": "Hanoi",
    "patience_phone": "81726381287",
    "patience_email": "vinh@gmail.com",
    "patience_insurance": "823798173",

    "picture_link": "iuansdkj",
    "picture_title": "title 2",
    "picture_description": "description 2",
    "doctor_id": "1" 
}

class CreatePatience(APIView):
    def post(self, request, format=None):
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)

        
        patience_data = {
            "patience_name": body["patience_name"],
            "patience_gender": body["patience_gender"],
            "patience_weight": body["patience_weight"],
            "patience_height": body["patience_height"],
            "patience_age": body["patience_age"],
            "patience_disease": body["patience_disease"],
            "patience_address": body["patience_address"],
            "patience_phone": body["patience_phone"],
            "patience_email": body["patience_email"],
            "patience_insurance": body["patience_insurance"]
        }
        patience = Patience.create(patience_data) 

        image_data = {
            "picture_link": body["picture_link"],
            "picture_title": body["picture_title"],
            "picture_description": body["picture_description"],
            "patience_id": patience.id,
            "doctor_id": body["doctor_id"]
        }

        image_srlr = PatiencePictureSerializer(data=image_data)
        if image_srlr.is_valid():
            image_srlr.save()
            return Response(image_srlr.data, status=status.HTTP_201_CREATED)
        return Response(image_srlr.errors, status=status.HTTP_400_BAD_REQUEST)
        



        