<template id="tem">
  <div id="tem">
    <div class="home" id="refhome">
      <v-dialog v-model="dialogs" fullscreen>
        <div style="background-color: white">
          <v-btn icon dark @click="dialogs = false" style="width: 1cm; top: ">
            <v-icon class="red--text ma-5 pa-5">mdi-close</v-icon>
          </v-btn>
          <getQuick style="height: 95vh" />
        </div>
      </v-dialog>
      <v-dialog v-model="$store.state.phonesos" fullscreen>
        <phoneSos />
      </v-dialog>
      <div class="home" id="refhome">
    
      
        <div id="divwithimg" >

          <v-carousel
         
        :show-arrows="false"
        hide-delimiters
        interval="3000"
        height="100%"
        cycle
        style="position:absolute; top: 0px; left: 0px;;"
      >
        <v-carousel-item  src="../assets/banner1.png">
        
        </v-carousel-item>
        <v-carousel-item  src="../assets/banner2.png">
        
      </v-carousel-item>
      <v-carousel-item  src="../assets/banner3.jpg">
        
      </v-carousel-item>
      </v-carousel>

















          <div class="newmain">
            <div id="store">
              <a
                href="https://play.google.com/store/apps/details?id=com.quickmechanic.unifiedmobileapp&pli=1"
                target="_blank"
                ><img
                  width="40px"
                  height="auto"
                  style="
                    display: flex;
                    margin-bottom: 2px;
                    transform: rotate(180deg);
                  "
                  src="../assets/Group 10765.png"
              /></a>
              <img
                width="40px"
                height="auto"
                style="display: flex; transform: rotate(180deg)"
                src="../assets/Group 10766.png"
              />
            </div>

            <div class="newmiddle">
              <div class="newheadder"  style="padding-top:0rem">
                A MECHANIC YOU CAN TRUST
                <div class="headertop">
                  <div class="newheaddertop">
                    One Stop for your Car Service ---Anytime Anywhere
                  </div>
                </div>
              </div>
              <div class="chipparent" style="padding-top:4rem">
                <div class="newchip">
                   <button class="cpb2" role="button" @click="goservices">
                    OUR SERVICES
                  </button>
                <!-- HTML !-->
                <!-- <button class="button-75 cpb2" role="button"><span class="text"> VALUE ADDED SERVICES</span></button> -->

                <button class="cpb2sos" role="button" @click="sosmethod">
                  SOS
                </button>
                <!-- <button
                  class="cpb2"
                  role="button"
                  style="
                    background: transparent;
                    cursor: inherit;
                    border: white;
                  "
                ></button> -->
                  


                  <!-- <v-chip
                    
                    
                    filter
                    filter-icon="mdi-minus"
                    style=" width: 191px;
                    text-align: center;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 48px;
                    padding: 8px 8px 8px 8px;
                    background: rgba(255, 255, 255, 0.6);
                    border-radius: 17px;"
                  >
                  Experienced Mechanics
                  </v-chip>


                  <v-chip
                    class="ma-0 pl-10 chipclass"
                    
                    filter
                    filter-icon="mdi-minus"
                    style=" width: 191px;
                    height: 48px;
                    padding: 8px 8px 8px 8px;
                    background: rgba(255, 255, 255, 0.6);
                    border-radius: 17px;"
                  >
                  Quality Service
                  </v-chip>

                  <v-chip
                    class="ma-0 pl-10 chipclass"
                    
                    filter
                    filter-icon="mdi-minus"
                    style=" width: 191px;
                    height: 48px;
                    padding: 8px 8px 8px 8px;
                    background: rgba(255, 255, 255, 0.6);
                    border-radius: 17px;"
                  >
                    Affordable Prices
                  </v-chip> -->
                </div>
              </div>

              <div id="svechile2">
                <!-- HTML !-->

                <!-- <button class="cpb2" role="button" @click="goservices">
                  OUR SERVICES
                </button> -->
                <!-- HTML !-->
                <!-- <button class="button-75 cpb2" role="button"><span class="text"> VALUE ADDED SERVICES</span></button> -->

                <!-- <button class="cpb2sos" role="button" @click="dialogs = true">
                  SOS
                </button> -->
                <!-- <button
                  class="cpb2"
                  role="button"
                  style="
                    background: transparent;
                    cursor: inherit;
                    border: white;
                  "
                ></button> -->
              </div>
            </div>
          </div>
        </div>
   

      <div
      class="white--text"
        style="
          width: 100%;
          height: 10px;
          position: relative;
          left: 0px;
          bottom: 45px;
          font-weight: 500;
          text-align: right;
          font-size: 20px;
          padding-right: 3rem;
          margin-bottom: 0px;
        "
      >Contact Us - +91-9667761701</div>

      <secondSection />
        <tileView/>
      <getQuick />
      

      <bottomVue />
      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
