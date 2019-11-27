import Vue from 'vue'
import VueRouter from 'vue-router'
import appHome from '../views/mainPage/appHome'
import loginPage from '../views/login/loginPage'
import signUpPage from '../views/login/signUpPage'
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
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
