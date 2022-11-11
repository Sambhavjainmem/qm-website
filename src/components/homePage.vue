<template>
<div class="home">
    <div class="subhome">
<div class="sos">
      <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
         <v-img 
       v-bind="attrs"
          v-on="on"
      src="../assets/SOS-removebg.png"></v-img>
      </template>
      
      <v-card>
       
       <v-btn
         icon
         dark
         @click="dialog = false"
       >
         <v-icon class="black--text">mdi-close</v-icon>
       </v-btn>
      
      
  
    
       <getQuick />
           
    
   </v-card>
 </v-dialog>
</div>
   
    <img class="ford" src="../assets/ford_ecosport2018_blue.png">
     <img class ="sos2" src="../assets/SOS-removebg.png">
    </div>
   
<div class="footer">
    





<span class="subfooter">We are in Social</span><span class="subfooter" ><v-icon>mdi-facebook</v-icon><v-icon >mdi-twitter</v-icon><v-icon>mdi-youtube</v-icon><v-icon>mdi-instagram</v-icon><v-icon>mdi-linkedin</v-icon></span><span class="subfooter">4.5<v-icon>mdi-star</v-icon>  2,000+ Google ratings </span>


</div>
<secondSection />
<whyYou />
<getQuick />
<chooseBest />
<MechanicsTeam />
 <bottomVue />
 <vechile-info />

 

 
  
  



</div>

</template>
<script>
import './homepage.css';

import secondSection from './secondSection.vue';
import whyYou from './whyYou.vue';

import bottomVue from './bottomVue';
import getQuick from './getQuick.vue';
import chooseBest from './chooseBest.vue'

 import MechanicsTeam from './MechanicsTeam.vue';
import VechileInfo from './vechileInfo.vue';

 

export default {
 name: 'homePage',
 data() {
    return {
      drawer: false,
      mini: true,
      isLoggedIn: false,
      height: 0,
      width: 0,
      dialog : false,
     
    };
  },

 components: {
    secondSection,
    whyYou,

  
  bottomVue,
  getQuick,
  chooseBest,

 
   MechanicsTeam,
  VechileInfo,

  

  
  },

}
</script>,
 
<style scoped>
.home{
   
    width: 100%;
    height: calc(100%-200px);
    
 
  
   
}
.subhome{
    width: 100%;
    display: flex;
    justify-content: space-around; 
    
 }
.sos {
   
    float: left;
   
    cursor: pointer;
    margin-left: 100px; 
    align-self: center;
   
    justify-self: center;

}
.sos2 {
    display: none;
   height: 150px;
    float: left;
   
    cursor: pointer;
    margin-left: 100px; 
    align-self: center;

}

.ford {
    width: 800px;
    float: right;
    margin-right: -250px;
      align-self: center;
       margin-top: 110px;

}
.footer {
    position: relative;
   
    height: 40px;
    /* bottom: 8px;
    left: 0px; */
    margin-top: 50px;
}
.subfooter {
    margin-left: 100px;
}
  @media (max-width: 950px){
    .sos {
   height: 100px;
  
    margin-top: 180px;
    margin-right: -120px;
    cursor: pointer;
    margin-left: 100px; 

}

  }

@media (max-width: 888px){

    .subhome{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content:start; 
        flex-wrap: wrap; 
        }
      .sos {
            display: none;  

         }
      .sos2 {
          display:list-item; 
        
          margin-top: 0px;
          cursor: pointer;
          margin-left: 0px; 
          align-self: center;
          margin-top:-80px;
          height: 100px;
        }
     }


      @media (max-width: 845px){
            .footer{
              display: none;
            }
      }
</style>

