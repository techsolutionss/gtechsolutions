from django.urls import path

from .views import PostFieldList, PostListDetials

urlpatterns = [
    path('post/', PostFieldList.as_view(), name='post'),
    path('<slug:slug>/', PostListDetials.as_view()),
]
