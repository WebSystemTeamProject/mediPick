<template>
    <div class="find">
        <div class="searchMap">
            <p>약국 검색</p>
            <input v-model="address" placeholder="현재 주소를 입력해 주세요. ex)월드컵로206 아주대학교" class="searchInputSpace">
            <button v-on:click="btnClicked" class="SearchButton">검색</button>
        </div>

        <div class="map_wrap">
            <div id="map" ref="map" style="width:100%;height:100%;position:relative;overflow:hidden;"></div>
            <ul id="category">
                <li id="PM9" ref="pm" data-order="2"> 
                    <span class="category_bg pharmacy"></span>
                    약국
                </li>   
            </ul>
        </div>      
    </div>
</template>



<script>
var loadScriptOnce = require('load-script-once');
    export default {
    name: "appMap",
    data(){
        return{
            pos: [37.282895,127.044938],
            address: ""
        }
    },
        mounted: async function(){
            await this.loadMap();
        },
        methods:{
            async loadMap(){
                    const ctx = this;
                    var placeOverlay = new kakao.maps.CustomOverlay({zIndex:1});
                var contentNode = document.createElement('div');
                var markers=[];
                var currCategory='';
                var mapContainer = this.$refs.map;
                var mapOptions = {
                    center: new kakao.maps.LatLng(this.pos[0], this.pos[1]),
                    level: 3
                };
                
                var map = new kakao.maps.Map(mapContainer, mapOptions);

                var ps = new kakao.maps.services.Places(map);

                kakao.maps.event.addListener(map, 'idle', searchPlaces);
                contentNode.className = 'placeinfo_wrap';
                addEventHandle(contentNode, 'mousedown', kakao.maps.event.preventMap);
                addEventHandle(contentNode, 'touchstart', kakao.maps.event.preventMap);
                placeOverlay.setContent(contentNode);
                addCategoryClickEvent();



                function addEventHandle(target, type, callback) {
                    if (target.addEventListener) {
                        target.addEventListener(type, callback);
                    } else {
                        target.attachEvent('on' + type, callback);
                    }
                }
                function onClickCategory(){
                    var id = this.id,
                    className = this.className;
                    // 이부분 질문 Vue에서 this id 하면 어디꺼를 가져오는지?
                    placeOverlay.setMap(null);
                        if (className === 'on') {
                        currCategory = '';
                        changeCategoryClass();
                        removeMarker();
                    } else {
                        currCategory = id;
                        changeCategoryClass(this);
                        searchPlaces();
                    }
                }
                function changeCategoryClass(el) {
                    var children = ctx.$refs.pm;
                    children.className='';
                    if (el) {
                        el.className = 'on';
                    } 
                }
                function addCategoryClickEvent() {
                    var children = ctx.$refs.pm;
                        children.onclick = onClickCategory;
                }
                function removeMarker() {
                    for ( var i = 0; i < markers.length; i++ ) {
                        markers[i].setMap(null);
                    }   
                    markers = [];
                }
                function displayPlaceInfo (place) {
                    var content = '<div class="placeinfo">' +
                                    '   <a class="title" href="' + place.place_url + '" target="_blank" title="' + place.place_name + '">' + place.place_name + '</a>';   

                    if (place.road_address_name) {
                        content += '    <span title="' + place.road_address_name + '">' + place.road_address_name + '</span>' +
                                    '  <span class="jibun" title="' + place.address_name + '">(지번 : ' + place.address_name + ')</span>';
                    }  else {
                        content += '    <span title="' + place.address_name + '">' + place.address_name + '</span>';
                    }                
    
                    content += '    <span class="tel">' + place.phone + '</span>' + 
                                '</div>' + 
                                '<div class="after"></div>';

                    contentNode.innerHTML = content;
                    placeOverlay.setPosition(new kakao.maps.LatLng(place.y, place.x));
                    placeOverlay.setMap(map);  
                }
                function addMarker(position, order) {
                    var imageSrc = 'http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
                        imageSize = new kakao.maps.Size(27, 28),  // 마커 이미지의 크기
                        imgOptions =  {
                            spriteSize : new kakao.maps.Size(72, 208), // 스프라이트 이미지의 크기
                            spriteOrigin : new kakao.maps.Point(46, 72), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
                            offset: new kakao.maps.Point(11, 28) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
                        },
                        markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
                            marker = new kakao.maps.Marker({
                            position: position, // 마커의 위치
                            image: markerImage 
                        });

                    marker.setMap(map); // 지도 위에 마커를 표출합니다
                    markers.push(marker);  // 배열에 생성된 마커를 추가합니다

                    return marker;
                }
                function placesSearchCB(data, status, pagination) {
                    if (status === kakao.maps.services.Status.OK) {

                        //  정상적으로 검색이 완료됐으면 지도에 마커를 표출합니다
                        displayPlaces(data);
                    } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
                        // 검색결과가 없는경우 해야할 처리가 있다면 이곳에 작성해 주세요

                    } else if (status === kakao.maps.services.Status.ERROR) {
                        // 에러로 인해 검색결과가 나오지 않은 경우 해야할 처리가 있다면 이곳에 작성해 주세요
        
                    }
                }
                function displayPlaces(places) {

                    // 몇번째 카테고리가 선택되어 있는지 얻어옵니다
                    // 이 순서는 스프라이트 이미지에서의 위치를 계산하는데 사용됩니다
                    var order = document.getElementById(currCategory).getAttribute('data-order');

    

                    for ( var i=0; i<places.length; i++ ) {

                        // 마커를 생성하고 지도에 표시합니다
                            var marker = addMarker(new kakao.maps.LatLng(places[i].y, places[i].x), order);

                            // 마커와 검색결과 항목을 클릭 했을 때
                            // 장소정보를 표출하도록 클릭 이벤트를 등록합니다
                            (function(marker, place) {
                                kakao.maps.event.addListener(marker, 'click', function() {
                                    displayPlaceInfo(place);
                                });
                            })(marker, places[i]);
                    }
                }
                function searchPlaces() {
                    if (!currCategory) {
                        return;
                    }
    
                // 커스텀 오버레이를 숨깁니다 
                    placeOverlay.setMap(null);

                    // 지도에 표시되고 있는 마커를 제거합니다
                    removeMarker();
    
                    ps.categorySearch(currCategory, placesSearchCB, {useMapBounds:true}); 
                }

            },
            async btnClicked(){
                //console.log(this.address)
                var geocoder = new kakao.maps.services.Geocoder();
                var check = false;
                const ctx = this;
                await geocoder.addressSearch(this.address, function(result, status){
                    if(status===kakao.maps.services.Status.OK){
                        ctx.pos[0] = result[0].y;
                        ctx.pos[1] = result[0].x;
                        ctx.loadMap();
                    }else{
                        alert("잘못된 주소 형식입니다. 다시 입력해주세요.");
                    }
                });
                //this.loadMap();
            },
        }
    }
