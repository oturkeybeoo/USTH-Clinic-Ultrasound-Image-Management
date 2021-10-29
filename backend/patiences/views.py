from django.shortcuts import render
from .models import Patience
from .serializers import PatienceSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from django.views.decorators.csrf import csrf_exempt

class PatienceList(APIView):
    @csrf_exempt
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
