<template>
  <div>
    <div class="layer1">
      <v-dialog
        v-model="this.$store.state.dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <v-card>
          <v-btn icon dark @click="dialogs = false"> </v-btn>

          <vechileInfo />
        </v-card>
      </v-dialog>

      <div class="layer1-1">
        <div class="layer1-1-1">
          {{ data[0].title }}
        </div>
        <div class="layer1-1-2">
          <div class="layer1-1-2-1">
            <img class="serviceimg" :src="data[0].thumbnail" />
          </div>
          <div class="layer1-1-2-2">
            <div class="layer1-1-2-2-1"></div>
            <div class="layer1-1-2-2-2">
              <div
                v-for="(item, i) in data[0].description"
                :key="i"
                class="servicedesc"
              >
                <v-icon class="green--text">mdi-check-decagram</v-icon
                >{{ item }}
              </div>
              <!-- <div class="servicedesc"><v-icon class="green--text">mdi-check-decagram</v-icon>Engine Oil change </div>
                    <div class="servicedesc"><v-icon class="green--text">mdi-check-decagram</v-icon>Air Filter cleaning </div>
                    <div class="servicedesc"><v-icon class="green--text">mdi-check-decagram</v-icon> Heater & Spark Plugs Checking</div>
                    <div class="servicedesc"><v-icon class="green--text">mdi-check-decagram</v-icon>Interior Vacuuming ( Carpet & seats ) </div>
             -->
            </div>
          </div>
          <div class="layer1-1-2-3">
            <div class="layer1-1-2-3-1">
              <!-- <div class="layer1-1-2-3-1-1">

                            <v-icon>mdi-clock-time-five</v-icon>Take 5 Hours
                        </div>
                        <div class="layer1-1-2-3-1-2">
                            <v-icon>mdi-check-decagram</v-icon>Free Pickup
and Drop

                        </div> -->
            </div>
            <!-- <div class="layer1-1-2-3-2">
                        <span class="servicedesc"><v-icon class="green--text">mdi-check-decagram</v-icon>RECOMMANDED EVERY 10000 KMs </span>
                        <span class="servicedesc"><v-icon class="green--text" >mdi-check-decagram</v-icon>Engine Oil change </span>
                        <span class="servicedesc"><v-icon class="green--text">mdi-check-decagram</v-icon>Air Filter cleaning </span>
                        <span class="servicedesc"><v-icon class="green--text">mdi-check-decagram</v-icon> Heater & Spark Plugs Checking</span>
                        <span class="servicedesc"><v-icon class="green--text">mdi-check-decagram</v-icon>Interior Vacuuming ( Carpet & seats ) </span>
                    </div> -->
          </div>
        </div>
        <div class="layer1-1-3">
          <div class="layer1-1-3-1">
            <div style="font-size: 18px">
              <del>Rs: {{ (data[0].price * 110) / 100 }}</del>
            </div>
            <div>Rs: {{ data[0].price }}</div>
          </div>
          <div class="layer1-1-3-2">
            <!-- <button class="button button2">Add to cart</button> -->
            <!-- <v-btn class="button flat red--text">Add to cart</v-btn> -->
          </div>
        </div>
        <div id="divbutton"><v-btn class="red white--text">Proceed</v-btn></div>
      </div>
      <div class="layer1-2">
        <!-- <div class="layer1-2-1">
            <span>Select Car Manufacturer</span>

        </div>
        <div class="layer1-2-2">

            <span>Select Car Model</span>
        </div>
        <div class="layer1-2-3">
                <span>Select Car Fuel</span>

        </div> -->
      </div>
    </div>

    <how-work />
    <get-quick />
    <bottom-vue />
  </div>
</template>
    <script>
import howWork from "./services/howWeWork/howWork.vue";

import bottomVue from './bottomVue.vue';
import vechileInfo from "./vechileInfo.vue"
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default {
  name: "checkOut",
  data() {
    return {
      dialogs: false,
      key: this.$route.params.id,
      data: [],
    };
  },

  components: {
    howWork,
    bottomVue,
    vechileInfo,
  },
  mounted() {
    this.dialogs = true;

    // To apply the default browser preference instead of explicitly setting it.
    // firebase.auth().useDeviceLanguage();
  },
  created() {
    this.firebaseData();
    // console.log(this.key)
    this.dialogs = true;
    //  console.log("********************")
    //     console.log(this.data)
    //     console.log("********************")
    // To apply the default browser preference instead of explicitly setting it.
    // firebase.auth().useDeviceLanguage();
  },
  methods: {
    async firebaseData() {
      let items = [];
      const querySnapshot = await getDocs(collection(db, "services"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        items.push(doc.data());
      });
      this.data = items.filter((item) => item.category == this.key);
      console.log("periodic data ");

      console.log(this.data[0].description);
      console.log("periodic data ");
    },
  },
};
</script>
    
    <style scoped>
.layer1 {
  width: 100%;
  height: 500px;

  display: flex;
  flex-direction: row;
}

.layer1-1 {
  width: 70%;
  height: 100%;

  display: flex;
  flex-direction: column;

}

.layer1-2 {
  width: 30%;
  height: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  justify-self: center;
  align-self: center;
  margin-left: 50px;
  margin-right: 50px;
}

.layer1-1-1 {
  height: 20%;
  width: 100%;

  font-size: 32px;
  align-content: center;
  align-items: center;
  display: flex;
  margin-left: 10px;
}
#divbutton {
    width: 100%;
    padding-top: 20px;
  
    height: 10%;
    display: flex;
  flex-direction: row;
  position: relative;
  justify-content: end;

}
.layer1-1-2 {
  height: 60%;
  width: 100%;

  display: flex;
  flex-direction: row;
}
.layer1-1-3 {
  height: 10%;
  width: 100%;
  font-size: 22px;

  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: end;

}
.layer1-1-2-1 {
  width: auto;

  height: auto;
}
.layer1-1-2-2 {
  width: 35%;

  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
}
/* .layer1-1-2-3 {
    width: 35%;

    height: 100%;
     display: flex;
    flex-direction: column;
} */
.layer1-1-2-2-1 {
  width: 100%;
  height: 20%;

  font-size: 29px;
  padding-left: 10px;
}
.layer1-1-2-2-2 {
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;
}

.layer1-2-1 {
  width: 90%;
  height: 70px;

  margin-top: 20px;
  border: 1px solid black;
  border-left-style: hidden;
  border-right-style: hidden;
}

.layer1-2-2 {
  width: 90%;
  height: 70px;

  margin-top: 20px;
  border: 1px solid black;
  border-left-style: hidden;
  border-right-style: hidden;
}

.layer1-2-3 {
  width: 90%;
  height: 70px;

  margin-top: 20px;
  border: 1px solid black;
  border-left-style: hidden;
  border-right-style: hidden;
}
.serviceimg {
  width: 100%;
  height: 100%;
}
.servicedesc {
  font-size: 15px;
}
.layer1-1-2-3-1 {
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 20%;
}
.layer1-1-2-3-1-1 {
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: center;
  justify-self: center;
  align-items: center;
  align-content: center;
}
.layer1-1-2-3-1-2 {
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: center;
  justify-self: center;
  align-items: center;
  align-content: center;
}
.layer1-1-2-3-2 {
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 80%;
}
.layer1-1-3-1 {
  width: 30%;

  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
 
}
</style>
  