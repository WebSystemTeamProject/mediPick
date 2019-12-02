import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isHome: true,
    symptomArea: ['눈','코','입','팔'],
    symptomName: ['열','상처','골절'],
    ages: ['아기','어린이','청소년','성인','노인'],
    genders: ['남성','여성'],
    pharmacy: [
      {
        imgSrc: '/images/ildong.png',
        name: '일동제약'
      },
      {
        imgSrc: '/images/dongkook.png',
        name: '동국제약'
      },
      {
        imgSrc: '/images/dongkook.png',
        name: '동국제약'
      },
      {
        imgSrc: '/images/dongkook.png',
        name: '동국제약'
      }
    ]
  },
  getters: {
    getIsHome(state) {
      return state.isHome;
    },
    getPharmacy(state) {
      return state.pharmacy
    }
  },
  mutations: {
    setIsHome(state, bool) {
      state.isHome = bool;
    }
  },
  actions: {
  },
  modules: {
  }
})
