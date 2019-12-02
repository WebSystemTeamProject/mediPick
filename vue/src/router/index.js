import Vue from 'vue'
import VueRouter from 'vue-router'
import appHome from '../views/mainPage/appHome'
import loginPage from '../views/login/loginPage'
import signUpPage from '../views/login/signUpPage'
import findPharmacy from '../views/mapPage/appMap'
import searchPharmacy from '../views/searchPharmacyPage/searchPharmacy'
import rankingPage from '../views/searchPharmacyPage/rankingPage'
import searchMedicine from "../views/searchMedicinePage/searchMedicine";
Vue.use(VueRouter);

const routes = [
  {
    name: 'appHome',
    path: '/appHome',
    component: appHome
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
    name: 'searchPharmacy',
    path: '/searchPharmacy',
    component: searchPharmacy
  },
  {
    name: 'rankingPage',
    path: '/rankingPage',
    component: rankingPage
  }

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
