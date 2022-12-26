<template>
<div class="component">





  <div class="sdimgdiv" @click="dent(item.name)" v-for="item in this.sdata" v-bind:key="item.title">
    <img class="SDImage"
          :src="item.photoURL"
     />
     <v-icon id="fav">mdi-heart-outline</v-icon>
     <div id="abc">
            <div id="line"></div>
          <div class="servtext">{{item.name}}</div>
          <div class="rat"><v-icon  class="rating">mdi-star</v-icon><v-icon class="rating">mdi-star</v-icon><v-icon class="rating">mdi-star</v-icon><v-icon class="rating">mdi-star</v-icon><v-icon class="notrating">mdi-star-outline</v-icon><v-icon  class="ratno">4.0</v-icon></div>
        </div>
    <div id="bottomrow"><div id="v" style="color:#D50000;">VIEW</div><v-btn small style="background-color:#D50000; border-radius:8px; box-shadow: none;" class=" white--text ma-0">Book Now</v-btn></div>
</div>







<!-- <div class="sdimgdiv" @click="ac" >
  <img class="SDImage"
          src="../../assets/Group 1668.jpg"
     />
     <div class="servtext">AC Service</div>
</div>
<div class="sdimgdiv" @click="wheel">
  <img class="SDImage"
          src="../../assets/Group 1520.jpg"/>
          <div class="servtext">Wheel Care</div>
</div>
<div class="sdimgdiv" @click="battry" >
  <img class="SDImage sdimgright"
          src="../../assets/Group 10800.jpg" />
          <div class="servtext">Battries</div>
</div> -->
  
   <!-- <img class="SDImage sdimgleft"
          src="../../assets/Group 1526.jpg"
/>


     <img class="SDImage"
          src="../../assets/Group 1526.jpg"
     />
     <img class="SDImage"
          src="../../assets/Group 1526.jpg"/>
     <img class="SDImage sdimgright"
          src="../../assets/Group 1526.jpg" /> -->





</div>
</template>
<script>


export default {
 name: 'componentsVue',
 data() {
    return {
      items : this.$store.state.Sservices,
    }
  }
,
props: ['sdata']
,
components: {
  
  
  },
  methods: {
    dent(cat) {

this.$router.push({ path: "/"+cat });
console.log(cat);
},
    // ac() {
    //   this.$router.push('service/1');
    // },
    // wheel() {
    //   this.$router.push('service/2');
    // },
    // battry() {
    //   this.$router.push('service/3');
    // },
    // periodic() {

    //   this.$router.push('serperiodic');
    // },
  },
  created(){

    console.log("this is data")
    console.log(this.sdata);

  }
}
</script>
<style scoped>

.ratno {
  font-size: 13px;
}
.sdimgdiv {
  width: 195PX;
  height: 280px;
  font-size: 14px;
  font-weight: 500;
  
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 8px;

  align-content: center;
  justify-content: space-between;
  /* -webkit-box-shadow: 1px 1px 5px 0px #a2958a;
  -moz-box-: 1px 1px 5px 0px #a2958a;
  box-shadow: 1px 1px 5px 0px #a2958a;  */
  border-radius: 12px;
  cursor: pointer;
  /* border: 1px solid rgb(206, 147, 147);
  border-radius: 5px; */
  /* box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.452); */
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
}
.SDImage {
  width: 128px;
  height: 128px;
  
}
.rating {

color:gold;
font-size: 15px;

}
.notrating {


font-size: 15px;
}
#fav {
  position:absolute;
  top: 8px;
  right: 8px;
  z-index: 5;
}
.rat {
  margin-left: 10px;
}
#line {
  width: 100%;
  height: 2px;
  background-color:rgba(0, 0, 0, 0.2);;
  opacity: 0.6;
  
}




.component {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;   
    z-index: 0;
    margin-top: 30PX;  
}
img {
    
    width: 85%;
    z-index: 0;
    align-self: center;
    justify-self: center;
  
}
.servtext {
  margin-left:10px; 
margin-top: 18px;

 
}
#v {
  display: flex; 
  font-size: 12px;
  font-weight: 500;
  line-height: 12.52px;
  justify-content: center;
  align-items: center;
  color: #FF3B30; 
}
#bottomrow {
  display: flex;
  flex-direction: row;
   margin-top: 8px;
   justify-content:space-between;
   
 
   align-items: center;
   align-content: center;
   margin-left: 22px;
   margin-right: 12px;
   margin-bottom: 16px;




   

}
.red {
  margin-bottom:10px;
  margin-right:3px
}
</style>

