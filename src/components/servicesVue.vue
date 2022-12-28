<template>
  <div class="service">
    <div class="SDservices">
      <div id="SDSText">SERVICES WE OFFER</div>
      <!-- <componentsVue :sdata="sservice" /> -->
    </div>

    <div class="VAservices">
      <div class="VASimg">
        <div
          class="sdimgdiv"
          v-for="item in this.sservice"
          v-bind:key="item.title"
          @click="dent(item.name)"
        >
          <!-- <v-icon id="fav">mdi-heart-outline</v-icon> -->
          <img class="SDImage" :src="item.photoURL" />

          <div id="abc">
            <div id="line"></div>
            <div class="servtext">{{ item.name }}</div>
            <!-- <div class="rat">
              <v-icon class="rating">mdi-star</v-icon
              ><v-icon class="rating">mdi-star</v-icon
              ><v-icon class="rating">mdi-star</v-icon
              ><v-icon class="rating">mdi-star</v-icon
              ><v-icon class="notrating">mdi-star-outline</v-icon
              ><v-icon class="ratno">4.0</v-icon>
            </div> -->
          </div>

          <div id="bottomrow">
            <!-- <div id="v" style="color: #d50000">VIEW</div>
            <v-btn
              style="background-color: #d50000; border-radius: 8px"
              small
              class="white--text ma-0"
              >Book Now</v-btn
            > -->
          </div>
        </div>
      </div>

      <div class="VASimg">
        <div
          class="sdimgdiv"
          v-for="item in this.vservice"
          v-bind:key="item.title"
          @click="dent(item.name)"
        >
          <!-- <v-icon id="fav">mdi-heart-outline</v-icon> -->
          <img class="SDImage" :src="item.photoURL" />

          <div id="abc">
            <div id="line"></div>
            <div class="servtext">{{ item.name }}</div>
            <!-- <div class="rat">
              <v-icon class="rating">mdi-star</v-icon
              ><v-icon class="rating">mdi-star</v-icon
              ><v-icon class="rating">mdi-star</v-icon
              ><v-icon class="rating">mdi-star</v-icon
              ><v-icon class="notrating">mdi-star-outline</v-icon
              ><v-icon class="ratno">4.0</v-icon>
            </div> -->
          </div>

          <div id="bottomrow">
            <!-- <div id="v" style="color: #d50000">VIEW</div>
            <v-btn
              style="background-color: #d50000; border-radius: 8px"
              small
              class="white--text ma-0"
              >Book Now</v-btn
            > -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//import componentsVue from "./serviceComponents/componentsVue.vue";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default {
  name: "servicesVue",
  data() {
    return {
      drawer: false,
      mini: true,
      height: 0,
      width: 0,
      sservice: [],
      vservice: [],
    };
  },
  created() {
    this.firebaseData();
  },
  methods: {
    async firebaseData() {
      let items = [];
      const querySnapshot = await getDocs(collection(db, "categories"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        items.push(doc.data());
      });
      this.sservice = items.filter((item) => item.type == "Scheduled Services");
      this.vservice = items.filter(
        (item) => item.type == "Value Added Services"
      );
    },

    dent(data) {
      // this.$router.push({path : "/services"});
      console.log(data);
      this.$router.push({
        name: "scheduleService",
        params: { data },
      });
    },
    // spa() {
    //   this.$router.push({ path: "/service/5" });
    // },
    // inspection() {
    //   this.$router.push({ path: "/service/6" });
    // },
  },
};
</script>
<style scoped>
.ratno {
  font-size: 13px;
}

#fav {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 5;
}
.rat {
  margin-left: 10px;
  margin-top: 4px;
}
#line {
  width: 100%;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0.6;
}
.red {
  margin-bottom: 10px;
  margin-right: 3px;
}
.service {
  width: 100%;
  z-index: 0;
  margin: 0px 30%;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#SDSText {
  font-size: 34px;
  font-weight: 400;
  margin: 30px;
  padding-left: 10px;
  margin-top: "30px";
  margin-bottom: "20px";
  font-weight: 400;
}
#VASText {
  font-size: 20px;
  margin: 10px;
  padding-left: 10px;
  border: 1px solid black;
}
.SDservices {
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  z-index: 0;
  align-items: center;
  justify-content: center;
}
.VAservices {
  width: 100%;

  flex-direction: column;
}
.VASimg {
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  margin-right: 30px;
  justify-content: left;
  cursor: pointer;
}

.sdimgdiv {
  width: 195px;
  height: 300px;
  font-size: 14px;
  font-weight: 500;
  position: relative;
  display: flex;
  flex-direction: column;

  margin: 8px;
  margin-right: 20px;
  align-content: center;
  justify-content: space-between;
  /* -webkit-box-shadow: 1px 1px 5px 0px #a2958a;
  -moz-box-shadow: 1px 1px 5px 0px #a2958a;
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
  margin-left: 10px;
  margin-top: 18px;
}
#v {
  display: flex;
  text-align: center;

  margin-right: 20px;

  align-items: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 12.52px;
  color: #ff3b30;
}
#bottomrow {
  display: flex;
  flex-direction: row;
  margin-top: 0px;
  justify-content: space-between;
  margin-left: 22px;
  margin-right: 22px;
  margin-bottom: 16px;
}
.rating {
  color: gold;
  font-size: 15px;
}
.notrating {
  font-size: 15px;
}
</style>