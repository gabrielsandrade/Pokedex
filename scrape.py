from bs4 import BeautifulSoup as bs
import urllib.request, os
from urllib.request import Request, urlretrieve, urlopen
opener = urllib.request.build_opener()
opener.addheaders = [('User-agent', 'Mozilla/5.0')]
urllib.request.install_opener(opener)
url = "https://pokemondb.net/sprites"
header = {'User-Agent' : 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36'}
def main () :
    print (url)
    req = Request(url, headers=header)
    req = urlopen(req)
    soup = bs(req.read(), "lxml")
    cards = soup.find_all(class_="infocard")
    contador = 1
    for card in cards :
        print (card.text.strip())
        print (card.span['data-src'])
        path = os.path.join("spritesByNumber", str(contador) + ".png")
        urlretrieve(card.span['data-src'], path)
        contador +=1
        
if __name__ == "__main__":
    main()