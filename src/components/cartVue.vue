<template>
  <div
    style="
      width: 100%;
      height: 100vh;
      background: rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(20px);
    "
  >
    <div
      style="
        width: 350px;
        height: 100vh;
        position: absolute;
        top: 0px;
        right: 0px;
        background-color: white;
        
      "
    >
    <div>
        <v-card elevation="0" style="border-bottom: solid 1px black; border-radius:0px; height: 7vh;">
          <v-list-item class="ma-0 pa-0">
            <div class="carttitleblock">
              <v-btn icon> </v-btn>

              <div class="carttitle" style="font-size:16px; ">Your Cart</div>

              <v-btn icon @click="$store.state.cart = false">
                <v-icon> mdi-close </v-icon></v-btn
              >
            </div>
          </v-list-item>
        </v-card>


        <v-card elevation="0" style="height:5vh">
            <div style="text-align: center; font-size: 20px; margin: 2%;">PICKUP SUMMARY</div>
        </v-card>
        <v-card style="height:30vh; overflow-y: auto;">
          <div style="padding:10% 10% 10% 10%;">
            <div style="padding-bottom: 5%; font-size: 10px; color: #d50000;">PERIODIC SERVICE</div>
            <div style="color:black; font-size: 18px; padding-bottom: 1px;">Standard Services</div>
            <div style="color:grey; font-size:12px; padding-bottom: 12px;">Takes 5 hrs <v-icon size="6">mdi-circle</v-icon> Warranty : 1200km or 1 month</div>
            <div style="padding-bottom: 5%; font-size: 10px; color: #d50000;">PERIODIC SERVICE</div>
            <div style="color:black; font-size: 18px; padding-bottom: 1px;">Standard Services</div>
            <div style="color:grey; font-size:12px; padding-bottom: 12px;">Takes 5 hrs <v-icon size="6">mdi-circle</v-icon> Warranty : 1200km or 1 month</div>
            <div style="padding-bottom: 5%; font-size: 10px; color: #d50000;">PERIODIC SERVICE</div>
            <div style="color:black; font-size: 18px; padding-bottom: 1px;">Standard Services</div>
            <div style="color:grey; font-size:12px; padding-bottom: 12px;">Takes 5 hrs <v-icon size="6">mdi-circle</v-icon> Warranty : 1200km or 1 month</div>
            <div style="color:black; font-size:15px; padding-bottom: 12px; font-weight: 400; opacity: 0.8;"><v-icon style="padding-right:.5rem" color="red">mdi-calendar</v-icon> Wed 14 dec <v-icon color="black" size="6">mdi-circle</v-icon> 12:00 PM </div>
            <div style="color:black; font-size:15px;  font-weight: 400; opacity: 0.8;"><v-icon style="padding-right:.5rem" color="red">mdi-map-marker</v-icon> Shivalik Rd, Block C, Malviya Nagar</div>
          </div>
        </v-card>
        <v-card  style="height:7vh"><div style="padding:5% 5% 5% 10%; font-size:15px"><v-icon color="red" style="padding-right:1rem">mdi-sale</v-icon>Use Coupons and Offers
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-icon color="#d50000" v-bind="attrs"
                v-on="on" style="padding-left:4rem"
          dark>mdi-chevron-right</v-icon>
            </template>
            <v-list style="width:20rem">
              <v-list-item style="margin:5px"
                v-for="(item, index) in items"
                :key="index"
              >
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }} <span style="margin-left:4rem; color: grey;">10 %</span></v-list-item-title>
                  <v-list-item-title style="font-size:12px">Description</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-title style="text-align: right; font-size: 14px;"><v-btn class="white--text" color="#d50000">Apply</v-btn></v-list-item-title>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-menu>
          </div>
        </v-card>
        <v-card  style="height:41vh; overflow-y: auto;">
          
            <div style="padding:10% 10% 10% 10%;">
              <div style="font-size:15px; padding-bottom: 5%; font-weight: 400;">PAYMENT SUMMARY</div>
              <!-- <div style="font-size:15px; padding-bottom: 5%; font-weight: lighter; width: 100%; ">
                <span style="color:black; font-weight: 300; text-align: left; font-size: 14px;">Item Total</span>
                <span style="color:black; font-weight: 300;  text-align: right; font-size: 14px;">4000</span>
              </div>
              
              <div style="font-size:15px; padding-bottom: 5%; font-weight: lighter;"><span style="color:grey;  font-size: 14px;  font-weight: 300;">Coupon Discount</span><span style="color:grey;  font-size: 14px; font-weight: 300;">4000</span></div>
              <v-divider style="margin:3% 0% 5% 0%; padding: 0px"></v-divider>
              <div style="font-size:15px; padding-bottom: 5%; font-weight: lighter;"><span style="color:black;  font-size: 14px;  font-weight: 300;">Sub Total</span><span style="color:black;  font-size: 14px; font-weight: 300;">4000</span></div>
              <div style="font-size:15px; padding-bottom: 5%; font-weight: lighter;"><span style="color:grey;  font-size: 14px;  font-weight: 300;">GST(18%)</span><span style="color:grey;  font-size: 14px; font-weight: 300;">4000</span></div>
              <v-divider></v-divider>
              <div style="font-size:15px; padding-bottom: 5%; font-weight: lighter;"><span style="color:black;  font-size: 14px;  font-weight: 300;">Grand Total</span><span style="color:black;  font-size: 14px; font-weight: 300;">4000</span></div>
              <div style="font-size:15px; padding-bottom: 5%; font-weight: lighter;"><span style="color:grey;  font-size: 14px; font-weight: 300;">Total Discount</span><span style="color:grey;  font-size: 14px; font-weight: 300;">4000</span></div> -->
              <v-list-item
                v-for="(item, i) in this.$store.state.cartItems" :key="i"
                
                style="position: relative;"
              >
                <!-- <v-btn icon @click="removeItem(i)" class="cartitemclose">
                  <v-icon style="font-size: 12px"> mdi-close </v-icon></v-btn
                > -->
                <v-list-item-content>
                  <v-list-item-title style="color:black; font-weight: 300; text-align: left; font-size: 14px;">Item Total</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-title style="color:black; font-weight: 300;  text-align: right; font-size: 14px;"><v-icon style="margin-top:0px; opacity: 0.6;" size="14px" color="black">mdi-currency-inr</v-icon>4000</v-list-item-title>
                </v-list-item-action>
                
              </v-list-item>
              <v-list-item
                v-for="(item, i) in this.$store.state.cartItems" :key="i"
                
                style="position: relative"
              >
                <!-- <v-btn icon @click="removeItem(i)" class="cartitemclose">
                  <v-icon style="font-size: 12px"> mdi-close </v-icon></v-btn
                > -->
                <v-list-item-content>
                  <v-list-item-title style=" color:grey; font-weight: 300; text-align: left; font-size: 14px;">Coupon Discount</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-title style="color:grey; font-weight: 300;  text-align: right; font-size: 14px;"><span style="font-weight:bold;">-</span><v-icon style="margin-top:0px;" size="14px" color="grey">mdi-currency-inr</v-icon>400</v-list-item-title>
                </v-list-item-action>
                
              </v-list-item>
              <v-divider style="margin:3% 0% 5% 0%; padding: 0px"></v-divider>
              <v-list-item
                v-for="(item, i) in this.$store.state.cartItems" :key="i"
                
                style="position: relative"
              >
                <!-- <v-btn icon @click="removeItem(i)" class="cartitemclose">
                  <v-icon style="font-size: 12px"> mdi-close </v-icon></v-btn
                > -->
                <v-list-item-content>
                  <v-list-item-title style="color:black; font-weight: 300; text-align: left; font-size: 14px;">Sub Total</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-title style="color:black; font-weight: 300;  text-align: right; font-size: 14px;"><v-icon style="margin-top:0px; opacity: 0.6;" size="14px" color="black">mdi-currency-inr</v-icon>{{ item.price }}</v-list-item-title>
                </v-list-item-action>
                
              </v-list-item>
              
              <v-list-item
                v-for="(item, i) in this.$store.state.cartItems" :key="i"
                
                style="position: relative"
              >
                <!-- <v-btn icon @click="removeItem(i)" class="cartitemclose">
                  <v-icon style="font-size: 12px"> mdi-close </v-icon></v-btn
                > -->
                <v-list-item-content>
                  <v-list-item-title style="color:grey; font-weight: 300; text-align: left; font-size: 14px;">GST(18%)</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-title style="color:grey; font-weight: 300;  text-align: right; font-size: 14px;"><v-icon style="margin-top:0px;" size="14px" color="grey">mdi-currency-inr</v-icon>{{ item.price }}</v-list-item-title>
                </v-list-item-action>
                
              </v-list-item>
              <v-divider style="margin:3% 0% 5% 0%; padding: 0px"></v-divider>
              <v-list-item
                v-for="(item, i) in this.$store.state.cartItems" :key="i"
                
                style="position: relative"
              >
                <!-- <v-btn icon @click="removeItem(i)" class="cartitemclose">
                  <v-icon style="font-size: 12px"> mdi-close </v-icon></v-btn
                > -->
                <v-list-item-content>
                  <v-list-item-title style="color:black; font-weight: 300; text-align: left; font-size: 14px;">Grand Total</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-title style="color:black; font-weight: 300;  text-align: right; font-size: 14px;"><v-icon style="margin-top:0px; opacity: 0.6;" size="14px" color="black">mdi-currency-inr</v-icon>{{ item.price }}</v-list-item-title>
                </v-list-item-action>
                
              </v-list-item>
              
              <v-list-item
                v-for="(item, i) in this.$store.state.cartItems" :key="i"
                
                style="position: relative"
              >
                <!-- <v-btn icon @click="removeItem(i)" class="cartitemclose">
                  <v-icon style="font-size: 12px"> mdi-close </v-icon></v-btn
                > -->
                <v-list-item-content>
                  <v-list-item-title style="color:grey; font-weight: 300; text-align: left; font-size: 14px;">Additional Discount</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-title style="color:grey; font-weight: 300;  text-align: right; font-size: 14px;"><v-icon style="margin-top:0px; opacity: 0.6;" size="14px" color="grey">mdi-currency-inr</v-icon>{{ item.price }}</v-list-item-title>
                </v-list-item-action>
                
              </v-list-item>

            </div>
          </v-card>
        <v-card  style="height:10vh;">
          <v-row class="pa-3">
            <v-col cols="6" style="padding-left:2rem" >
              <div style="font-size:10px; color: #d50000;">NET PAYABLE</div>
              <div style="font-size:20px; padding-top: 1px;"><v-icon style="margin-top:0px" size="20px" color="black">mdi-currency-inr</v-icon>3000</div>
            </v-col>
            <v-col cols="6" >
            <v-btn color="#d50000" class="white--text" style="padding-left:2rem; padding-right:2rem">PAY NOW</v-btn></v-col>
          </v-row>
        </v-card>
        
    </div>


    

      <!-- <div v-if="!this.$store.state.isCheckoutClicked">
        <v-card>
          <v-list-item class="ma-0 pa-0">
            <div class="carttitleblock">
              <v-btn icon> </v-btn>

              <div class="carttitle">Your Cart</div>

              <v-btn icon @click="$store.state.cart = false">
                <v-icon> mdi-close </v-icon></v-btn
              >
            </div>
          </v-list-item>
        </v-card>
        <v-list flat v-if="this.$store.state.cartItems != 0">
          <v-list-item-group color="indigo">
            <v-card>
              <v-list-item
                v-for="(item, i) in this.$store.state.cartItems"
                :key="i"
                style="position: relative"
              >
                <v-btn icon @click="removeItem(i)" class="cartitemclose">
                  <v-icon style="font-size: 12px"> mdi-close </v-icon></v-btn
                >
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-title>Rs. {{ item.price }}</v-list-item-title>

                 
                </v-list-item-action>
              </v-list-item>
            </v-card>
          </v-list-item-group>
        </v-list>
        <v-container v-else class="d-flex justify-center">
          Cart Is Empty!
        </v-container>
        <div
          style="
            width: 100%;
            height: fit-content;
            position: absolute;
            bottom: 0px;
            right: 0px;

            padding: 15px;

            display: flex;
            flex-direction: column;

            border-top: 1px solid rgba(129, 129, 129, 0.2);
          "
        >
          <div
            style="
              display: flex;
              flex-direction: row;
              justify-content: space-between;

              width: 100%;
              height: 50px;
              text-align: center;
              align-items: center;
              font-weight: 700;
            "
          >
            <div style="">Subtotal</div>
            <div>₹ {{ totalAmount }}</div>
          </div>
          <div style="width: 100%; height: 60px; font-size: 15px">
            Taxes, shipping and discounts codes calculated at checkout
          </div>

          <div
            style="
              border-radius: 12px;
              width: 100%;
              height: 50px;
              background-color: #d50000;
              color: white;
              font-weight: 700;
              text-align: center;
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
            "
            @click="enableCheckOutButton"
          >
            CHECK OUT
          </div>
        </div>
      </div> -->
      <!-- <div v-else>
        <v-card>
          <v-list-item class="ma-0 pa-0">
            <div class="carttitleblock">
              <v-btn icon> </v-btn>

              <div class="carttitle">Your Cart</div>

              <v-btn icon @click="$store.state.cart = false">
                <v-icon> mdi-close </v-icon></v-btn
              >
            </div>
          </v-list-item>
        </v-card>
        <v-stepper v-model="e6" vertical>
          <v-stepper-step :complete="e6 > 1" step="1">
            Select Pickup Location
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-row>
              <v-text-field
                v-model="address"
                dense
                class="mt-2"
                outlined
                append-icon="mdi-map-marker"
                @click:append="$store.state.locdialog = true"
              ></v-text-field>
            </v-row>

            <v-btn color="#D50000" class="white--text" @click="e6 = 2">
              Continue
            </v-btn>
            <v-btn text @click="disableCheckoutButton"> Cancel </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 2" step="2">
            Select Pickup Date
          </v-stepper-step>

          <v-stepper-content step="2">
            <v-row justify="space-around">
              <v-chip-group
                class="my-4 pa-0"
                mandatory
                active-class="red white--text"
                width="100%"
                v-model="dateChipIndex"
              >
                <v-chip v-for="(item, i) in listDateSlots" :key="i">
                  {{ item.day + "\n" + item.date + "\n" + item.mon }}
                </v-chip>
              </v-chip-group>
            </v-row>

            <v-btn color="#D50000" class="white--text" @click="e6 = 3">
              Continue
            </v-btn>
            <v-btn text @click="e6 = 1"> Cancel </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 3" step="3">
            Select Pickup Time
          </v-stepper-step>

          <v-stepper-content step="3">
            <v-row justify="space-around">
              <v-chip-group
                class="my-4 pa-0"
                mandatory
                active-class="red white--text"
                width="100%"
                v-model="timeChipIndex"
              >
                <v-chip v-for="(item, i) in listTimeSlots" :key="i">
                  {{ item }}
                </v-chip>
              </v-chip-group>
            </v-row>
            <v-btn
              color="#D50000"
              class="white--text"
              @click="schedulePickupService"
            >
              CHECKOUT
            </v-btn>
            <v-btn text @click="e6 = 2"> Cancel </v-btn>
          </v-stepper-content>
        </v-stepper>
      </div> -->
    </div>
    <template>
      <div class="text-center">
        <v-dialog
          v-model="dialog"
          transition="dialog-bottom-transition"
          max-width="600"
        >
          <template>
            <v-card>
              <v-card-text>
                <v-row justify="center" align="center">
                  <v-col cols="2">
                    <v-icon class="pa-12" color="green" size="100px"
                      >mdi-check-circle-outline</v-icon
                    >
                  </v-col>
                  <v-col cols="10">
                    <div class="text-h5 pa-12">
                      Pickup Scheduled Successfully!
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn text @click="dialog = false">Close</v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </div>
    </template>
  </div>
