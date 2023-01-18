<template>
  <div class="topbottom">
    <div id="footerbanner">
      <div id="seehow">SEE HOW IT WORKS</div>
      <div id="subbottom">
        <div class="sbc">
          <div class="ytv" v-if="!ytbool">
            <v-btn elevation="2" fab icon large @click="ytbool = !ytbool"><v-icon color="white"
                x-large>mdi-play-circle</v-icon>
            </v-btn>
          </div>

          <iframe class="ytv" v-if="ytbool"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen src="https://www.youtube.com/embed/tgbNymZ7vqY">
          </iframe>
        </div>

        <div class="sbc">
          <div class="howWork">
            <div class="sw">
              <v-avatar color="grey lighten-1" size="16" class="ma-1"></v-avatar>
              Select The Perfect Car Service
            </div>
            <div class="sw">
              <v-avatar color="grey lighten-1" size="16" class="ma-1"></v-avatar>
              Schedule Free Doorestep Pickup
            </div>
            <div class="sw">
              <v-avatar color="grey lighten-1" size="16" class="ma-1"></v-avatar>
              Track Your Car Service Realtime
            </div>
            <div class="sw">
              <v-avatar color="grey lighten-1" size="16" class="ma-1"></v-avatar>
              Earn While We Service
            </div>
          </div>
        </div>

        <div class="sbc">
          <div class="howWork"></div>
        </div>
      </div>
    </div>

    <div class="bottom">



      <!-- <v-row>
          <div class="footercolumn3">
            <span
              class="footertext"
              style="padding-bottom: 10px; font-weight: 500; font-size: 25px"
              >Our Sevices
            </span>
            <span class="footertext" style="padding-bottom: 5px"
              >- Mechanic</span
            >
            <span class="footertext" style="padding-bottom: 5px"
              >- Car Checks</span
            >
            <span class="footertext" style="padding-bottom: 5px"
              >- Oil and Break Checks</span
            >
            <span class="footertext" style="padding-bottom: 5px"
              >- Breakdown Sevices</span
            >
            <span class="footertext" style="padding-bottom: 5px"
              >- Tyres Services</span
            >
            <span class="footertext" style="padding-bottom: 5px"
              >- Battery Change</span
            >
            <span class="footertext" style="padding-bottom: 5px"
              >- Online Skill Development</span
            >
          </div>

          <div class="footercolumn2">
            <span
              class="footertext"
              style="padding-bottom: 10px; font-weight: 500; font-size: 25px"
              >Opening Hours</span
            >
            <span class="footertext" style="padding-bottom: 10px"
              >Mon - Fri: 7am - 10pm</span
            >
            <span class="footertext" style="padding-bottom: 10px"></span>
            <span class="footertext" style="padding-bottom: 10px"></span>
            <span class="footertext" style="padding-bottom: 10px"></span>
            <span class="footertext" style="padding-bottom: 10px">
              <v-avatar class="ma-1" color="white" size="30"
                ><v-icon size="20">mdi-facebook</v-icon></v-avatar
              >
              <v-avatar class="ma-1" color="white" size="30"
                ><v-icon size="20">mdi-instagram</v-icon></v-avatar
              >
            </span>
          </div>

          <div class="footercolumn2">
            <span
              class="footertext"
              style="
                padding-bottom: 10px;
                font-weight: 500;
                font-size: 25px;
                text-align: start;
              "
              >Contact Us</span
            >
            <span class="footertext" style="padding-bottom: 3px; width: 30vw"
              >Omaxe NRI City Centre, 2nd Floor, Multiplex Area</span
            >
            <span class="footertext" style="padding-bottom: 3px; width: 30vw"
              >Pari Chowk, Omega II, Greater Noida,</span
            >
            <span class="footertext" style="padding-bottom: 3px; width: 30vw"
              >Gautam Buddha Nagar</span
            >
            <span class="footertext" style="padding-bottom: 3px; width: 30vw"
              >Greater Noida UP 201308 India</span
            >
            <span class="footertext" style="padding-bottom: 3px"></span>
            <span class="footertext" style="padding-bottom: 10px"></span>
            <span class="footertext" style="padding-bottom: 20px"></span>
            <span class="footertext" style="padding-bottom: 20px"></span>
            <span
              style="
                font-size: 30px;
                font-weight: 900;
                letter-spacing: 3px;
                color: #d50000;
                height: 10px;
              "
              >QUICKMECHANIC</span
            >
          </div>
        </v-row>
        <v-row> <span style="margin-top: 3vh" id="line"></span></v-row>
        <v-row>
          <span style="color: white; margin-top: 3vh; margin-bottom: 5vh"
            >QuickMechanic</span
          ></v-row > -->



      <div class="footercolumn3">
        <span class="footertexthead">Our Sevices
        </span>
        <div class="footersubtext">
          <span class="footertext">- Mechanic</span>
          <span class="footertext">- Car Checks</span>
          <span class="footertext">- Oil and Break Checks</span>
          <span class="footertext">- Breakdown Sevices</span>
          <span class="footertext">- Tyres Services</span>
          <span class="footertext">- Battery Change</span>
          <span class="footertext">- Online Skill Development</span>
        </div>
      </div>

      <div class="footercolumn2">
        <span class="footertexthead">Opening Hours</span>
        <div class="footersubtext">
          <span class="footertext">Mon - Fri: 7am - 10pm</span>
          <span class="footertext"></span>
          <span class="footertext"></span>
          <span class="footertext"></span>
          <span class="footertext">
            <v-avatar class="ma-1" color="white" size="30"><v-icon size="20">mdi-facebook</v-icon></v-avatar>
            <v-avatar class="ma-1" color="white" size="30"><v-icon size="20">mdi-instagram</v-icon></v-avatar>
          </span>
        </div>
      </div>

      <div class="footercolumn2">

        <span class="footertexthead">Contact Us</span>
        <div class="footersubtext">
          <span class="footertext">Omaxe NRI City Centre, 2nd Floor, Multiplex Area</span>
          <span class="footertext">Pari Chowk, Omega II, Greater Noida,</span>
          <span class="footertext">Gautam Buddha Nagar</span>
          <span class="footertext">Greater Noida UP 201308 India</span>
          <span class="footertext"></span>
          <span class="footertext"></span>
          <span class="footertext"></span>
          <span class="footertext"></span>


        </div>
        <span class="bottomlogoqm">QUICKMECHANIC</span>
      </div>



    </div>
    <v-row> <span  id="line"></span></v-row>
      
         
          <span id="bottomqmtext">
            QuickMechanic</span>
          
         
          
       
  </div>
