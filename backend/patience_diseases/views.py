from django.shortcuts import render
from .models import PatienceDisease
from .serializers import PatienceDiseaseSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404

class PatienceDiseasesList(APIView):
    def get(self, request, format=None):
        patiencedisease = PatienceDisease.objects.all()
        srlr = PatienceDiseaseSerializer (patiencedisease, many=True)
        return Response(srlr.data)

    def post(self, request, format=None):
        srlr = PatienceDiseaseSerializer(data=request.data)
        if srlr.is_valid():
            srlr.save()
            return Response(srlr.data, status=status.HTTP_201_CREATED)
        return Response(srlr.errors, status=status.HTTP_400_BAD_REQUEST)

class PatienceDiseasesDetail(APIView):
    def get_object(self, pk):
        try:
            return PatienceDisease.objects.get(pk=pk)
        except PatienceDisease.DoesNotExist:
            raise Http404
    
    def get(self, request, pk, format=None):
        patiencedisease = self.get_object(pk=pk)
        srlr = PatienceDiseaseSerializer (patiencedisease)
        return Response(srlr.data)
    
    def put(self, request, pk, format=None):
        patiencedisease = self.get_object(pk=pk)
        srlr = PatienceDiseaseSerializer (patiencedisease, data=request.data)
        if srlr.is_valid():
            srlr.save()
            return Response(srlr.data)
        return Response(srlr.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        patiencedisease = self.get_object(pk)
        patiencedisease.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