</script>

<style scoped>
.searchMap{
    padding: 30px 15px;
    margin-bottom: 40px;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 30px;
    background-color: #EEFDFF;
    width: 1200px;
    margin: 0 auto;
}
.searchInputSpace{
    width: 500px;
    height: 40px;
    border: 1px solid black;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 15px;
}

.SearchButton{
    width: 100px;
    height: 40px;
    border: 3px solid darkblue;
    color: white;
    margin-left: 30px;
    background-color: darkblue;
}
.SearchButton:active{
    background-color: white;
    color: black;
    border: 1px solid black;
}


.map_wrap, .map_wrap * {margin:0; padding:0;font-family:'Malgun Gothic',dotum,'돋움',sans-serif;font-size:12px;}
.map_wrap {position:relative;width:1230px;height:700px; margin: 0 auto; margin-top: 30px; margin-bottom: 30px;}
#category {position:absolute;top:10px;left:10px;border-radius: 5px; border:1px solid #909090;box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);background: #fff;overflow: hidden;z-index: 2;}
#category li {float:left;list-style: none;width:50px;border-right:1px solid #acacac;padding:6px 0;text-align: center; cursor: pointer;}
#category li.on {background: #eee;}
#category li:hover {background: #ffe6e6;border-left:1px solid #acacac;margin-left: -1px;}
#category li:last-child{margin-right:0;border-right:0;}
#category li span {display: block;margin:0 auto 3px;width:27px;height: 28px;}
#category li .category_bg {background:url(http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png) no-repeat;}
#category li .pharmacy {background-position: -10px -72px;}
#category li.on .category_bg {background-position-x:-46px;}
.placeinfo_wrap {position:absolute;bottom:28px;left:-150px;width:300px;}
.placeinfo {position:relative;width:100%;border-radius:6px;border: 1px solid #ccc;border-bottom:2px solid #ddd;padding-bottom: 10px;background: #fff;}
.placeinfo:nth-of-type(n) {border:0; box-shadow:0px 1px 2px #888;}
.placeinfo_wrap .after {content:'';position:relative;margin-left:-12px;left:50%;width:22px;height:12px;background:url('http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png')}
.placeinfo a, .placeinfo a:hover, .placeinfo a:active{color:#fff;text-decoration: none;}
.placeinfo a, .placeinfo span {display: block;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;}
.placeinfo span {margin:5px 5px 0 5px;cursor: default;font-size:13px;}
.placeinfo .title {font-weight: bold; font-size:14px;border-radius: 6px 6px 0 0;margin: -1px -1px 0 -1px;padding:10px; color: #fff;background: #d95050;background: #d95050 url(http://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png) no-repeat right 14px center;}
.placeinfo .tel {color:#0f7833;}
.placeinfo .jibun {color:#999;font-size:11px;margin-top:0;}
</style>