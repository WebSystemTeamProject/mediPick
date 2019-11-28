import Vue from 'vue'
import VueRouter from 'vue-router'
import appHome from '../views/mainPage/appHome'
import loginPage from '../views/login/loginPage'
import signUpPage from '../views/login/signUpPage'
import findPharmacy from '../views/mapPage/appMap'
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
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
