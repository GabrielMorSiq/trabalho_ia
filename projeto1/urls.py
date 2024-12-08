"""
URL configuration for projeto1 project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path, include
from home import views
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),  # Rota para o painel administrativo do Django
    path('', views.index, name='index'),  # Página inicial
    path('clusters/', views.vendas, name='vendas'),  # Relatório de Vendas
    path('analise/', views.produtos_mais_vendidos, name='produtos_mais_vendidos'),
    path('analise_regional/', views.analise_regional, name='analise_regional'),
    path('clusterizacao/', views.clusterizacao, name='clusterizacao'),
    path('ia_analise/', views.ia_analise, name='ia_analise'),

]
