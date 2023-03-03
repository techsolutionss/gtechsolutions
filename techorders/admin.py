from django.contrib import admin
from .models import Comments

@admin.register(Comments)
class CommentAdmin(admin.ModelAdmin):
    fieldsets = (
        (None,{
            'fields':(
                ('name','email'),
                ('comments'),
            )
        }),
    )
    list_display = ('pk','name','email','date')
    list_filter = ('name',)


