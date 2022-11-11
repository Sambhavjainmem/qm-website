<template>
  <div class="service" id="someSections">
    <div class="SDservices">
      <span id="SDSText">Scheduled Service </span>
      <componentsVue />
    </div>

    <div class="VAservices">
      <span id="VASText">Value Added Services </span>
      <div class="VASimg">
        
        <div class="sdimgdiv" @click="dent" to="/services">

          <img class="SDImage" src="../assets/Group 1601.jpg" />
          <div class="servtext">Denting & Penting</div>
        </div>
        <div class="sdimgdiv"  @click="spa">
          <img class="SDImage" src="../assets/Group 1554.jpg" />
          <div class="servtext">Car Spa</div>
        </div>
        <div class="sdimgdiv"  @click="inspection">
          <img class="SDImage sdimgright" src="../assets/Group 10800.jpg" />
          <div class="servtext">Car Inspection</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import componentsVue from "./serviceComponents/componentsVue.vue";

export default {
  name: "servicesVue",
  data() {
    return {
      drawer: false,
      mini: true,
      isLoggedIn: false,
      height: 0,
      width: 0,
      
    };
  },
  methods: {
    dent() {
      this.$router.push({ path: '/service/4' });
     
    },
    spa() {
      this.$router.push({ path: '/service/5' });
     
    },
    inspection() {
      this.$router.push({ path: '/service/6' });
     
    },
  
  },

  components: {
    componentsVue,
  },
};
</script>
<style scoped>
.service {
  width: 65%;
  z-index: 0;

  margin-left: 0px;
  margin-top: 20px;
  margin-bottom: 200px;
  float: left;
  display: flex;
  flex-direction: column;
}
#SDSText {
  font-size: 20px;
  margin: 10px;
  padding-left:10px ;

}
#VASText {
  font-size: 20px;
  margin: 10px;
  padding-left:10px ;

}
.SDservices {
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  z-index: 0;
}
.VAservices {
  width: 100%;

  flex-direction: column;
}
.VASimg {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 20px;


  justify-content: left;
}

.sdimgdiv {
  width: 20%;

  display: flex;
  flex-direction: column;
  margin: 1%;

 
  align-content: center;
  justify-content: space-between;

}

.component {
  display: flex;
  flex-direction: row;
  width: 100%;

  justify-content: left;

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

  align-self: center;
}
</style>

