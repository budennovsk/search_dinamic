
import requests
from bs4 import BeautifulSoup

from .models import Product


def get_scraping():
    URL_SCRAPING = 'https://b2b.tyres.spb.ru/web/export/download?good_alias=tyre&file_key=ee4186d557daf057fe69620d68d720b0&format=xml'
    resp = requests.get(URL_SCRAPING)
    if resp.status_code != 200:
        raise Exception('HTTP error access!')

    data_list = []
    html = resp.text


    soup = BeautifulSoup(html, 'xml')
    blocks = soup.select('tyre')

    c = 0

    for block in blocks:
        data = {}



        weight = block.select_one('w').get_text().strip()
        data['weight'] = weight

        heigth = block.select_one('h').get_text().strip()
        data['heigth'] = heigth

        radius = block.select_one('d').get_text().strip()
        data['radius'] = radius

        brand = block.select_one('brand').get_text().strip()
        data['brand'] = brand

        model = block.select_one('model').get_text().strip()
        data['model'] = model

        season = block.select_one('season').get_text().strip()
        if 'Зима' in season:
            data['season'] = 'W'
        else:
            data['season'] = 'S'

        spikes = block.select_one('spikes').get_text().strip()
        if 'Да' in spikes:
            data['spikes'] = 'Y'
        else:
            data['spikes'] = 'N'

        article = block.select_one('article').get_text().strip()
        data['article'] = article

        count = block.select_one('Количество').get_text().strip()
        data['count'] = count

        price = block.select_one('Розница').get_text().strip()
        data['price'] = price

        address = block.select_one('address').get_text().strip()
        data['address'] = address

        params = block.select_one('params').get_text().strip()
        data['params'] = params

        runflat = block.select_one('title').get_text().strip()
        if 'Run Flat' in runflat:
            data['runflat'] = 'Y'
        else:
            data['runflat'] = 'N'

        title = data['brand'] + ' ' + data['model'] + ' ' + data['params']
        data['title'] = title



        #
        #
        #
        # for i in soup.select('shops'):
        #     address = i.select_one('address').get_text().strip()
        #     data['address'] = address
        #     data_list.append(data)
        #
        #
        #
        data_list.append(data)
        print(c,data)
        c+=1
        #
        for item in data_list:
            if not Product.objects.filter(article=item['article']).exists():
                Product.objects.create(
                    weight=item['weight'],
                    heigth=item['heigth'],
                    radius=item['radius'],
                    brand=item['brand'],
                    model=item['model'],
                    season=item['season'],
                    spikes=item['spikes'],
                    article=item['article'],
                    count=item['count'],
                    price=item['price'],
                    title=item['title'],
                    address=item['address'],
                    runflat=item['runflat']

                )







if __name__ == '__main__':
    get_scraping()