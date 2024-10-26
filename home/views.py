from django.shortcuts import render, get_object_or_404, redirect

# views.py
def index(request):
    return render(request, 'index.html')  # Usando o caminho completo
