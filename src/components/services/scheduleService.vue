<template>
  <div id="back">
    <div id="mar">
      <div id="loc">
        <div id="link">
          <v-btn
            text
            :ripple="false"
            to="/"
            class="no-background-hover ma-0 pa-0"
          >
            Home
          </v-btn>

          <v-btn
            text
            :ripple="false"
            class="no-background-hover ma-0 pa-0 text--secondary"
            style="margin-left: -5px"
          >
            / {{ key }}
          </v-btn>
        </div>
      </div>

      <v-sheet class="xyz pa-0" style="width: 100%; height: 48px">
        <v-slide-group multiple show-arrows>
          <v-slide-item v-for="(i, index) in item" v-bind:key="index">
            <v-btn
              :class="
                serviceCategory == i.category
                  ? 'ma-0 pt-4 pb-4 pl-12 pr-12 xyza font-weight-black'
                  : 'ma-0 pt-4 pb-4 pl-12 pr-12 xyza'
              "
              @click="changeKey(i.category)"
              style="
                height: 48px;
                width: 250px;
                border-radius: 24px;
                box-shadow: none;
              "
              :color="
                serviceCategory == i.category
                  ? 'background: red '
                  : 'background: transparent'
              "
            >
              <!-- <div id="date">
                          <div class="subdate">13</div>
                          <div class="subdate">MON</div>
                        </div> -->
              {{ i.category }}
            </v-btn>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
      <!-- <div style="display: flex; justify-content: c"> -->
      <div class="layer1">
        <v-dialog
          @keydown.esc="dialog = true"
          v-model="this.$store.state.vdialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
          persistent
        >
          <v-card>
            <v-btn icon dark @click="this.$store.state.vdialog = false">
            </v-btn>

            <vechileInfo />
          </v-card>
        </v-dialog>
        <div id="carddiv" v-if="this.serviceCategory == 'All services'">
          <div class="layer1-1-2" v-for="(service, i) in data" :key="i">
            <div class="layer1-1-2-1" @click="changeKey(service.category)">
              <img class="serviceimg" :src="service.thumbnail" alt="sevice" />
            </div>
            <div class="layer1-1-2-2" @click="changeKey(service.category)">
              <div class="layer1-1-2-2-1">
                <div id="cardrow">
                  <div class="cardcell left">
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <div v-bind="attrs" v-on="on" class="title">
                          {{ service.title }}
                        </div>
                      </template>
                      <span>{{ service.title }}</span>
                    </v-tooltip>
                    <div class="rat">
                      <v-icon class="rating">mdi-star</v-icon
                      ><v-icon class="rating">mdi-star</v-icon
                      ><v-icon class="rating">mdi-star</v-icon
                      ><v-icon class="rating">mdi-star</v-icon
                      ><v-icon class="notrating">mdi-star-outline</v-icon
                      ><v-icon class="ratno">4.0</v-icon>
                    </div>
                  </div>

                  <div class="cardcellprice">
                    <div
                      style="
                        display: flex;

                        width: fit-content;

                        position: absolute;
                        top: 0;
                        right: 0;
                        text-align: center;
                        display: flex;
                        align-items: center;
                      "
                    >
                      <del
                        style="
                          font-family: 'Inter';
                          font-style: normal;
                          font-weight: 300;
                          font-size: 12px;
                          line-height: 15px;
                          text-decoration-line: line-through;
                          color: #d12121;
                          margin-top: 20px;
                          margin-right: 11px;
                        "
                        >₹{{
                          ($store.state.prices[service.category] * 110) / 100
                        }}</del
                      >

                      <div
                        style="
                          font-family: 'Inter';
                          font-style: normal;
                          font-weight: 500;
                          font-size: 20px;
                          line-height: 24px;
                          color: rgba(0, 0, 0, 0.87);
                          margin-top: 20px;
                          width: fit-content;
                        "
                      >
                        ₹ {{ $store.state.prices[service.category] }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="layer1-1-2-2-2">
                <div
                  v-for="(item, i) in service.description"
                  :key="i"
                  class="servicedesc"
                >
                  <v-icon class="green--text mx-2 my-1" style="font-size: 20px"
                    >mdi-check-circle-outline</v-icon
                  >{{ item }}
                </div>
              </div>
            </div>

            <div class="buttonrow">
              <v-btn
                :disabled="alreadyExist(service)"
                v-if="alreadyExist(service) == false"
                class="red--text"
                style="
                  width: 148.5px;
                  height: 48px;
                  background: #ffffff;
                  border: 1px solid #d50000;
                  border-radius: 24px;
                  box-shadow: none;
                  font-family: 'Inter';
                  font-style: normal;
                  font-weight: 500;
                  font-size: 14px;
                  line-height: 17px;
                  margin-top: 10px;
                  margin-bottom: 10px;
                  /* identical to box height */

                  text-transform: uppercase;
                "
                @click="addToCart(service)"
              >
                <!-- <v-icon class="mr-1 black--text">mdi-cart-variant</v-icon> -->
                Add to Cart</v-btn
              >
              <v-btn
                :disabled="alreadyExist(service)"
                v-else
                class="red--text"
                style="
                  width: 148.5px;
                  height: 48px;
                  background: #ffffff;

                  border-radius: 24px;
                  box-shadow: none;
                  font-family: 'Inter';
                  font-style: normal;
                  font-weight: 500;
                  font-size: 14px;
                  line-height: 17px;
                  margin-top: 10px;
                  margin-bottom: 10px;
                  /* identical to box height */

                  text-transform: uppercase;
                "
                @click="addToCart(service)"
              >
                <!-- <v-icon class="mr-1 black--text">mdi-cart-variant</v-icon> -->
                Added</v-btn
              >
              <v-btn
                style="
                  width: 148.5px;
                  height: 48px;
                  background: #d50000;
                  border-radius: 24px;
                  margin-top: 10px;
                  margin-bottom: 10px;
                  box-shadow: none;
                "
                class="white--text"
                @click="buyNow(service)"
                >Book Now</v-btn
              >
            </div>
          </div>
        </div>
        <div
          class="productmain"
          v-if="!(this.serviceCategory == 'All services')"
        >
          <div
            class="productCard"
            v-for="service in this.data"
            :key="service.title"
          >
            <div class="pimage">
              <img class="productimg" :src="service.thumbnail" />
            </div>

            <div class="pdesc">
              <div class="phead">{{ service.title }}</div>
              <div class="pprice">
                ₹ {{ $store.state.prices[service.category] }}
              </div>
              <div class="ppoints">
                <div
                  class="servicedesc"
                  v-for="(item, i) in service.description"
                  :key="i"
                >
                  <v-icon class="green--text mx-2 my-1" style="font-size: 20px"
                    >mdi-check-circle-outline</v-icon
                  >{{ item }}
                </div>
              </div>
              <div class="buttonrow pbtnrow">
                <v-btn
                  :disabled="alreadyExist(service)"
                  v-if="alreadyExist(service) == false"
                  class="red--text"
                  style="
                    width: 148.5px;
                    height: 48px;
                    background: #ffffff;
                    border: 1px solid #d50000;
                    border-radius: 24px;
                    box-shadow: none;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 17px;
                    margin-top: 0px;
                    margin-left: 0px;
                    margin-bottom: 0px;
                    /* identical to box height */

                    text-transform: uppercase;
                  "
                  @click="addToCart(service)"
                >
                  <!-- <v-icon class="mr-1 black--text">mdi-cart-variant</v-icon> -->
                  Add to Cart</v-btn
                >
                <v-btn
                  :disabled="alreadyExist(service)"
                  v-else
                  class="red--text"
                  style="
                    width: 148.5px;
                    height: 48px;
                    background: #ffffff;

                    border-radius: 24px;
                    box-shadow: none;
                    font-family: 'Inter';
                    font-style: normal;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 17px;

                    /* identical to box height */

                    text-transform: uppercase;
                  "
                  @click="addToCart(service)"
                >
                  <!-- <v-icon class="mr-1 black--text">mdi-cart-variant</v-icon> -->
                  Added</v-btn
                >
                <v-btn
                  style="
                    width: 148.5px;
                    height: 48px;
                    background: #d50000;
                    border-radius: 24px;

                    box-shadow: none;
                  "
                  class="white--text"
                  @click="buyNow(service)"
                  >Book Now</v-btn
                >
              </div>
            </div>
          </div>
        </div>
        <v-row align="center" justify="end" class="mx-16">
          <v-col cols="4" v-if="data[0].faq != null">
            <a :href="data[0].faq" target="_blank"
              ><v-btn text color="#d50000" class="ml-16"
                >Frequently Asked Questions</v-btn
              ></a
            ></v-col
          >
          <v-col cols="8">
            <v-subheader
              >For offers and seasonal promotion please contact service advisor
              @+919811100558</v-subheader
            ></v-col
          >
        </v-row>
        <!-- ksdlkfj;sdlkja;sdl -->

        <div class="layer1-1-3">
          <div class="layer1-1-3-1"></div>
          <div class="layer1-1-3-2"></div>
        </div>

        <div class="layer1-2" v-if="false">
          <v-stepper v-model="e6" vertical class="elevation-0">
            <v-stepper-step
              :complete="e6 > 1"
              step="1"
              :color="st1 ? 'green' : 'red'"
              style="align-items: normal"
            >
              Mobile

              <div v-if="st1">
                <!-- <v-btn
                  @click="stp1"
                  class="ma-1 pt-1"
                  :input-value="active"
                  active-class="red white--text"
                  tile
                  outlined
                  x-large
                  text
                > -->
                <div
                  style="
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    padding-right: 30px;
                  "
                >
                  <small> {{ phoneNumber }}</small>
                  <small @click="stp1" style="color: #d12121; cursor: pointer"
                    >Edit</small
                  >
                </div>
                <!-- <img id="star" src="../../assets/flag.png" /> -->

                <!-- </v-btn> -->
              </div>
            </v-stepper-step>

            <v-stepper-content step="1">
              <div id="php" v-if="BOOLOTP">
                <input
                  onBlur="if(this.value == '') this.value = ' Enter OTP'"
                  onFocus="if(this.value == ' Enter OTP') this.value = ' '"
                  class="ph2"
                  type="text"
                  v-model="otp"
                />
              </div>

              <div id="php" v-if="!BOOLOTP">
                <div id="ctcode">+91</div>

                <input class="ph" type="text" v-model="$store.state.phno" />
              </div>

              <!-- JS because of IE support; better: placeholder="Username" -->
              <div class="bc">
                <v-btn
                  v-if="!BOOLOTP"
                  color="red"
                  class="white--text"
                  @click="
                    () => {
                      BOOLOTP = true;
                    }
                  "
                >
                  Get OTP
                </v-btn>
                <v-btn
                  v-if="BOOLOTP"
                  color="red"
                  class="white--text"
                  @click="
                    () => {
                      e6 = 2;
                      st1 = true;
                    }
                  "
                >
                  Continue
                </v-btn>

                <v-btn
                  text
                  @click="
                    () => {
                      stp1();
                      BOOLOTP = !BOOLOTP;
                    }
                  "
                >
                  Cancel
                </v-btn>
              </div>
            </v-stepper-content>

            <v-stepper-step
              :complete="e6 > 2"
              step="2"
              :color="st2 ? 'green' : 'red'"
              style="align-items: normal; margin-bottom: 5px; margin-top: -20px"
            >
              Select Date & Time

              <div v-if="st2">
                <div
                  style="
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    padding-right: 30px;
                  "
                >
                  <small> 12 Feb (09-12 am)</small>
                  <small @click="stp2" style="color: #d12121; cursor: pointer"
                    >Edit</small
                  >
                </div>

                <!-- <v-btn
                  label
                  @click="stp2"
                  class="ma-1 pt-1"
                  :input-value="active"
                  active-class="red white--text"
                  rounded
                  tile
                  outlined
                  x-large
                  text
                >
                  3 JUN (9AM-11AM)</v-btn
                > -->
              </div>
            </v-stepper-step>

            <v-stepper-content step="2">
              <div id="dateandtime">
                <v-sheet class="mx-auto" max-width="270px">
                  <v-slide-group multiple show-arrows>
                    <v-slide-item
                      v-for="n in 6"
                      :key="n"
                      v-slot="{ active, toggle }"
                    >
                      <v-btn
                        class="ma-1 pt-1"
                        :input-value="active"
                        active-class="red white--text"
                        fab
                        tile
                        outlined
                        small
                        text
                        @click="toggle"
                      >
                        <div id="date">
                          <div class="subdate">13</div>
                          <div class="subdate">MON</div>
                        </div>
                      </v-btn>
                    </v-slide-item>
                  </v-slide-group>
                </v-sheet>

                <v-sheet class="mx-auto mt-1 mb-2" max-width="270px">
                  <v-slide-group multiple show-arrows>
                    <v-slide-item
                      v-for="n in 6"
                      :key="n"
                      v-slot="{ active, toggle }"
                    >
                      <v-btn
                        class="mx-2"
                        :input-value="active"
                        active-class="red white--text"
                        depressed
                        rounded
                        @click="toggle"
                      >
                        9-10 am
                      </v-btn>
                    </v-slide-item>
                  </v-slide-group>
                </v-sheet>
              </div>
              <div class="bc">
                <v-btn
                  color="red"
                  class="white--text"
                  @click="
                    () => {
                      e6 = 3;
                      st2 = true;
                    }
                  "
                >
                  Continue
                </v-btn>

                <v-btn text> Cancel </v-btn>
              </div>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 3" step="3" color="red">
              Select / Add Address
            </v-stepper-step>

            <v-stepper-content step="3">
              <textarea
                class="w3review"
                name="w3review"
                rows="1"
                style="widht: 100%"
              >
 Your Address</textarea
              >
              <textarea
                class="w3review"
                name="w3review"
                rows="1"
                style="widht: 100%"
              >
 GPS address</textarea
              >
              <div class="bc">
                <v-btn color="red" class="white--text" @click="() => {}">
                  Continue
                </v-btn>

                <v-btn text> Cancel </v-btn>
              </div>
            </v-stepper-content>
          </v-stepper>
        </div>
      </div>
    </div>
    <div
      style="
        background-color: white;
        margin-bottom: 0px;
        height: 10rem;
        width: 100vw;
        text-align: center;
      "
    >
      <img
        src="../../assets/bottom.jpg"
        height="140rem"
        width=""
        alt=""
        style="margin-top: 16px"
      />
    </div>
    <bottom-vue style="margin-top: 0px" />

    <v-snackbar v-model="snackbar"> {{ snackbarMessage }} </v-snackbar>
  </div>
</template>
    <script>
import vechileInfo from "../vechileInfo.vue";
import { db } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import BottomVue from "../bottomVue.vue";

export default {
  name: "scheduleService",
  data() {
    return {
      serviceData: [],
      snackbarMessage: "",
      snackbar: false,
      dialogs: false,
      key: this.$route.params.id,
      data: [],
      e6: 1,
      boolotp: true,
      locationdata: ["", ""],
      item: [
        {
          category: "All services",
        },
      ],
      model: null,
      phoneNumber: "",
      ph: false,
      st1: false,
      st2: false,
      st3: false,
      BOOLOTP: false,
      otp: " Enter OTP",
      curpage: "",
      items: [],
      serviceCategory: "",
    };
  },

  components: {
    vechileInfo,
    BottomVue,
  },

  mounted() {
    // this.$store.state.vinfo  = JSON.parse( localStorage.getItem('vdata' ) );
    this.$store.state.currentPath = '/services';
    this.serviceCategory = this.$route.params.data;

    console.log(this.serviceCategory);

    this.key = this.serviceCategory;
    if (this.$store.state.vinfo.brand == "Brand") {
      this.$store.state.vdialog = true;
      this.dialogs = true;
      this.curpage = this.$route.params.id;
    }

    // To apply the default browser preference instead of explicitly setting it.
    // firebase.auth().useDeviceLanguage();
  },
  watch: {
    // Creating function for
    // input component
    key: function () {
      if (this.key == "All services") {
        this.data = this.items;
      } else {
        this.data = this.items.filter((item) => item.category == this.key);
      }
      this.curpage = this.key;
    },
  },
  created() {
    this.firebaseData();
    this.carsdata();
    this.$store.state.currentPath = "";
    // console.log(this.key)
    this.dialogs = true;
    //  console.log("********************")
    //     console.log(this.data)
    //     console.log("********************")
    // To apply the default browser preference instead of explicitly setting it.
    // firebase.auth().useDeviceLanguage();
    navigator.geolocation.getCurrentPosition(
      () => {
        //console.log(position.coords.latitude, position.coords.longitude);
      },
      () => {
        //console.log(error);
      }
    );
  },

  methods: {
    changeKey(category) {
      this.key = category;
      this.serviceCategory = this.key;
      console.log("this is data", this.data);
      // console.log("service categorie",this.serviceCategory,(this.serviceCategory == 'All services'));
    },
    alreadyExist(service) {
      return this.$store.state.cartItems.includes(service);
    },
    buyNow(service) {
      this.$store.state.cartItems = [];
      this.$store.state.cartItems.push(service);
      this.snackbarMessage = "Added To Cart";
      this.snackbar = true;
      this.$store.state.cart = true;
      this.$store.state.isCheckoutClicked = true;
    },
    vechileDialog() {
      console.log(this.$store.state.vdialog);
      this.$store.state.vdialog = true;
      console.log(this.$store.state.vdialog);
    },
    async carsdata() {
      const brandname = this.$store.state.vinfo.model;
      console.log("function started");
      const q = query(collection(db, "cars"), where("name", "==", brandname));

      const querySnapshots = await getDocs(q);
      querySnapshots.forEach((doc) => {
        this.$store.state.prices = doc.data();
      });
      console.log("function ended");
    },

    addToCart(service) {
      this.$store.state.isCheckoutClicked = false;
      if (this.$store.state.cartItems.includes(service)) {
        console.log("Already In Cart");
        this.snackbarMessage = "Item Already Exist!";

        this.snackbar = true;
      } else {
        this.$store.state.cartItems.push(service);
        this.snackbarMessage = "Added To Cart";
        this.snackbar = true;
      }
    },
    stp1() {
      this.st1 = false;
      this.e6 = 1;
    },
    stp2() {
      this.st2 = false;
      this.e6 = 2;
    },
    stp3() {
      this.st3 = false;
      this.e6 = 3;
    },

    async firebaseData() {
      // this.items = [];
      const querySnapshot = await getDocs(collection(db, "services"));

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.items.push(doc.data());
      });

      // this.item = this.items;
      this.items.forEach((doc) => {
        this.item.push(doc);
        console.log(this.item);
      });
      this.$store.state.services = this.items;
      this.data = this.items.filter(
        (item) => item.category == this.serviceCategory
      );
      console.log("this is service category", this.serviceCategory);
      if (
        this.serviceCategory == "All services" ||
        typeof this.serviceCategory == "undefined"
      ) {
        console.log("Inside if condition");
        this.serviceCategory = "All services";
        this.data = this.items;
      }
    },
  },
};
</script>



    <style scoped>
