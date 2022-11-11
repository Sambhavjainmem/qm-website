<template>
<div>
<div class="s1">
    <div class="s1-1">
       {{summy.header}}


    </div>
    <div class="s1-2">
        <div class="s1-2-1">
            <div class="s1-2-1-1">
                 <img height="100%" class="serviceimg" src="../../assets/ac.jpg">
            </div>
            <div class="s1-2-1-2">
                <div class="s1-2-1-2-1">
                   {{summy.header2}}
                </div>
                <div class="s1-2-1-2-2">
                    {{summy.subheader}}
                </div>
            </div>
        </div>
        <div class="s1-2-2">
            <v-btn class="button flat red--text">Proceed</v-btn>
            
        </div>
        
    </div>
  
   


</div>
 <howWork /><getQuick /><bottomVue /></div>
</template>
<script>
import howWork from './howWeWork/howWork.vue'
import getQuick from '../getQuick.vue';
import bottomVue from '../bottomVue.vue';
export default {
  name: "serviceVue",
  data: () => ({
   key: "",
    summy : {
      header : "",
      header2 : "",
      subheader : "",
     

    },
    ac : {
      header : "AC Maintenance & Service",
      header2 : "AC check-up",
      subheader : "INR 699 + PART & SERVICE COST",
     

    },
    wheel: {
      header : "Wheel Care",
      header2 : "TYRE REPLACEMENT AND TYRE INSPECTION",
      subheader : "INR 699 + PART & SERVICE COST",
     

    },
    battries: {
      header : "Batteries",
      header2 : "BATTERY REPLACEMENT AND BATTERY INSPECTION",
      subheader : "INR 699 + PART & SERVICE COST",
      key: 3

    },
    danting: {
      header : "Denting And Painting",
      header2 : "Denting and Painting 2200 Per Panel",
      subheader : "",
  

    },
    spa: {
      header : "Car Spa",
      header2 : "Car Spa - Rs.999 ",
      subheader : "",
  

    },
    inspection: {
      header : "Car Inspections",
      header2 : "Car Inspections Rs.1000 Per Car",
      subheader : "",
  

    },
    //
  }),
  components: {
howWork,getQuick,bottomVue

  },
  mounted() {
    //const urlParams = new URLSearchParams(window.location.search);
   this.key = this.$route.params.id;
   if(this.key == 1){
    this.summy = this.ac;
    
   }
   if(this.key == 2){
    this.summy = this.wheel;
    
   }
   if(this.key == 3){
    this.summy = this.battries;
    
   }
   if(this.key == 4){
    this.summy = this.danting;
    
   }

   if(this.key == 5){
    this.summy = this.spa;
    
   }
   if(this.key == 6){
    this.summy = this.inspaction;
    
   }

  },
 
  
};
</script>

<style scoped>
.s1 {
  width: 100%;
  height: 300px;
margin-left: 30px;
  display: flex;
  flex-direction: column;
}
.s1-1 {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding-left: 10px;
  font-size: 29px;

}
.s1-2 {
  width: 100%;
  height: 200px;

  display: flex;
  flex-direction: row;
}
.s1-2-1 {
  width: 60%;
  height: 100%;

  display: flex;
  flex-direction: row;
}
.s1-2-2 {
  width: 40%;
  height: 100%;

  display: flex;
  position: relative;
}
.s1-2-1-1 {
  width: 40%;
  height: 100%;
}
.s1-2-1-2 {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;



}
.s1-2-1-2-1 {
  width: 100%;
  height: 50%;
  display: flex;


  align-items: center;
font-size: 25px;
}
.s1-2-1-2-2 {
  width: 100%;
  height: 50%;
  display: flex;


  font-size: 20px;
}
.button {
  
  display: flex;
 
  width: 150px;
  height: 60px;
  position: absolute;
 bottom: 10px;
  left: 5px;

  }
  .serviceimg {
   
    width: 100%;
  }

</style>
