import Vue from 'vue'
import VueRouter from 'vue-router'
import appHome from '../views/mainPage/appHome'
Vue.use(VueRouter);

const routes = [
  {
    name: 'appHome',
    path: '/appHome',
    component: appHome
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
