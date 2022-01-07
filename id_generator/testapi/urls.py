from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
# router.register(r'clients', views.ClientViewSet)
urlpatterns = [
    path('', include(router.urls)),
    path('all', views.getClients, name="all"),
    path('create', views.createClient, name="create"),
    path('delete', views.deleteClients, name="delete"),
]