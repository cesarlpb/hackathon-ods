from django.shortcuts import render

def index(request):
  usuario = {
    "nombre": "Pepe",
    "apellido": "Rana",   
  }
  return render(request, "index.html", context=usuario)
