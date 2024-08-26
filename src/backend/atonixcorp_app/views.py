from django.shortcuts import render



from django.http import JsonResponse
from .tasks import add

def add_view(request):
    result = add.delay(4, 6)
    return JsonResponse({'task_id': result.id})