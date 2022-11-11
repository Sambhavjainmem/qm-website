import Vue from 'vue'
import VueRouter from 'vue-router'


import homePage from '../components/homePage.vue';
import servicesVue from '../components/services/servicesVue.vue';
import serviceVue from '../components/services/serviceVue.vue';
import scheduleService from '../components/services/scheduleService.vue'
import contactUs from '../components/contactUs.vue';
import faqVue from '../components/faqVue.vue';
import LoginView from '../components/LoginView.vue'
import SignupForm from '../components/SignupForm.vue'
import getQuick from '../components/getQuick.vue'
import { auth } from '../firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: homePage,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/services',
    name: 'servicesVue',
    component: servicesVue,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/contactUs',
    name: 'contactUs',
    component: contactUs,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/faqVue',
    name: 'faqVue',
    component: faqVue,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/signup',
    name: 'SignupForm',
    component: SignupForm,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/service/:id',
    name: 'serviceVue',
    component: serviceVue,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/periodic',
    name: 'scheduleService',
    component: scheduleService,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/addmechanic',
    name: 'getQuick',
    component: getQuick,
    meta: {
      requiresAuth: true
    }
  },


 
 
  
 

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  const requiressAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = auth.currentUser;

  if (requiressAuth && !isAuthenticated) {
    next('/login');
  }
  else {
    next();
  }
})

export default router
