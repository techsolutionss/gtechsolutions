from django.db import models

def upload_to(instance,filename):
    return 'image/{filename}'.format(filename=filename)


# Create your models here.
class Services(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "offered services"
        verbose_name_plural = "offered services"
        ordering =['title']

class ProjectUpload(models.Model):
    file_name = models.CharField(max_length=50)
    img_url = models.ImageField(upload_to=upload_to)