import secondSection from "./secondSection.vue";

import bottomVue from "./bottomVue";
import getQuick from "./getQuick.vue";

import tileView from './tileView.vue';
import phoneSos from './phoneSos.vue'
export default {
  name: "homePage",
  data() {
    return {
      drawer: false,
      mini: true,
      isLoggedIn: false,
      height: 0,
      width: 0,
      dialog: false,
      dialogs: false,
      

      size: 0 ,
    };

  },

  components: {
    secondSection,
    bottomVue,
    getQuick,
    tileView,
    phoneSos,
    // profileVue ,
  },
  created(){
    this.$store.state.currentPath = '/';
  },
  mounted() {
    this.size = window.innerWidth;
  },
  methods: {
    goservices() {
      let data = "All services";
      //this.$router.push({path : "/services"});
      this.$router.push({
        name: "scheduleService",
        params: { data },
      });
    },
    sosmethod(){
      if(this.size< 880){
        this.$store.state.phonesos = true;
      }
      else {
        this.dialogs = true;
      }
    }
  },
};
</script>,
 
<style scoped>
/* @media (min-height: 720px) {
  .home {
    height: 680px;
  }
  #tem {
    height: 680px;
  }
  #vsm {
  
   
    height: 720px;
  }
  .subhome {
    width: 100%;
    display: flex;
    height: 680px;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  #tem {
    display: flex;
    width: 100%;
    height: 680px;
    justify-content: center;
  }
} */
#star {
  color: goldenrod;
  width: 15px;
  height: 15px;
  margin-bottom: 0px;
}
.headertop {
  width: 100%;
  height: fit-content;
  position: absolute;
  bottom: -20px;
  left: 0px; 
  display: flex;
  justify-content: center;
  align-items: center;
}

#divwithimg {
  width: 100%;
  height: 100%;
 
  position: relative;


}

/* #tem {
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  border: 1px solid green;
} */

.cpb2sos {
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 8px;

  width: 221px;
  height: 48px;
  z-index: 5px;
}
.socl {
  color: black;
}
.cpb {
  width: auto;
  height: 48px;
  background-color: red;
  color: rgb(94, 28, 28);
  align-items: center;
  /* background-image: linear-gradient(135deg, #f34079 40%, #fc894d); */

  color: white;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 3px;

  border-radius: 10px;
}

.cpb2 {
  width: 221px;
  height: 48px;
  background-color: #d50000;
  color: #d50000;
  align-items: center;
  box-shadow: #fc894d 20px;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 3px;

  border-radius: 8px;
  justify-content: space-between;
}

option {
  font-size: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
}
#vsm {
  width: 100%;
  height: 78vh;
  display: flex;
  flex-direction: row;

  z-index: 0;
}

#store {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: calc(50% - 136px);
  left: 0px;
  width: 40px;
  height: 272px;
  z-index: 0;
  align-self: center;
}
.banner {
  width: 100%;
  height: auto;
}
/* CSS */
.button-75 {
  align-items: center;
  background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
  border: 0;
  border-radius: 10px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-family: "Codec cold", sans-serif;
  font-size: 16px;
  font-weight: 700;
  height: 54px;
  justify-content: center;
  /* letter-spacing: .4px; */
  line-height: 1;
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 3px;
  text-decoration: none;
  text-transform: uppercase;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-75:active {
  outline: 0;
}

.button-75:hover {
  outline: 0;
}

.button-75 span {
  transition: all 200ms;
}

.button-75:hover span {
  transform: scale(0.9);
  opacity: 0.75;
}

#svechile {
  width: 100%;
  height: 70px;
  border-radius: 5px;

  margin-bottom: 150px;
}
#svechile2 {
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  z-index: 1;
}

