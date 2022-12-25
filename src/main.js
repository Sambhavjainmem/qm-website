import 'mdb-vue-ui-kit/css/mdb.min.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
import { auth } from './firebase'
// import { initializeApp } from "firebase/app";
// import {getFirestore} from "firebase/firestore";
//  import { getAuth} from 'firebase/auth';
// import { getStorage } from "firebase/storage";
// // import store from './store'

Vue.prototype.$xyz = "";
Vue.config.productionTip = false
console.log("user details")
      console.log(auth.currentUser)




// const firebaseConfig = {
//   apiKey: "AIzaSyALfc-YUfV99lWXDxdyyiN42zxkBhmZW6Q",
//   authDomain: "quickmechanic-india.firebaseapp.com",
//   projectId: "quickmechanic-india",
//   storageBucket: "quickmechanic-india.appspot.com",
//   messagingSenderId: "607535478846",
//   appId: "1:607535478846:web:95fadd05590c0fffe4396f",
//   measurementId: "G-KTKJQ2ZX43"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db=getFirestore(app);
// const auth=getAuth(app);
// const storage=getStorage(app);

// const mechanics=collection(db,"mechanics");
// const sosList=collection(db,"sos");

// export {db,auth,storage};
// console.log("main page")
// console.log(auth.currentUser)



new Vue({
  router,
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
