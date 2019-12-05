# mediPick
19년도 2학기 웹시설 팀프로젝트


항상 작업하기 전에 git pull origin master 한 후 작업할 것.
주의할 점
AWS에서 서버를 동작할때 포트 권한 때문에 명령어 앞에 sudo를 꼭 붙일 것.

npm install request : api 연동을 위한 패키지




### searchMedicinePage
-
searchMedicine.vue

    searchBox: 증상 카테고리 선택 -> '완료' 누르면 해당하는 증상 카테고리 페이지로 이동

searchSymptoms.vue
    
    symptomsList: 세부적인 증상 선택 -> '의약품 보기' 누르면 해당하는 의약품 페이지로 이동
    
MdsForSymp.vue

    해당하는 의약품 보여줘야 함(DB에서)


