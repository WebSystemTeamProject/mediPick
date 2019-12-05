import Vue from 'vue'
import VueRouter from 'vue-router'
import appHome from '../views/mainPage/appHome'
import loginPage from '../views/login/loginPage'
import signUpPage from '../views/login/signUpPage'
import findPharmacy from '../views/mapPage/appMap'
import searchPharmacy from '../views/searchPharmacyPage/searchPharmacy'
import rankingPage from '../views/searchPharmacyPage/rankingPage'
import searchMedicine from "../views/searchMedicinePage/searchMedicine"
import medicineInfo from '../views/searchPharmacyPage/medicineInfo'
import searchSymptoms from "../views/searchMedicinePage/searchSymptoms";
import MdsForSymp from "../views/searchMedicinePage/MdsForSymp";
import mdsNameSearch from "../views/mainPage/mdsNameSearch";

Vue.use(VueRouter);

const routes = [
  {
    name: 'appHome',
    path: '/appHome',
    component: appHome
  },
  {
    name: 'mdsNameSearch',
    path: '/:mdsName',
    component: mdsNameSearch
  },
  {
    name: 'loginPage',
    path: '/loginPage',
    component: loginPage
  },
  {
    name: 'signUpPage',
    path: '/signUpPage',
    component: signUpPage
  },
  {
    name: 'findPharmacy',
    path: '/findPharmacy',
    component: findPharmacy
  },
  {
    name: 'searchMedicine',
    path: '/searchMedicine',
    component: searchMedicine
  },
  {
    name: 'searchSymptoms',
    path: '/searchMedicine/:part',
    component: searchSymptoms
  },
  {
    name: 'MdsForSymp',
    path: '/searchMedicine/symptom/:symp',
    component: MdsForSymp
  },
  {
    name: 'searchPharmacy',
    path: '/searchPharmacy',
    component: searchPharmacy
  },
  {
    name: 'rankingPage',
    path: '/rankingPage',
    component: rankingPage
  },
  {
    name: 'medicineInfo',
    path: '/medicineInfo',
    component: medicineInfo
  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