.w3review {
  width: 100%;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.3);
}
.bc {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

#mar {
  margin-left: 81px;
  margin-right: 81px;

  padding-right: 0px;
}
.abc {
  width: 100%;
}
.cartbutton {
  width: 148.5px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #d50000;
  border-radius: 18px;
}
.ratno {
  font-size: 13px;
}
.xyza {
  /* width: 17%; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: auto;
}
.titletool {
  position: absolute;
  top: -54px;
  left: -10px;
  width: -moz-fit-content;
  width: 211px;
  height: 47px;
  background-color: #ffffffa8;
  z-index: 0;
  padding: 5px;
  font-family: sans-serif;
  font-style: normal;
  font-weight: 559;
  font-size: 19px;
  line-height: 21px;
  border-top-right-radius: 10px;
  display: none;
}
.buttonrow {
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  padding-bottom: 16px;
  border-top: 0.5px solid rgba(0, 0, 0, 0.2);
}
.v-stepper__step__step {
  position: absolute;
  top: 0px;
  right: 12px;
}
#loc {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
}

.rating {
  color: gold;
  font-size: 15px;
}
.notrating {
  font-size: 15px;
}
.xy {
  width: 15%;
}
#back {
  height: fit-content;
  width: 100%;
  margin-top: 60px;
  border: 1px solid white;
  background: linear-gradient(180deg, #ffffff 0%, #efefef 100%);
}

.title {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin-top: 5px;
  color: rgba(0, 0, 0, 0.86);
  white-space: nowrap;

  overflow: hidden;
  text-overflow: ellipsis;
  width: auto;
  position: relative;

  /* text-align: center; */
}

