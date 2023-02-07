from django.contrib import admin
from .models import (Services,ProjectUpload)

# Register your models here.
@admin.register(Services)
class ServiceAdmin(admin.ModelAdmin):
    fieldsets = (
        (None,{
            'fields':(
                ('title'),
                ('description'),
            )
        }),
    )
    list_display = ('pk','title',)
    list_filter = ('title',)


@admin.register(ProjectUpload)
class ProjectsAdmin(admin.ModelAdmin):
    fieldsets = (
        (None,{
            'fields':(
                ('file_name'),
                ('img_url'),
            )
        }),
    )
    list_display = ('pk','file_name',)
    list_filter = ('file_name',)
