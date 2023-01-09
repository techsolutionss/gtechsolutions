from django.shortcuts import render
def homepage(request):
    return render(request,"home.html")

def index(request):
    return render(request,'index.html')