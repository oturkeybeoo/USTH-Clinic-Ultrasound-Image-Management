from django.shortcuts import render
from .models import PatienceDiseases
from .serializers import PatienceDiseasesSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404

class PatienceDiseasesList(APIView):
    def get(self, request, format=None):
        patiencediseases = PatienceDiseases.objects.all()
        srlr = PatienceDiseasesSerializer (patiencediseases, many=True)
        return Response(srlr.data)

    def post(self, request, format=None):
        srlr = PatienceDiseasesSerializer(data=request.data)
        if srlr.is_valid():
            srlr.save()
            return Response(srlr.data, status=status.HTTP_201_CREATED)
        return Response(srlr.errors, status=status.HTTP_400_BAD_REQUEST)

class PatienceDiseasesDetail(APIView):
    def get_object(self, pk):
        try:
            return PatienceDiseases.objects.get(pk=pk)
        except PatienceDiseases.DoesNotExist:
            raise Http404
    
    def get(self, request, pk, format=None):
        patiencediseases = self.get_object(pk=pk)
        srlr = PatienceDiseasesSerializer (patiencediseases)
        return Response(srlr.data)
    
    def put(self, request, pk, format=None):
        patiencediseases = self.get_object(pk=pk)
        srlr = PatienceDiseasesSerializer (patiencediseases, data=request.data)
        if srlr.is_valid():
            srlr.save()
            return Response(srlr.data)
        return Response(srlr.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        patiencediseases = self.get_object(pk)
        patiencediseases.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
