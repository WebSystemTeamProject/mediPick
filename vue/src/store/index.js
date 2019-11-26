import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isHome: true,
    symptomArea: ['눈','코','입','팔'],
    symptomName: ['열','상처','골절'],
    ages: ['아기','어린이','청소년','성인','노인'],
    genders: ['남성','여성']
  },
  getters: {
    getIsHome(state) {
      return state.isHome;
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
