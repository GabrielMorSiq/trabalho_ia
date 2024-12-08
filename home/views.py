from django.shortcuts import render, get_object_or_404, redirect

# views.py
def index(request):
    return render(request, 'index.html', {'show_main_content': True})

def vendas(request):
    return render(request, 'clusters.html')

def produtos_mais_vendidos(request):
    return render(request, 'analise.html')

def analise_regional(request):
    return render(request, 'analise_regional.html')

def clusterizacao(request):
    return render(request, 'clusterizacao.html')

def ia_analise(request):
    return render(request, 'ia_analise.html')