.fueltype {
  width: 150px;
  height: 100%;
  border-left: 1px solid black;
  font-size: 16px;
}
#left {
  width: 15%;
  height: 100%;

  position: relative;
  bottom: 25mm;
  margin-left: 0px;
}
#msh {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
}

#backbgtext {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  border: 1px solid balck;
}
.chipitems {
  width: auto;
  height: 30px;
  background-color: rgba(128, 128, 128, 0.445);
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  font-size: 14px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 13px;
}
#chip {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;

  z-index: 3;
  margin-bottom: 0cm;
  /* border: 1px solid black; */
  position: absolute;
  bottom: -80px;
  left: 0;
}

#mh1 {
  /* text-align: center;
  margin-bottom: 50px;
  z-index: 0;
  font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 34px;
line-height: 41px;
color: rgba(0, 0, 0, 0.87);
flex-wrap:;
padding-left: 0px;
padding-right: 0px; */

  font-size: 120px;
  z-index: 0;

  color: rgba(239, 239, 239, 0.6);

  text-align: center;

  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 41px;

  color: rgba(0, 0, 0, 0.87);
  position: relative;
  /* border: 1px solid blue;
  border-bottom: 1px solid red; */
}

#mh {
  /* text-align: center;
  margin-bottom: 50px;
  z-index: 0;
  font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 34px;
line-height: 41px;
color: rgba(0, 0, 0, 0.87);
flex-wrap:;
padding-left: 0px;
padding-right: 0px; */

  position: absolute;
  width: 100%;
  height: 300px;

  /* left: 103px;
top: 38px; */
  font-size: 120px;
  z-index: 0;

  color: rgba(239, 239, 239, 0.6);

  text-align: center;

  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 41px;

  color: rgba(0, 0, 0, 0.87);
  display: flex;
  flex-direction: column;
}
#right {
  width: 15%;
  height: 100%;
}
#middle {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-self: center;
  align-self: center;
  /* border: 1px solid black; */
}
.home {
  width: 100%;
  height: calc(82vh - 56px);
  margin-top: 60px;
  max-height: 900px;
  background: linear-gradient(180deg, #ffffff 0%, #f8f8f8 100%);
}
.subhome {
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
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
  width: fit-content;

  margin-left: -400px;

  margin-top: 90px;
  z-index: 0;
}
.footer {
  position: absolute;

  height: fit-content;

  /* bottom: 8px;
    left: 0px; */
  /* margin-top: 20px; */
  display: flex;
  flex-direction: row;

  z-index: 0;
}
.subfooter {
  margin-left: 100px;
  color: black;
  font-weight: bold;
}

@media (min-width: 1920px) {
  .home {
    width: 1920px;
  }
}

@media (max-width: 950px) {
  .sos {
    height: 100px;

    margin-top: 180px;
    margin-right: -120px;
    cursor: pointer;
    margin-left: 100px;
    z-index: 3;
  }
}

@media (max-width: 888px) {
  .home {

    margin-top: 0px;

  }
  .newheaddertop {

  font-size: 14px;

}

  .newchip {
    width: fit-content;
    height: fit-content;
    display: flex;

    flex-direction: column;


  }

  .cpb2sos {

    width: 200px;
    height: 42px;

  }

  .cpb2 {
    width: 200px;
    height: 42px;
    margin-bottom: 16px;

  }

  .newheadder {

    font-size: 1.2rem;
    line-height: 87px;

  }

  #store {
    display: none;

  }



}





@media (max-width: 845px) {
  .footer {
    display: none;
  }
}

.bgtext {
  position: absolute;
  width: 90vw;
  height: 200px;
  font-size: 155px;
  z-index: 0;

  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 500;

  line-height: 169px;

  color: rgba(239, 239, 239, 0.6);

  text-align: center;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 72px;
  left: 0px;
  /* border: 1px solid black; */
}
</style>