/* .layer1-1-2-2:hover {

    width: 100%;
    height: -moz-fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
     border-radius: 0px 0px 8px 8px; 

} */

.layer1-1-2:hover .titletool {
  display: flex;
}

#star {
  color: goldenrod;
  width: 20px;
  height: 20px;
  margin-right: 4px;
}

#cardrow {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.notrating {
  font-size: 15px;
}

.cardcellprice {
  width: 50%;
  height: 100%;

  position: relative;
  margin-bottom: 20px;
  border: blue;
}
.cardcell {
  width: 50%;
  height: 100%;

  position: relative;
  margin-bottom: 20px;
  margin-top: 15px;
  margin-left: 5px;
  border: blue;
}
.xyz {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;

  border-radius: 24px;

  opacity: 0.6;
  margin-top: px;
  margin-bottom: 0px;
}
.xyzf {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
}

#ccr {
  display: flex;
  flex-direction: row;
  width: 500px;
  justify-content: space-between;

  margin-top: 16px;
}
#curpath1 {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  width: fit-content;
  height: 19px;
  cursor: pointer;

  color: rgba(0, 0, 0, 0.87);
}

#cc {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;

  color: rgba(202, 0, 0, 0.87);
}
#curpath {
  margin-top: 32px;
  margin-bottom: 0px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: rgba(0, 0, 0, 0.86);
}

