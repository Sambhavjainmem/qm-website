<template>

  <div id="main">
    <div class="half">
      <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item>
      <img src="../assets/logo.svg" />
      </v-carousel-item>
    </v-carousel>
  
    </div>
    <div class="half halftwo">
       <!--  TABS OPENING -->
       <div>
        <div style="width: 100%; heigh: fix-content; display: flex; justify-content: center;">
        
      <v-tabs
        v-model="tab"
        
        class="align-center"
        style="width: fit-content;align-self: center;"
        
       
      >
        <v-tab value="one" @click="()=>{one1 = true; two2=false}" :style=" one1 ? 'background-color: #7dcad1;' : 'background-color: #82d2da'">SIGN UP</v-tab>
        <v-tab value="two"  @click="()=>{one2 = true; two1=false}" :style=" two2 ? 'background-color: #7dcad1;' : 'background-color: #82d2da'" >LOGIN</v-tab>
        
      </v-tabs>
      
    </div>
      <v-card-text>
        <v-window v-model="tab" >
          <v-window-item value="one">
            <div class="card" >
                
  
            </div>
  
          
          </v-window-item>
  
          <v-window-item value="two">
            <div class="card">
  
  
  </div>
          </v-window-item>
  
         
        </v-window>
      </v-card-text>
    </div>
      <!-- ENDING TABS -->
  
    </div>
  
  
  
  
   </div>
  
  
  
  </template>
  
  <script>
  // import { onMounted } from 'vue';
  
  export default {
    name: 'LoginPage',
  
    data: () => ({
      tab: null,
        items: [
          { tab: 'SIGN UP', content: 'Tab 1 Content' },
          { tab: 'LOGIN', content: 'Tab 2 Content' },
          
          
        ],
        one1 : false,
          two2 : false,
    }),
  //  onMounted(()=>{
  //   // console.log("one two,this.one, this.two");
  //  });
  }
  </script>
  <style scoped>
  .card {
    width: 500px;
    height: 400px;
    background: #FFFFFF;
    
  
     
  }
  #main {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
  }
  .halftwo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  
  }
  .half {
    width: 50%;
    height: 100vh;
    border: 1px solid black;
  }
  img {
    width: 100%;
    height: auto;
  }
  </style>
  