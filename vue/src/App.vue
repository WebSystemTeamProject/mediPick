<template>
  <div id="app">
    <div class="appHeaderHome" v-if="this.$store.getters.getIsHome">
      <app-header-home></app-header-home>
    </div>
    <app-header v-if="!this.$store.getters.getIsHome"></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import appHeaderHome from './views/mainPage/appHeaderHome'
  import appHeader from './views/mainPage/appHeader'
  import appFooter from './views/mainPage/appFooter'
  export default {
    name: "appMain",
    components: {
      'appHeaderHome': appHeaderHome,
      'appHeader': appHeader,
      'appFooter': appFooter
    },
    mounted() {
      this.$router.push({name: 'appHome'})
    }
  }
</script>


<style>
  * {
    padding: 0;
    border: 0;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
    letter-spacing: -0.025em;
  }
  li {
    list-style: none;
  }
  button {
    background: none;
    outline: none;
  }
  .appHeaderHome {
    float: left;
    width: 100%;
    padding: 0 16px;
    box-sizing: border-box;
  }
  @media(min-width: 600px) {
    .appHeaderHome {
      padding: 0 24px;
    }
  }
  @media(min-width: 1025px) {
    .appHeaderHome {
      width: 100%;
    }
  }
</style>