</template>
<script>
import axios from "axios";
import { auth, db } from "../firebase";
import { doc, setDoc, collection } from "@firebase/firestore";
export default {
  name: "cartVue",
  data() {
    return {
      dialog: false,
      orderSuccess: false,
      e6: 1,
      dateChipIndex: 1,
      timeChipIndex: 1,
      listDateSlots: [],
      listTimeSlots: [
        "11:00 AM",
        "12:00 PM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM",
        "5:00 PM",
        "6:00 PM",
        "7:00 PM",
      ],
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
    };
  },
  computed: {
    totalAmount() {
      return this.$store.state.cartItems.reduce(
        (sum, val) => sum + parseInt(val.price),
        0
      );
    },
    address() {
      return this.$store.state.location;
    },
  },
  methods: {
    disableCheckoutButton() {
      this.$store.state.isCheckoutClicked = false;
    },
    async schedulePickupService() {
      var date = new Date();
      var utc = date.getTime();
      var dateIST = new Date(utc);

      if (this.$store.state.uid != "") {
        const services = [];
        this.$store.state.cartItems.forEach((service) => {
          services.push({
            name: service.title,
            price: this.$store.state.prices[service.category],
            category: service.category,
          });
        });
        const docRef = doc(collection(db, "pickups"));
        console.log("Checkpoint ", services);
        console.log("Checkpoint ", this.$store.state.cartItems);

        setDoc(docRef, {
          services: services,
          status: "pending",
          id: docRef.id,
          customerInfo: {
            dob: this.$store.state.customer.userInfo.dob,
            fcmToken: this.$store.state.customer.fcmToken.tokenId,
            name: this.$store.state.customer.userInfo.fullName,
            gender: this.$store.state.customer.userInfo.gender,
            phoneNo: this.$store.state.customer.userInfo.phoneNumber,
            photoURL: this.$store.state.customer.userInfo.photoURL,
            id: auth.currentUser.uid,
          },
          startTime: {
            date: "NA",
            time: "NA",
          },
          when: {
            date: dateIST.toLocaleDateString(),
            time: dateIST.toLocaleTimeString("en-US"),
          },
          endTime: {
            date: "NA",
            time: "NA",
          },
          pickupInfo: {
            mode: "NA",
            address: this.address,
            date: this.listDateSlots[this.dateChipIndex].value,
            time: this.listTimeSlots[this.timeChipIndex],
            location: {
              latitude: this.$store.state.coordinates.latitude,
              longitude: this.$store.state.coordinates.longitude,
            },
            state: "NA",
          },
          acceptedAt: {
            date: "NA",
            time: "NA",
          },
          couponInfo: {
            couponCode: "NA",
            isCouponUsed: "NA",
          },
          vehicleInfo: {
            vehicleName: this.$store.state.vinfo.model,
            vehicleBrand: this.$store.state.vinfo.brand,
          },
        }).then(() => {
          console.log("Success");
          this.$store.state.cartItems = [];
          this.$store.state.cart = false;
          this.$store.state.isCheckoutClicked = false;
          this.e6 = 1;
          this.orderSuccess = true;
          this.dialog = true;
        });
      } else {
        this.$store.state.logindialog = true;
      }
    },

    async createRazorPayOrder() {
      const response = await axios.post(
        "https://us-central1-quickmechanic-india.cloudfunctions.net/razorpayModule-createNewRazorpayOrder",
        {
          payableAmount: 100,
        }
      );
      alert(response);
    },
    closeCart() {
      this.$store.state.cart = false;
      this.$store.state.isCheckoutClicked = false;
    },
    enableCheckOutButton() {
      this.$store.state.isCheckoutClicked = true;
    },
    setAddress() {
      var location = JSON.parse(localStorage.getItem("location"));
      if (location == null) {
        console.log(location);
      } else {
        this.$store.state.location = location;
      }
    },
    removeItem(index) {
      this.$store.state.cartItems.splice(index, 1);
    },
    generateDateSlots() {
      this.listDateSlots = [];
      var targetDate = new Date();
      var daysList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      var monthsList = [
        "",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];

      var listOfDates = [
        {
          mon: monthsList[targetDate.getMonth() + 1].toString().slice(0, 3),
          day: daysList[targetDate.getDay()],
          date: targetDate.getDate(),
          value:
            targetDate.getDate() +
            "/" +
            (targetDate.getMonth() + 1) +
            "/" +
            targetDate.getFullYear(),
        },
      ];
      for (let i = 0; i < 14; i++) {
        targetDate.setDate(targetDate.getDate() + 1);
        var dd = targetDate.getDate();
        let mm = targetDate.getMonth() + 1;
        var yyyy = targetDate.getFullYear();
        var day = targetDate.getDay();
        var dateString = dd + "/" + mm + "/" + yyyy;
        listOfDates.push({
          mon: monthsList[mm].toString().slice(0, 3),
          day: daysList[day],
          date: dd,
          value: dateString,
        });
      }

      this.listDateSlots = listOfDates;
    },
  },
  created() {
    this.generateDateSlots();
    this.setAddress();
  },
};
</script>
<style scoped>
.v-stepper__step__step {
  background-color: #d50;
  color: red;
}

.v-sheet.v-stepper {
  height: calc(100vh - 67px);
}
.carttitle {
  font-size: 22px;
  font-weight: 400;
}

.carttitleblock {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.v-list-item{
  
  padding: 0px;
}
</style>
    






