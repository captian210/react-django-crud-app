import random, string
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from .serializer import ClientSerializer
from rest_framework.decorators import api_view
from .models import Client
from rest_framework.parsers import JSONParser

# Create your views here.
def get_random_string(length):
    # choose from all lowercase letter
    letters = string.ascii_lowercase
    result_str = ''.join(random.choice(letters) for i in range(length))
    return result_str

# class ClientViewSet(viewsets.ModelViewSet):
#     queryset = Client.objects.all().order_by('name')
#     serializer_class = ClientSerializer

@api_view(['GET'])
def getClients(request):
    clients = Client.objects.order_by('name')
    serializer = ClientSerializer(clients, many=True)
    return Response(serializer.data)
    
@api_view(['GET'])
def deleteClients(request):
    clients = Client.objects.order_by('name')
    clients.delete()
    return Response('ok')

@api_view(['POST'])
def createClient(request):
    name = JSONParser().parse(request)['name']
    client_id = name + '-' + get_random_string(3)
    try:
        while Client.objects.get(client_id = client_id, name = name) is not None:
            client_id = name + get_random_string(3)
    except Client.DoesNotExist:
        pass
    new_client = Client(client_id = client_id, name = name)
    new_client.save()
    clients = Client.objects.order_by('name')
    serializer = ClientSerializer(clients, many=True)
    return Response(serializer.data)
