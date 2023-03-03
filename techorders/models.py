from django.db import models
import datetime
from django.utils.translation import gettext_lazy as _

# Create your models here.
class Orders(models.Model):
    pass

class Comments(models.Model):
    name = models.CharField(max_length=50,verbose_name=_('senders name'))
    email = models.EmailField(verbose_name=_('senders email'))
    comments = models.TextField(max_length=500)
    date = models.DateTimeField(default=datetime.datetime.utcnow())

    def __str__(self):
        return self.name
    class Meta:
        verbose_name = "comment section"
        verbose_name_plural = "comments section"
        ordering = ['date']

    # def save(self,*args,**kwargs):
    #     return super(Comments).save(*args,**kwargs)