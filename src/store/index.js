import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    count : "suraj",
    dialog: false,
    dialog2: false,

  },
  getters: {
  },
  mutations: {

        changeDilog(state,payload){
          state.dialog = payload;
          
               
      
      }
      ,
      changeDilogState(state,payload){
        state.dialog2 = payload;
             
    
    }



  },
  actions: {
  },
  modules: {
  }
})