#ctcode {
  display: flex;
  text-align: center;
  width: 50px;
  height: 50px;

  font-size: 20px;
  justify-content: center;
  align-items: center;
}

#realLoaction {
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
}
#locationName {
  width: calc(100% - 40px);
  height: 100%;
}
#licon {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
}
.subdate {
  font-size: 10px;
  text-align: center;
}
.layer1 {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16px;
  position: relative;

  justify-content: center;
}
#carddiv {
  width: var(--display-size);
  width: 100%;

  height: fit-content;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16px;
  position: relative;
  justify-content: flex-start;
  background-color: transparent;
}
.v-application--wrap {
  min-height: 375px;
}

.layer1-1 {
  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: column;
}
.ph {
  border: none;
  border-left: 1px solid black;
  width: 200px;
  height: 50px;
  margin-left: 0px;
  border-radius: 5px;
  font-size: 18px;
  margin-top: 0px;
  position: relative;
}
.ph2 {
  border: none;
  border-left: 1px solid black;
  width: 100%;
  height: 50px;
  margin-left: 0px;
  border-radius: 5px;
  font-size: 18px;
  margin-top: 0px;
  position: relative;
}
#php {
  width: 250px;
  height: 50px;
  border: 1px solid black;
  border-radius: 5px;

  position: relative;
  font-size: 23px;
  text-align: center;

  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}

