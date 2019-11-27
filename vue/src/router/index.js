import Vue from 'vue'
import VueRouter from 'vue-router'
import appHome from '../views/mainPage/appHome'
import findPharmacy from '../views/mapPage/appMap'
Vue.use(VueRouter);

const routes = [
  {
    name: 'appHome',
    path: '/appHome',
    component: appHome
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
