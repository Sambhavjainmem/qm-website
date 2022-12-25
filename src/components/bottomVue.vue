<template>
  <div class="topbottom" id="bottom">
    <div id="footerbanner">
      <div id="seehow">See How it Works</div>
      <div id="subbottom">
        <div class="sbc">
          <div class="ytv" v-if="!ytbool">
            <v-btn elevation="2" fab icon large @click="ytbool = !ytbool"
              ><v-icon color="white" x-large>mdi-play-circle</v-icon>
            </v-btn>
          </div>

          <!-- <img class="ytv" v-if="!ytbool" src="../assets/videologo.png"> -->

          <iframe
            class="ytv"
            v-if="ytbool"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          >
          </iframe>

          <!-- <embed width="480" height="500" id="ytv"
src="https://www.youtube.com/embed/il_t1WVLNxk"> -->
        </div>

        <div class="sbc">
          <div class="howWork">
            <div class="sw">1. Select The Perfect Car Service</div>
            <div class="sw">2.  Schedule Free Doorestep Pickup </div>
          </div>
        </div>

        <div class="sbc">
          <div class="howWork">
          <div class="sw">3. Track Your Car Service Realtime </div>
          <div class="sw">4. Earn While We Service </div>
        </div>
        </div>
      </div>
    </div>

    <div class="bottom">
      <div class="footercolumn1" id="bottom">
        <img class="logo" src="../assets/Group_10826.png" />
      </div>

      <div class="footercolumn3">
        <span class="footertext">Phone no</span>
        <span class="footertext">Working Days</span>
        <span class="footertext">Working Days</span>
        <span class="footertext">Working Hours</span>
      </div>

      <div class="footercolumn2">
        <span class="footertext">011-278900000</span>
        <span class="footertext">Monday-Sunday</span>
        <span class="footertext">Careers</span>
        <span class="footertext">9:00 AM - 07:00 PM</span>
        <span class="footertext">help@quickmechanic.com</span>
      </div>

      <div class="footercolumn2">
        <div id="store">
          <img
            width="151px"
            style="display: flex; margin-top: 20px; margin-bottom: 10px"
            src="../assets/store.png"
          />
          <!-- <img width="151px" style="display: flex" src="../assets/Group 10766-h.jpg" /> -->
        </div>
      </div>
    </div>

    <!-- <img class ="logo" src="../assets/Group_10826.png">
        <span id="copyright">copyright © {{new Date().getFullYear()}} Quick Mechanic</span>
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
import 'https://code.jquery.com/jquery-1.8.3.js'

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
  margin-bottom: 10px;

}
.sbc {
  width: 30%;
  height: 100%;
  display: flex;
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
  align-items: center;
}
#seehow {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
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
  height: 360px;
  background: linear-gradient(180deg, #FFFFFF 0%, #EFEFEF 100%);

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
  background-color: #373434;
  margin-top: 40px;
  height: 578px;
}
.bottom {
  width: 100%;
  height: 219px;

  display: flex;
  flex-direction: row;
}

.footercolumn1 {
  display: flex;
  flex-direction: column;
  width: 25%;
  margin: 10px;
  margin-top: 40px;
}
.footercolumn2 {
  display: flex;
  flex-direction: column;
  width: 25%;
  margin: 10px;
  margin-top: 40px;
}
.footercolumn3 {
  display: flex;
  flex-direction: column;
  width: 25%;
  margin: 10px;
  margin-top: 40px;
}
.footertext {
  display: inline-block;

  margin-left: 20px;
  margin-right: 10px;
  margin-top: 0px;
  margin-bottom: 0px;
  color: white;
  font-weight: 200;
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
.logo {
  width: 60px;
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

