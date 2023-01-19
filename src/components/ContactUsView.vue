<template >
  <div style="height: 30rem; width: 100%; margin-top: 4rem">
    <v-row class="ContactUsImageCss">
     
      
      <div  style="margin: 0%; padding: 0px">
        <v-row style="margin-top: 4rem">
          <div id="contactus">
            Contact Us
          </div>
        </v-row>
      </div>
    </v-row>
    <div
      style="
        height: 15rem;
        background-color: #eeeeee;
        padding-top: 3rem;
        margin: 0%;
      "
      id="infopage"
    >
  
      <div class="hideitem needwidth" >
        <div
        class="contacttitle"
        >
          Call us
        </div>
        <div class="description">
          Tel: +91 9667761701 contactus@quickmechanic.co.in
        </div>
      </div>





      <div class="needwidth" >
        <div
         class="contacttitle"
        >
          Visit Us
        </div>
        <div class="description">
          Omaxe NRI City Centre, 2nd Floor, Multiplex Area Pari Chowk, Omega II,
          Greater Noida, Gautam Buddha Nagar Greater Noida UP 201308 India
        </div>
      </div>




      <div  class="needwidth" >
        <div
        class="contacttitle"
        >
          Opening Hours
        </div>
        <div class="description">Mon - Fri: 7am - 10pm</div>

        <div
        class="contacttitle lastcallus "
        >
          Call us
        </div>
        <div class="description">
          Tel: +91 9667761701 contactus@quickmechanic.co.in
        </div>
      </div>




      <div  id="hideitem"></div>





    </div>
    <bottomVue />
  </div>
</template>

<script>
import bottomVue from "./bottomVue";

export default {
  name: "ContactUsView",
  data() {
    return {};
  },
  components: {
    bottomVue,

    // profileVue ,
  },
  created() {
    this.$store.state.currentPath = "/contactusView";
  },
};
</script>

<style>
.ContactUsImageCss {
  height: 15rem;
  margin: 0px;
  background: url("../assets/contactusBanner.jpg");
  background-size: cover;
}
.lastcallus {
  display: none;


}
#contactus {
              font-size: 72px;
              font-weight: 700;
              font-family: Arial, Helvetica, sans-serif;
              color: white;
              text-align: center;
}
.contacttitle {
            text-align: center;
            font-size: 30px;
            font-weight: bolder;
            margin-bottom: 1rem;
}

#infopage {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  
}
.needwidth {
  width: 25%;
}

.description {
  text-align: center;
}
@media (max-width: 887px) {
  #contactus {
    font-size: 48px;
  }
  .hideitem {
    display: none;
  }
  .lastcallus {
  display: flex;
  width: 100%;
  text-align: center;
  justify-content: center;
}
.needwidth {
  width: 50%;
}

.contacttitle {
  text-align: center;
  font-size: 18px;
  font-weight: bolder;
  margin-bottom: 8px;
}
.description {

  font-size: 12px;
}
#infopage {
 padding: 4px;
  
}
}

</style>