from django.db import models

# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length = 100)
    description = models.TextField()
    completed = models.BooleanField(default = False)
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return self.name

