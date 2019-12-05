from urllib.request import urlopen
from bs4 import BeautifulSoup
from PIL import Image
from io import BytesIO
import sys
import re
import base64
import pymongo
out = open('dataset.txt','r')
link = out.read().split("\n")
client = pymongo.MongoClient("mongodb+srv://admin:helloworld@medicinedb-txqna.mongodb.net/mediPick?retryWrites=true&w=majority")

db = client.mediPick.medicines
db2 = client.mediPick.companys
def makeDB(url, index):

    dict={}
    dict['_id']=index
    bsObject = BeautifulSoup(url, "html.parser")
    try:
        if(bsObject.find('div',{'class': 'dr_img'}).find('img')!=None):
            tempImg = re.split(';base64,|data:image/',bsObject.find('div',{'class': 'dr_img'}).find('img').get('src'))
            im = Image.open(BytesIO(base64.b64decode(tempImg[2])))
            im.save('../public/img/' + str(index)+ '.jpg' ,tempImg[1])
    except Exception as ex:
        print(ex)
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
                search = {'company' : arr[idx+2]}

    if db2.find_one(search)==None:
        db2.insert_one(search)
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
    dict['price']="정보 없음"
    dict['recommend']=0
    #첫번째가 저장방법 , 두번째가 
    #print(arr1)
    #print(bsObject.find_all('h3',{'class':'cont_title3'}).get_text())
    #print(dict)
    db.insert_one(dict)
index = 0
for plus in range(0,500):
    html = urlopen("https://nedrug.mfds.go.kr/pbp/CCBBB01/getItemDetail?itemSeq=" + link[plus])
    makeDB(html,index)
    print("success ", index)
    index+=1








