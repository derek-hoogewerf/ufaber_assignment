from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        field = ('id', 'name', 'description', 'duration','completed', 'avatar', 'completed')