from telnetlib import STATUS
from django.shortcuts import render
from rest_framework.response import Response
from .models import *
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from .serializers import *
# Create your views here.


@api_view(['GET'])
def index(request):
    try:
        posts = Post.objects.all().order_by('id')
        serializer = PostSerializer(posts, many = True)
                
        return Response ({
            "success":True,
            "data": serializer.data
        })
    except:
        return Response ({
            "success":"Fail",
            
        }, status=500)




@api_view(['POST'])
def post_create(request):
    serializer = PostSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(
        {
            "success": True,
            
        }
    )
    else:

        return Response(
        {
            "success": "Fail",
            'error':serializer.errors
            
        }
    )


