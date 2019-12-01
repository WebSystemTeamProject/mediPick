<template>
    <div class="find">
        <div class="searchMap">
            <p>약국 검색</p>
            <input v-model="address" placeholder="주소를 입력해 주세요." class="searchInputSpace">
            <button v-on:click="btnClicked" class="SearchButton">검색</button>
        </div>
        <div id="map" ref="map" class="mapSize"></div>
    </div>
</template>



<script>
import loadScriptOnce from 'load-script-once'
loadScriptOnce('//dapi.kakao.com/v2/maps/sdk.js?appkey=1b1adbf36d0ae9f7eeb8af681d1cd83c&libraries=LIBRARY');
    export default {
    name: "appMap",
    data(){
        return{
            pos: [37.282895,127.044938],
            adress: ""
        }
    },
        mounted: async function(){
            await this.loadMap();
        },
        methods:{
            loadMap(){
                var container = this.$refs.map;
                var options = {
                    center: new kakao.maps.LatLng(this.pos[0], this.pos[1]),
                    level: 4
                };
                
                var map = new kakao.maps.Map(container, options);
            },
            btnClicked(){
                //alert("click");
            }
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
.mapSize{
    width: 1230px;
    height: 700px;
    margin: 0 auto;
    margin-bottom: 30px;
    margin-top: 30px;
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
</style>