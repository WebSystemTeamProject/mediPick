<template>
  <div class="menu">
    <ul>
      <li @click="goHome">Home</li>
      <li @click="goNav('searchMedicine')">의약품 검색</li>
      <li @click="goNav('searchPharmacy')">제약사 검색</li>
      <li @click="goNav('findPharmacy')">약국 찾기</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "appMenu",
        data() {
          return  {

          }
        },
      methods: {
        goHome() {
          if(this.$store.getters.getIsHome) {
            return false;
          } else {
            this.$router.push({name: 'appHome'});
            this.$store.commit('setIsOpen', false);
          }
        },
        goNav(nav) {
          this.$router.push({name: nav});
          this.$store.commit('setIsHome', false);
          this.$store.commit('setIsOpen', false);
        },
      }
    }
</script>

<style scoped>
  .menu {
    width: 300px;
  }
  li {
    margin: 20px 0;
  }
</style>
