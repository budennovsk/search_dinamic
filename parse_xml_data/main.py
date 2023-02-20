from xml.etree import ElementTree
import csv
import requests



LIST_XML = 'feel.xml'
LIST_DATA = 'https://b2b.tyres.spb.ru/web/export/download?good_alias=tyre&file_key=ee4186d557daf057fe69620d68d720b0&format=xml'
DATA_CSV = 'parse_xml_data.csv'
weight = []
height = []
radius = []
brand = []
model = []

def get_xml(load_url):
    response = requests.get(load_url)
    with open('feel.xml', 'wb') as file:
        file.write(response.content)


def read(url):

    tree = ElementTree.parse(url)
    root = tree.getroot()

    for element in root.findall('goods'):
        for element1 in element.findall('tyre'):

            weight = element1.find('w').text
            height = element1.find('h').text
            radius = element1.find('d').text
            brand = element1.find('brand').text
            model = element1.find('model').text

            data_csv(weight,height,radius,brand,model)

def data_csv(*data):
    if data[0] not in weight:
        weight.append(data[0])
    if data[1] not in height:
        height.append(data[1])
    if data[2] not in radius:
        radius.append(data[2])
    if data[3] not in brand:
        brand.append(data[3])
    if data[4] not in model:
        model.append(data[4])




    # with open(DATA_CSV, "w") as file:
    #     writer = csv.writer(file, delimiter=';')
    #     writer.writerow(
    #         (
    #             "Ширина",
    #             "Высота",
    #             "Радиус",
    #             "RFT",
    #             "Бренд",
    #             "Модель",
    #             "Сезон",
    #             "Шип."
    #
    #         )
    #
    #     )
    sort_brand = sorted(brand)
    sort_model = sorted(model)

    with open(DATA_CSV, "w") as file:
        writer = csv.writer(file, delimiter = ';', lineterminator="\n")
        writer.writerows(([weight,height,radius,sort_brand,sort_model]))





def main():
    get_xml(LIST_DATA)
    print('Фаил скачен')
    read(LIST_XML)


if __name__ == '__main__':

    try:
        main()

    except Exception as es:
        print(es)

    else:
        print('Скрипт выполнен')


