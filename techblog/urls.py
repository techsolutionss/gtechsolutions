from django.urls import path

from .views import PostFieldList, PostListDetials, CommentsList, CreateComment

urlpatterns = [
    path('post/', PostFieldList.as_view(), name='post'),
    path('<slug:slug>/', PostListDetials.as_view()),
    path('<slug:slug>/', CommentsList.as_view()),
    path('<slug:slug>/send/', CreateComment.as_view())
]
 