import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isOpen: false,
    isHome: true,
    symptoms1: ['미열', '두통', '식욕감퇴', '어지러움'],
    symptoms2: ['기침', '가래', '천식', '코감기', '재채기', '콧물', '코막힘', '편도선염'],
    symptoms3: ['식욕감퇴', '위부팽만감', '소화불량', '과식', '체함', '구토', '변비',
        '묽은 변', '설사', '장내이상발효', '속쓰림', '복통'],
    symptoms4: ['간염'],
    symptoms5: ['무좀', '완선', '체부백선', '고초열', '두드러기', '습진', '피부가려움증',
        '약물발진', '여드름', '피부염'],
    symptoms6: ['삠', '타박상', '근육통', '관절통', '골절통', '화상'],
    symptoms7: ['피로회복', '자양강장', '두근거림', '불면증', '월경'],

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
    },
    getIsOpen(state) {
      return state.isOpen
    },
    getSymptoms1(state) {
      return state.symptoms1
    },
    getSymptoms2(state) {
      return state.symptoms2
    },
    getSymptoms3(state) {
      return state.symptoms3
    },
    getSymptoms4(state) {
      return state.symptoms4
    },
    getSymptoms5(state) {
      return state.symptoms5
    },
    getSymptoms6(state) {
      return state.symptoms6
    },
    getSymptoms7(state) {
      return state.symptoms7
    }
  },
  mutations: {
    setIsHome(state, bool) {
      state.isHome = bool;
    },
    toggleIsOpen(state) {
      state.isOpen = !state.isOpen;
    },
    setIsOpen(state, bool) {
      state.isOpen = bool;
    }
  },
  actions: {
  },
  modules: {
  }
})
