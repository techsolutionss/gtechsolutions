from django.db import models
from django.utils.translation import gettext_lazy as _


class PostField(models.Model):
    title = models.CharField(max_length=150, unique=True, verbose_name=_('title'))
    slug = models.SlugField(max_length=150, unique=True, allow_unicode=True)
    # author= models.ForeignKey(on_delete= verbose_name='author')
    thumbnail = models.ImageField(upload_to='thumbnails')
    body = models.TextField()
    read_time = models.IntegerField(null=True, blank=True)
    # tags = models.ManyToManyField('posts.Tag')
    created_at = models.DateTimeField(auto_now_add=True)
    edited_at = models.DateTimeField(auto_now=True)
    is_public = models.BooleanField(default=False)


    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.id}. {self.title}' 
    
class Tag(models.Model):
    name = models.CharField(max_length=20, unique=True)


    class Meta:
        ordering = ['name']

        def __str__(self):
            return f'{self.id}. {self.name}'
        