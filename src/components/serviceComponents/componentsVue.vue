<template>
<div class="component">





  <div class="sdimgdiv" @click="periodic">
    <img class="SDImage"
          src="../../assets/Group 1526.jpg"/>
    <div class="servtext">Periodic services</div>
</div>







<div class="sdimgdiv" @click="ac" >
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
</div>
  
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

components: {
  
  
  },
  methods: {
    ac() {
      this.$router.push('service/1');
    },
    wheel() {
      this.$router.push('service/2');
    },
    battry() {
      this.$router.push('service/3');
    },
    periodic() {

      this.$router.push('periodic');
    },
  },
}
</script>
<style scoped>

.sdimgdiv {
  width: 20%;

  display: flex;
  flex-direction: column;
  margin: 1%;

  align-content: left;
  justify-content: space-between;
 
}



.component {
    display: flex;
    flex-direction: row;
    width: 100%;
  

    justify-content: center;
   
    
    z-index: 0;
   
}
img {
    
    width: 85%;
    z-index: 0;
    align-self: center;
    justify-self: center;
  
}
.servtext {
position: fix;

 align-self:center;
 padding-left:10px ;

 
}

</style>

