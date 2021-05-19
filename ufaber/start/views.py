from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ProjectSerializer
from .models import Project

# Create your views here.
class ProjectView(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def get_serializer_class(self):
        return ProjectSerializer

    def get (self, request):
        return self.list(request)
