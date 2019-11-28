<template>
    <div class="find">
        <div id="map" ref="map" class="mapSize"></div>
    </div>
</template>



<script>
    export default {
    name: "appMap",
    mounted(){ 
            var container = this.$refs.map;
            var options = {
                center: new kakao.maps.LatLng(33.450701, 126.570667),
                level: 3
            };
            var map = new kakao.maps.Map(container, options);
        }
    }
</script>

<style scoped>

.mapSize{
    width: 70%;
    height: 40%;
}
</style>