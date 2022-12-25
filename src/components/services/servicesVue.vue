<template>

   
<div>
<div class="servicenavigationbar"  >
\
    <v-btn  text to="/"  >Service </v-btn>
    <v-btn  text to="/service/1"  >AC Services </v-btn>
    <v-btn  text to="/service/2"  >Wheel Care</v-btn>
    <v-btn  text to="/service/3"  >Batteries </v-btn>
    <v-btn  text to="/service/4"  >Denting & Penting </v-btn>
    <v-btn  text to="/service/5"  >Car Spa </v-btn>
    <v-btn  text to="/service/6"  >Car Inspection </v-btn>
    
        <!-- <div class="navbtn"> Service </div>
        <div class="navbtn">AC Services  </div>
        <div class="navbtn">Wheel Care  </div>
        <div class="navbtn">Batteries  </div>
        <div class="navbtn">Denting & Penting </div>
        <div class="navbtn">Car Spa </div>
        <div class="navbtn">Car Inspection </div> -->



</div>

<scheduleService />

</div>

</template>
<script>

import ScheduleService from './scheduleService.vue'


export default {
 name: 'servicesVue',
 components: {
  
  ScheduleService,


  
  },

}


</script>

<style scoped>
.servicenavigationbar {
    width: 100%;
    height: 80px;
   
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;


}
.navbtn {
    padding-top: 10px;
     padding-bottom: 10px;
    
    cursor: pointer;
    display: inline-block;
     display: flex;
     justify-items: center;
     align-items: center;
   
     width: 14%;

} 

.navbtn:hover
{
   font-size: 20px;
 

}
.layer1 {
    width: 100%;
    height: 500px;
   
    display: flex;
    flex-direction: row;
}

.layer1-1 {
    width: 70%;
    height: 100%;
  
    display: flex;
    flex-direction: column;
}

.layer1-2 {
    width: 30%;
    height: 100%;
 
    display: flex;
    flex-direction: column;
    align-items: center;
}

.layer1-1-1 {
    height: 20%;
    width: 100%;

    font-size: 40px;
    align-content: center;
    align-items: center;
    display: flex;
    margin-left: 10px;

}
.layer1-1-2 {
    height: 60%;
    width: 100%;

    display: flex;
    flex-direction: row;
    
}
.layer1-1-3 {
    height: 10%;
    width: 100%;
 
    display: flex;
    flex-direction: row;
    position: relative;
    
}
.layer1-1-2-1 {
    width: 30%;
 
    height: 100%;
}
.layer1-1-2-2 {
    width: 35%;

    height: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
}
.layer1-1-2-3 {
    width: 35%;

    height: 100%;
     display: flex;
    flex-direction: column;
}
.layer1-1-2-2-1{
    width: 100%;
    height: 20%;

    font-size:29px;
    padding-left: 10px;

}
.layer1-1-2-2-2{
    width: 100%;
    height: 80%;

    display: flex;
    flex-direction: column;

}

.layer1-2-1 {
    width: 90%;
    height: 70px;

    margin-top: 20px;
     border: 1px solid black;
     border-left-style: hidden;
     border-right-style: hidden;
    
}

.layer1-2-2 {
    width: 90%;
    height: 70px;

    margin-top: 20px;
     border: 1px solid black;
     border-left-style: hidden;
     border-right-style: hidden;
    
}

.layer1-2-3 {
    width: 90%;
    height: 70px;

    margin-top: 20px;
     border: 1px solid black;
     border-left-style: hidden;
     border-right-style: hidden;
    
}
.serviceimg {
    width: 100%;
    height: 100%;
}
.servicedesc {
    font-size: 15px;
}
.layer1-1-2-3-1 {
    display: flex;
    flex-direction: row;
   
    width:100%;
    height: 20%;
}
.layer1-1-2-3-1-1 {
    width: 50%;
    height: 100%;
   
    display: flex;
    justify-content: center;
    justify-self: center;
    align-items: center;
    align-content: center;
}
.layer1-1-2-3-1-2 {
    width: 50%;
    height: 100%;
  
     display: flex;
    justify-content: center;
    justify-self: center;
    align-items: center;
    align-content: center;
}
.layer1-1-2-3-2 {
    display: flex;
    flex-direction: column;
  
    width:100%;
    height: 80%;
}
.layer1-1-3-1 {
   width: 30%;
  
   height: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   padding: 10px;
}
.layer1-1-3-2 {
   width: 70%;
 
   height: 100%;
   display: flex;
   justify-items: center;
}
.button {
  
  display: flex;
 
  width: 150px;
  height: 60px;
  position: absolute;
  top: 5px;
  right: 5px;

  }



.button2:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}


</style>
