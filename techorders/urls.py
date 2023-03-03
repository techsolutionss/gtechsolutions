from django.urls import path
from .views import CommentView


app_name = 'techorders'

urlpatterns = [
    path('comments/',CommentView.as_view(),name="comment_view")
]