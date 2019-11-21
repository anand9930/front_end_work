from bs4 import BeautifulSoup 
import requests


source=requests.get('https://www.androidauthority.com/').text
soup=BeautifulSoup(source,'lxml')
article_block=soup.title#find('div',class_='loop-info')
print(article_block)
androidauthority_dict={}
#for article in article_block:
#androidauthority_dict[(article.h2.text)]=article.a['href']

def techcrunch():
	source=requests.get('https://techcrunch.com/').text
	soup=BeautifulSoup(source,'lxml')
	article_block=soup.find_all('a',class_='post-block__title__link')
	techcrunch_dict={}
	for article in article_block:
		techcrunch_dict[(article.text)]=article['href']
	return (techcrunch_dict)

def theverge():
	source=requests.get('https://www.theverge.com/').text
	soup=BeautifulSoup(source,'lxml')
	article_block=soup.find_all('h2',class_='c-entry-box--compact__title')
	theverge_dict={}
	for article in article_block:
		theverge_dict[(article.a.text)]=article.a['href']
	return (theverge_dict)

#for x,y in androidauthority_dict.items():
	#print(x)
	#print(y)



