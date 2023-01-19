import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    currentState:'',
    cartItems: [],
    count: "suraj",
    dialog: false,
    logindialog: false,
    vdialog: false,
    locdialog: false,
    location: "Set Location",
    uid: "",
    loginpage: false,
    customer: {},
    Vservices: [1, 3, 3],
    Sservices: [1, 2, 4],
    isCheckoutClicked: false,
    bSignupForm : false,
    vinfo: {
      brand: "Brand",
      model: "Model",
      fuel: "Fuel",
    },
    cart: false,
    phno: "",
    location1: "Get Location",
    location2: "",
    prices : {},
    serviceCategory : 'All services', 
    services: [] ,
    becomedialog: false,
    currentPath:'',
    phonesos: false,
    coordinates: {
      latitude: 0.0,
      longitude: 0.0,
     
    },
    showOrderSummary:false,
  },
  getters: {
  },
  mutations: {

    vinfo(state) {

      state.vinfo = false


    },
    VgetData(state, payload) {

      state.Vservices = payload



    }




  },
  actions: {
  },
  modules: {
  }
});

