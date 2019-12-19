import requests
from bs4 import BeautifulSoup


## cookpad => not success
## dapur umami => success https://www.dapurumami.com/resep?show=45
## eresep => success https://www.eresep.com/resep
## Sajian sedap => success https://sajiansedap.grid.id/goreng
## menuresepmasakan => success https://www.menuresepmasakan.com/category/resep-masakan/
data = requests.get('https://www.dapurumami.com/resep?show=16')
soup = BeautifulSoup(data.text, 'html.parser')
for item in soup.select('div[class="item-recipe"] figcaption a'):
    print(item.attrs['href'])
    print('---------------')

