import requests
from bs4 import BeautifulSoup
import csv

""" Создание из xml csv БД """

url = 'https://b2b.tyres.spb.ru/web/export/download?good_alias=tyre&file_key=ee4186d557daf057fe69620d68d720b0&format=xml'

DATA_CSV = 'data.csv'
# запрос на адрес отправляем
document = requests.get(url)
# варим суп
soup = BeautifulSoup(document.content, "lxml")
# запись результата
weight = []
height = []
radius = []
brand = []
model = []
article = []


def parse(cod: str) -> None:
    """ Создание результата в виде списков """
    xml = soup.find_all(cod)
    # парсим xml через ds4
    for i in xml:
        c = i.get_text()
        if cod == 'w' and c not in weight:
            weight.append(c)
        if cod == 'h' and c not in height:
            height.append(c)
        if cod == 'd' and c not in radius:
            radius.append(c)
        if cod == 'brand' and c not in brand:
            brand.append(c)
        if cod == 'model' and c not in model:
            model.append(c)
        if cod == 'article' and c not in article:
            article.append(c)


for i in ['w', 'h', 'd', 'brand', 'model', 'article']:
    parse(i)


# print(weight, height, radius,brand,model, sep = '\n')

def create_csv() -> None:
    """ Запись списков данных в CSV """
    with open(DATA_CSV, "w") as file:
        writer = csv.writer(file, delimiter=';', lineterminator="\n")
        writer.writerows(([weight, height, radius, sorted(brand), sorted(model), article]))


if __name__ == '__main__':

    try:
        create_csv()
    except Exception as ex:
        print(ex)
    else:
        print('Скрипт выполнен')