</template>
<script>
export default {
  name: "bottomVue",
  data() {
    return {
      ytbool: false,
    };
  },
  components: {},
};
</script>
<style scoped>
import ' https://code.jquery.com/jquery-1.8.3.js '

#store {
  display: flex;
  flex-direction: column;
  position: static;
  top: 200px;
  left: 0px;
  width: 40px;
  height: 272px;
  z-index: 5;
  align-self: center;
}

#bottomqmtext {
  text-align: center;
justify-content: center;
display: flex;
color: white;
background-color: black;
height: -moz-fit-content;
height: fit-content;
margin: 12px;
}
.bottomlogoqm {
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: 3px;
  color: #d50000;
  height: fit-content;

  justify-self: center;
  margin: 18px;
}

.howwork {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: yellow;
}

.sw {
  margin-bottom: 23px;
  margin-left: 0vw;
}

.footersubtext {
  width: fit-content;
  display: flex;
  flex-direction: column;
}

.sbc {
  width: 30%;
  height: 100%;
  display: flex;
  margin-left: 0vw;
  padding-left: 0;
  padding-right: 0;
  margin-right: 0vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#subbottom {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: fit-content;
  width: 100%;
}

.footertexthead {
  padding-bottom: 10px;
  font-weight: 500;
  font-size: 25px;
  color: white;
  text-align: center;
}

