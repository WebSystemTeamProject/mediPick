<template>
    <div class="find">
        <div class="searchMap">
        </div>
        <div id="map" ref="map" class="mapSize"></div>
    </div>
</template>



<script>
import loadScriptOnce from 'load-script-once'
loadScriptOnce('//dapi.kakao.com/v2/maps/sdk.js?appkey=1b1adbf36d0ae9f7eeb8af681d1cd83c&libraries=LIBRARY');
    export default {
    name: "appMap",
        mounted: async function(){
            await this.loadMap();
        },
        methods:{
            loadMap(){
                var container = this.$refs.map;
                var options = {
                    center: new kakao.maps.LatLng(37.282895, 127.044938),
                    level: 3
                };
                
                var map = new kakao.maps.Map(container, options);
            }
        }
    }
</script>

<style scoped>
.searchMap{
    height:300px;
}
.mapSize{
    width: 700px;
    height: 700px;
    margin: 0 auto;
}
</style>