import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isOpen: false,
    isHome: true,
    symptoms1: ['식욕감퇴', '어지러움'],
    symptoms2: ['기침', '가래', '천식', '코감기', '재채기', '콧물', '코막힘', '눈물'],
    symptoms3: ['식욕감퇴', '식욕부진', '위부팽만감', '소화불량', '과식', '식체', '구역', '구토', '정장',
      '변비', '묽은 변', '장내이상발효', '위산과다', '속쓰림', '위부불쾌감', '체함', '위통', '신트림', '식체',
      '위체', '복통', '설사', '위하수', '위약증상', '위팽만감'],
    symptoms4: [],
    symptoms5: ['무좀', '완선', '체부백선', '고초열', '두드러기', '가려움성 피부질환', '습진', '피부염', '피부가려움증', '약물발진'],
    symptoms6: ['삠', '타박상', '근육통', '관절통', '골절통'],
    symptoms7: ['피로회복', '허약체질'],
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
