from django.db import models

# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length = 100)
    description = models.TextField()
    duration = models.DurationField()
    avatar = models.ImageField(upload_to = 'pics')
    completed = models.BooleanField(default = False)

    def __str__(self):
        return self.name

