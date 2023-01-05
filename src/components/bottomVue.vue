<template>
  <div class="topbottom">
    <div id="footerbanner">
      <div id="seehow">SEE HOW IT WORKS</div>
      <div id="subbottom">
        <div class="sbc">
          <div class="ytv" v-if="!ytbool">
            <v-btn elevation="2" fab icon large @click="ytbool = !ytbool"
              ><v-icon color="white" x-large>mdi-play-circle</v-icon>
            </v-btn>
          </div>

          <iframe
            class="ytv"
            v-if="ytbool"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          >
          </iframe>
        </div>

        <div class="sbc">
          <div class="howWork">
            <div class="sw">
              <v-avatar
                color="grey lighten-1"
                size="16"
                class="ma-1"
              ></v-avatar>
              Select The Perfect Car Service
            </div>
            <div class="sw">
              <v-avatar
                color="grey lighten-1"
                size="16"
                class="ma-1"
              ></v-avatar>
              Schedule Free Doorestep Pickup
            </div>
            <div class="sw">
              <v-avatar
                color="grey lighten-1"
                size="16"
                class="ma-1"
              ></v-avatar>
              Track Your Car Service Realtime
            </div>
            <div class="sw">
              <v-avatar
                color="grey lighten-1"
                size="16"
                class="ma-1"
              ></v-avatar>
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
      <!-- <div class="footercolumn1" id="bottom">
        <img class="logo" src="../assets/Group_10826.png" />
        <span
          class="footertext"
          style="height: auto; display: flex; margin-left: 120px"
          ><b style="font-weight: bolder">Company Address</b></span
        >
        <span
          class="footertext"
          style="
            font-size: 11px;
            width: 180px;
            height: auto;
            display: flex;
            margin-left: 120px;
          "
          >Omaxe NRI City Centre, 2nd Floor, Multiplex Area Pari Chowk, Omega
          II, Greater Noida, Greater Noida UP 201308 India</span
        >
        <span
          class="footertext"
          style="
            font-size: 12px;
            width: 120px;
            height: auto;
            display: flex;
            margin-left: 120px;
            margin-top: 10px;
          "
        >
          Follow us</span
        >
        <span
          class="footertext"
          style="width: 120px; height: auto; display: flex; margin-left: 115px"
          ><v-avatar class="ma-1" color="white" size="20"
            ><v-icon size="15">mdi-facebook</v-icon></v-avatar
          >
          <v-avatar class="ma-1" color="white" size="20"
            ><v-icon size="15">mdi-instagram</v-icon></v-avatar
          >
          <v-avatar class="ma-1" color="white" size="20"
            ><v-icon size="15">mdi-twitter</v-icon></v-avatar
          >
          <v-avatar class="ma-1" color="white" size="20"
            ><v-icon size="15">mdi-youtube</v-icon></v-avatar
          >
          <v-avatar class="ma-1" color="white" size="20"
            ><v-icon size="15">mdi-whatsapp</v-icon></v-avatar
          >
          <v-avatar class="ma-1" color="white" size="20"
            ><v-icon size="15">mdi-linkedin</v-icon></v-avatar
          >
        </span>
      </div> -->

      <v-container
        style="margin-left: 10vw; margin-top: 6vh; text-align: center"
      >
        <v-row>
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
          ></v-row
        >
      </v-container>

      <!-- <div class="footercolumn2">
        <div id="store">
          <img
            width="151px"
            style="display: flex; margin-top: 20px; margin-bottom: 10px"
            src="../assets/store.png"
          />
          <img width="151px" style="display: flex" src="../assets/Group 10766-h.jpg" />
        </div>
      </div> -->
    </div>

    <!-- <img class ="logo" src="../assets/Group_10826.png">
        <span id="copyright">copyright ©️ {{new Date().getFullYear()}} Quick Mechanic</span>
        <div>
            <img class ="master" src="../assets/visa.png">
            <img class ="master" src="../assets/master.png">
            <img class ="installments" src="../assets/installents.png">
            </div>  -->
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
  height: 900px;
}
.bottom {
  width: 100%;
  height: 465px;
  display: flex;
  flex-direction: row;
}

.footercolumn1 {
  display: flex;
  flex-direction: column;
  width: 25%;
  margin: 10px;
  margin-top: 30px;
  margin-right: 20px;
  margin-left: 60px;
  margin-bottom: 20px;
}
.footercolumn2 {
  display: flex;
  flex-direction: column;
  width: 25%;

  margin-top: 30px;
  margin-left: 5vw;
  margin-bottom: 20px;
}
.footercolumn3 {
  display: flex;
  flex-direction: column;
  width: 25%;
  margin: 10px;
  margin-top: 30px;
  margin-left: 0vw;
  margin-bottom: 20px;
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
</style>