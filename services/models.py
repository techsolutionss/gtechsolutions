from django.db import models

def upload_to(instance,filename):
    return 'images/{filename}'.format(filename=filename)

# Create your models here.
class Service(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self):
        return self.title

class ProjectsUpload(models.Model):
    file_name = models.CharField(max_length=50)
    img_url = models.ImageField(upload_to=upload_to)