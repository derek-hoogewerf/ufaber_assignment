from rest_framework import serializers
from .models import Project
from django import forms

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'name', 'description', 'start_date', 'end_date', 'completed')

        def clean(self):
            cleaned_data = super().clean()
            start_date = cleaned_data.get("start_date")
            end_date = cleaned_data.get("end_date")
            if end_date < start_date:
                raise forms.ValidationError("End date should be greater than start date.")