.layer1-2 {
  width: 22%;
  max-width: 900px;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 5px;
  justify-self: center;
  align-self: center;

  position: absolute;
  top: 0px;
  right: 0px;
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
  height: fit-content;
  width: var(--card-width);

  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin-top: 32px;
  margin-left: 20px;
  margin-right: 20px;
  cursor: pointer;
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
  width: 100%;
  height: fit-content;
}
.layer1-1-2-2 {
  width: 100%;

  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* border-radius: 0px 0px 8px 8px; */
}

/* .layer1-1-2-3 {
    width: 35%;

    height: 100%;
     display: flex;
    flex-direction: column;
} */
.layer1-1-2-2-1 {
  width: calc(100% - 30px);
  height: fit-content;
  transition: width 1s, height 10s;
  margin-left: 10px;
  margin-right: 20px;

  /* padding-left: 10px; */
  display: flex;
  flex-direction: row;
}
.layer1-1-2-2-2 {
  width: 100%;
  height: 14em;

  display: flex;
  flex-direction: column;

  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding-top: 16px;
}

.layer1-2-1 {
  width: 90%;
  height: 70px;

  margin-top: 20px;

  border-left-style: hidden;
  border-right-style: hidden;
}

.layer1-2-2 {
  width: 90%;
  height: 70px;

  margin-top: 20px;

  border-left-style: hidden;
  border-right-style: hidden;
}

