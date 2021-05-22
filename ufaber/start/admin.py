from django.contrib import admin
from .models import Project

class ProjectAdmin(admin.ModelAdmin):
    list_display = ("name", "description", "start_date", "end_date", "completed")

# Register your models here.
admin.site.register(Project, ProjectAdmin)