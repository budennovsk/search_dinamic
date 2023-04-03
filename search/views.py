
import json

from django.http import JsonResponse
from django.shortcuts import render, redirect

from .models import Product
from django.db.models import Q

from .scraping import get_scraping


def get(request):

    data = request.GET.get('data_p')
    if data is not None:
        data_dict = json.loads(data)

        if request.method == 'GET' and request.is_ajax():

            products = Product.objects.filter(
                Q(weight=data_dict['weight']) |
                Q(heigth=data_dict['heigth']) |
                Q(radius=data_dict['radius']) |
                Q(brand=data_dict['brand']) |
                Q(model=data_dict['model']) |
                Q(season=data_dict['season']) |
                Q(spikes=data_dict['spikes']) |
                Q(runflat=data_dict['runflat'])
            ).distinct()

            data_e = [i.get_data() for i in products]

            return JsonResponse({'data': data_e}, status=200)


    return render(request, 'search\scraping.html')

def restart(request):
    get_scraping()
    return redirect('search:all_scraping')

