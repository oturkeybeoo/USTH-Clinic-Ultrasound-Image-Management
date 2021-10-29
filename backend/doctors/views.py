from django.shortcuts import render
from .models import Doctor
from .serializers import DoctorSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404

class DoctorList(APIView):
    def get(self, request, format=None):
        doctor = Doctor.objects.all()
        srlr = DoctorSerializer(doctor, many=True)
        return Response(srlr.data)

    def post(self, request, format=None):
        srlr = DoctorSerializer(data=request.data)
        if srlr.is_valid():
            srlr.save()
            return Response(srlr.data, status=status.HTTP_201_CREATED)
        return Response(srlr.errors, status=status.HTTP_400_BAD_REQUEST)

class DoctorDetail(APIView):
    def get_object(self, pk):
        try:
            return Doctor.objects.get(pk=pk)
        except Doctor.DoesNotExist:
            raise Http404
    
    def get(self, request, pk, format=None):
        doctor = self.get_object(pk=pk)
        srlr = DoctorSerializer(doctor)
        return Response(srlr.data)
    
    def put(self, request, pk, format=None):
        doctor = self.get_object(pk=pk)
        srlr = DoctorSerializer(doctor, data=request.data)
        if srlr.is_valid():
            srlr.save()
            return Response(srlr.data)
        return Response(srlr.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        doctor = self.get_object(pk)
        doctor.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