.ytv {
  width: 280px;
  height: 200px;
  border-radius: 8px;

  display: flex;
  justify-self: center;
  align-self: center;
  margin: 10% 10%;
  background-image: url("../assets/videologo.png");
  background-origin: content-box;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  margin-left: 17vw;
  align-items: center;
}

#seehow {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 50;
  font-size: 30px;
  line-height: 58px;
  width: 100%;
  margin-top: 3rem;
  height: fit-content;
  display: flex;
  justify-content: center;
  color: rgba(0, 0, 0, 0.87);
  align-content: center;
}

#footerbanner {
  width: 100%;
  height: 425px;
  background: linear-gradient(180deg, #ffffff 0%, #efefef 100%);

  display: flex;
  flex-direction: column;
}

.fbone {
  width: 50%;
  height: 100%;

  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 5;
}

.topbottom {
  display: flex;
  flex-direction: column;
  background-color: black;
  margin-top: 40px;
  height: fit-content;
}

.bottom {
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
}

.footercolumn1 {
  display: flex;
  flex-direction: column;
  width: 33.33%;
  margin: 10px;
  margin-top: 30px;
  margin-right: 20px;
  margin-left: 60px;
  margin-bottom: 20px;
}

.footercolumn2 {
  display: flex;
  flex-direction: column;
  width: 33.33%;

  margin-top: 30px;
  align-items: center;
  margin-bottom: 20px;
}

.footercolumn3 {
  display: flex;
  flex-direction: column;
  width: 33.33%;

  margin-top: 30px;
  margin-left: 0vw;
  margin-bottom: 20px;

  align-items: center;
}

.footertext {
  display: inline-block;
  font-style: normal;
  margin-left: 20px;
  margin-right: 10px;
  margin-top: 0px;
  margin-bottom: 0px;
  color: white;
  text-align: left;
  font-weight: 400;
}

.footertextheading {
  font-size: 30px;
  margin-bottom: 25px;
  margin-left: 10px;
}

.bottomstrip {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: white;
  width: 100%;
  height: 50px;
  z-index: 5px;
}

#line {
  width: 100%;
  height: 1px;
  background-color: white;
  opacity: 0.8;
}

.logo {
  width: 45px;
  height: auto;
  display: flex;
  align-self: center;
}

.installments {
  max-width: 300px;
  margin: 5px;
}

.master {
  /* max-width: 120px; */
  max-width: 50px;
  margin: 5px;
}

#copyright {
  display: flex;
  align-items: center;
}

@media (max-width: 888px) {



  #main {
  width: 100%;
  height: 100%;
  padding-top: 56px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  -webkit-backdrop-filter: blur(24px);
  backdrop-filter: blur(24px);
}
  #subbottom :nth-child(3) {
    display: none;
  }

  .footertexthead {

  font-weight: 400;
  font-size: 16px;


}
.bottomlogoqm {
  font-size: 10px;
  font-weight: 900;

  color: #d50000;

  justify-self: center;
  margin: 0px;
    margin-top: 0px;
    margin-left: 0px;
  margin-top: 8px;
  margin-left: -24px;
}

.footertext {

  margin-left: 8px;
  margin-right: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
 
  font-weight: 300;
  font-size: 12px;
}
  #subbottom {
    width: fit-content;
  }

  .sbc {
    width: fit-content;
  }

  .sw {
    margin-bottom: 2px;
    margin-left: 1rem;

    font-size: 12px;
  }

  .ytv {
    width: 128px;
    height: 128px;
    margin: 0px;
  }

  #howwork {
    margin-bottom: 1rem;
  }

  #footerbanner {
    width: 100%;
    height: fit-content;
    background: linear-gradient(180deg, #ffffff 0%, #efefef 100%);
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
    justify-content: center;
    align-items: center;
  }


}
</style>