.layer1-2-3 {
  width: 90%;
  height: 70px;

  margin-top: 20px;

  border-left-style: hidden;
  border-right-style: hidden;
}
.serviceimg {
  width: 344px;
  height: 194px;
  margin-left: 0px;
  border-radius: 8px 8px 0px 0px;
}
.servicedesc {
  margin: 2px;

  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;

  color: rgba(0, 0, 0, 0.86);
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
#dateandtime {
  width: 100%;
  height: 95px;
  display: flex;
  flex-direction: column;
  margin-left: 0;
}
#daterow {
  width: 100%;
  height: 40px;

  margin-left: 10px;
  display: flex;

  margin-bottom: 2px;
}

#date {
  width: 40px;
  height: 40px;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

#time {
  width: 60px;
  height: 40px;
  border: 1px solid black;
  border-radius: 10px;
  margin-left: 10px;
}
#timerow {
  margin-top: 10px;
  width: 100%;
  height: 40px;

  display: flex;
  flex-direction: row;
  margin-left: 10px;
}


@media (max-width: 888px){    
  #carddiv {

  width: 100%;


}
.layer1-1-2 {
  height: fit-content;
  width: var(--card-width);

  margin-left: 0px;
  margin-right: 0px;
  cursor: pointer;
  margin-top: 10px;
}

#back {

  margin-top: 0px;

}

#loc {

  margin-top: 0px;

}



#mar {
margin-left: 4px;
margin-right: 4px;

}
.xyz {
display: none;
}
}
</style>
