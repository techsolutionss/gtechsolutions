from django.contrib import admin
from services.models import Service
from services.models import ProjectsUpload

# Register your models here.

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    fields = ('title','description')

@admin.register(ProjectsUpload)
class ProjectsUploadAdmin(admin.ModelAdmin):
    fields = ('file_name','img_url')