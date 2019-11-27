<template>
    <div>
        <div ref="map" class="mapSize">
        </div>
    </div>
</template>



<script>
    var container = this.$ref.map;
    var options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
    };
  
    var map = new kakao.maps.Map(container, options);
</script>

<style scope>

.mapSize{
    width: 70%;
    height: 40%;
}
</style>