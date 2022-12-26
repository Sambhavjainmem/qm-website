import Vue from 'vue'
import VueRouter from 'vue-router'


import homePage from '../components/homePage.vue';


import scheduleService from '../components/services/scheduleService.vue'

import SignupForm from '../components/SignupForm.vue'
import vechileInfo from '../components/vechileInfo.vue'
import dashbordVue from '../components/dashbordVue.vue'
import locationVue from '../components/locationVue.vue';
import cartVue from '../components/cartVue.vue';
import productsVue from '../components/productsVue.vue';
import newLogin from '../components/newLogin.vue';
import BookingList from '../components/BookingList.vue';
// import LoginView from '../components/LoginView.vue'
import LoginPage from '../components/LoginPage.vue'
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
    path: '/vechile',
    name: 'vechileInfo',
    component: vechileInfo,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/newLogin',
    name: 'newLogin',
    component: newLogin,
    meta: {
      requiresAuth: false
    }
  },

  
  {
    path: '/dash',
    name: 'dashbordVue',
    component: dashbordVue,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/log',
    name: 'LoginPage',
    component: LoginPage,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/products',
    name: 'productsVue',
    component: productsVue,
    meta: {
      requiresAuth: false
    }
  },

  {
    path: '/bookingList',
    name: 'bookingList',
    component: BookingList,
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
    path: '/locationVue',
    name: 'locationVue',
    component: locationVue,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/cart',
    name: 'cartVue',
    component: cartVue,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/services',
    name: 'scheduleService',
    component: scheduleService,
    meta: {
      requiresAuth: false
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
      // console.log(to);
      // console.log(from);
      // console.log(to.path);
      // console.log(to.hash);

    //   var hcondition = ((to.hash == "#someSections") || (to.hash == "#faq") || (to.hash == "#contactus"))
    // console.log(hcondition)

      // if(to.fullPath == "/#someSections" || to.fullPath == "/#someSections" || )
    // //  // console.log(this.$route.path);
    var pathr = to.path;
    var hash = to.hash;

      







    if( (pathr != '/') && ((hash == '#vas') || (hash == '#faq') ))
    {
      // console.log("error in routhgibg ")
      // this.$router.replace("/");
      next('/');
    }
else{



    next();
}
  }
})

export default router
