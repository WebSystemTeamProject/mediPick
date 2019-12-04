from urllib.request import urlopen
from bs4 import BeautifulSoup
import sys
import pymongo
out = open('dataset.txt','r')
link = out.read().split("\n")
client = pymongo.MongoClient("mongodb+srv://admin:helloworld@medicinedb-txqna.mongodb.net/mediPick?retryWrites=true&w=majority")

db = client.mediPick.medicine
def makeDB(url, index):
    dict={}
    dict['_id']=index
    bsObject = BeautifulSoup(url, "html.parser")
    #print(bsObject.find('div',{'class':'title'}).h1.strong.get_text())
    dict['medicineName']=bsObject.find('div',{'class':'title'}).h1.strong.get_text()
    #print(bsObject.find_all('div',{'class':'r_sec'}))
    arr = bsObject.find_all('div',{'class':'r_sec'})
    arr = arr[0].get_text().split("\n")
    for idx in range(len(arr)):
        if(idx>1):
            if (arr[idx]=="성상"):
                dict['shape'] = arr[idx+1]
            if (arr[idx]=="업체명"):
                dict['company']=arr[idx+2]
        #print(idx ," ",  arr[idx])
    #print(len(bsObject.find_all('h3',{'class':'cont_title3'})))
    for cover in bsObject.find_all('h3',{'class':'cont_title3'}):
        if '유효성분' in cover.get_text() :
            dict['activeInGredient']=cover.get_text()
        else:
            dict['additive']=cover.get_text()

    dict['efficacy']=bsObject.find('p',{'class':'indent0'}).get_text()
    dict['dosage']=bsObject.find('div',{'id':'_ud_doc'}).get_text()

    dict['precautions']=bsObject.find('div',{'id':'_nb_doc'}).get_text()

    arr1 = bsObject.find('table',{'class':'s-dr_table dr_table_type2 s-view-table ss_table'}).find_all('td')
    #print(arr1)
    #arr1 = arr1[0].get_text().split("\n")

    for idx in range(len(arr1)):
        if idx==0:
            dict['store']=arr1[idx].get_text()
        elif idx==1:
            dict['period']=arr1[idx].get_text()
    #첫번째가 저장방법 , 두번째가 
    #print(arr1)
    #print(bsObject.find_all('h3',{'class':'cont_title3'}).get_text())
    #print(dict)
    db.insert_one(dict)
index = 0
for plus in link:
    html = urlopen("https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetail?itemSeq=" + plus)
    makeDB(html,index)
    index+=1








