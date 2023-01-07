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
      <div v-if="!this.$store.state.isCheckoutClicked">
        <v-card>
          <v-list-item class="ma-0 pa-0">
            <div class="carttitleblock">
              <v-btn icon> </v-btn>

              <div class="carttitle">Your Cart</div>

              <v-btn icon @click="closeCart">
                <v-icon> mdi-close </v-icon></v-btn
              >
            </div>
          </v-list-item>
        </v-card>
        <v-list flat v-if="this.$store.state.cartItems != 0">
          <v-list-item-group color="indigo">
            <v-card class="pa-4">
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
                  <v-list-item-title
                    >Rs.
                    {{ $store.state.prices[item.category] }}</v-list-item-title
                  >
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
      </div>
      <div v-else-if="this.$store.state.showOrderSummary">
        <v-card
          elevation="0"
          style="
            border-bottom: solid 1px black;
            border-radius: 0px;
            height: 7vh;
          "
        >
          <v-list-item class="ma-0 pa-0">
            <div class="carttitleblock">
              <v-btn icon> </v-btn>

              <div class="carttitle">Summary</div>

              <v-btn icon @click="closeCart">
                <v-icon> mdi-close </v-icon></v-btn
              >
            </div>
          </v-list-item>
        </v-card>

        <v-card style="height: 82vh; overflow-y: auto">
          <div style="padding: 10% 10% 10% 10%">
            <div
              v-for="(item, i) in $store.state.cartItems"
              :key="i"
              style="padding-bottom: 5%"
            >
              <div style="font-size: 10px; color: #d50000">
                {{ item.category }}
              </div>
              <div style="color: black; font-size: 18px; padding-bottom: 1px">
                {{ item.title }}
              </div>
            </div>

            <div
              style="
                color: black;
                font-size: 15px;
                padding-top: 5%;
                padding-bottom: 12px;
                font-weight: 400;
                opacity: 0.8;
              "
              v-if="radioGroup == 'Pickup'"
            >
              <v-icon style="padding-right: 0.5rem" color="red"
                >mdi-calendar</v-icon
              >
              {{ listDateSlots[this.dateChipIndex].value }}
              <v-icon color="black" size="6">mdi-circle</v-icon>
              {{ listTimeSlots[this.timeChipIndex] }}
            </div>
            <div
              style="
                color: black;
                font-size: 15px;
                font-weight: 400;
                opacity: 0.8;
              "
              v-if="radioGroup == 'Pickup'"
            >
              <v-icon style="padding-right: 0.5rem" color="red"
                >mdi-map-marker</v-icon
              >
              {{ address }}
            </div>
          </div>
          <v-card style="height: 7vh"
            ><div style="padding: 5% 5% 5% 10%; font-size: 15px">
              <v-icon color="red" style="padding-right: 1rem">mdi-sale</v-icon
              >Use Coupons and Offers
              <v-menu offset-y bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    color="#d50000"
                    v-bind="attrs"
                    v-on="on"
                    style="margin-left: 4rem"
                    dark
                    >mdi-chevron-right</v-icon
                  >
                </template>
                <v-list style="">
                  <v-list-item
                    style="
                      padding: 0.5rem 0.5rem 0.5rem 0.5rem;
                      margin: 0rem;
                      width: 20rem;
                    "
                    v-for="(item, index) in couponsList"
                    :key="index"
                    ><div
                      style="
                        font-size: 20px;
                        margin: 5px 15px 5px 15px;
                        padding-top: 0px;
                      "
                    >
                      {{ item.discountPercent }}%
                    </div>
                    <v-list-item-content>
                      <v-list-item-title style="font-size: 16px">{{
                        item.name
                      }}</v-list-item-title>
                      <v-list-item-title style="font-size: 12px"
                        >{{ item.code }}
                      </v-list-item-title>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-list-item-title style="font-size: 14px"
                        ><v-btn
                          v-if="index == selectedCouponIndex"
                          class="red--text elevation-0"
                          color="transparent"
                          @click="removeCoupon()"
                          text
                          >Remove</v-btn
                        >

                        <v-btn
                          v-else
                          class="red--text elevation-0"
                          color="transparent"
                          @click="couponApplied(item.discountPercent, index)"
                          >Apply</v-btn
                        >
                      </v-list-item-title>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-card>
          <div style="padding: 10% 10% 10% 10%">
            <div style="font-size: 15px; padding-bottom: 5%; font-weight: 400">
              PAYMENT SUMMARY
            </div>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  style="
                    color: black;
                    font-weight: 300;
                    text-align: left;
                    font-size: 14px;
                  "
                  >Item Total</v-list-item-title
                >
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-title
                  style="
                    color: black;
                    font-weight: 300;
                    text-align: right;
                    font-size: 14px;
                  "
                  ><v-icon
                    style="margin-top: 0px; opacity: 0.6"
                    size="14px"
                    color="black"
                    >mdi-currency-inr</v-icon
                  >{{ totalAmount }}</v-list-item-title
                >
              </v-list-item-action>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  style="
                    color: grey;
                    font-weight: 300;
                    text-align: left;
                    font-size: 14px;
                  "
                  >Coupon Discount</v-list-item-title
                >
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-title
                  style="
                    color: grey;
                    font-weight: 300;
                    text-align: right;
                    font-size: 14px;
                  "
                  ><span style="font-weight: bold">-</span
                  ><v-icon style="margin-top: 0px" size="14px" color="grey"
                    >mdi-currency-inr</v-icon
                  >{{ this.discountedPrice.toFixed(2) }}</v-list-item-title
                >
              </v-list-item-action>
            </v-list-item>
            <v-divider style="margin: 3% 0% 5% 0%; padding: 0px"></v-divider>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  style="
                    color: black;
                    font-weight: 300;
                    text-align: left;
                    font-size: 14px;
                  "
                  >Sub Total</v-list-item-title
                >
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-title
                  style="
                    color: black;
                    font-weight: 300;
                    text-align: right;
                    font-size: 14px;
                  "
                  ><v-icon
                    style="margin-top: 0px; opacity: 0.6"
                    size="14px"
                    color="black"
                    >mdi-currency-inr</v-icon
                  >{{ totalAmount - discountedPrice }}</v-list-item-title
                >
              </v-list-item-action>
            </v-list-item>

            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  style="
                    color: grey;
                    font-weight: 300;
                    text-align: left;
                    font-size: 14px;
                  "
                  >GST(18%)</v-list-item-title
                >
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-title
                  style="
                    color: grey;
                    font-weight: 300;
                    text-align: right;
                    font-size: 14px;
                  "
                  ><v-icon style="margin-top: 0px" size="14px" color="grey"
                    >mdi-currency-inr</v-icon
                  >{{
                    ((totalAmount - discountedPrice) * 0.18).toFixed(2)
                  }}</v-list-item-title
                >
              </v-list-item-action>
            </v-list-item>
            <v-divider style="margin: 3% 0% 5% 0%; padding: 0px"></v-divider>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title
                  style="
                    color: black;
                    font-weight: 300;
                    text-align: left;
                    font-size: 14px;
                  "
                  >Grand Total</v-list-item-title
                >
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-title
                  style="
                    color: black;
                    font-weight: 300;
                    text-align: right;
                    font-size: 14px;
                  "
                  ><v-icon
                    style="margin-top: 0px; opacity: 0.6"
                    size="14px"
                    color="black"
                    >mdi-currency-inr</v-icon
                  >{{
                    (
                      totalAmount -
                      discountedPrice +
                      (totalAmount - discountedPrice) * 0.18
                    ).toFixed(2)
                  }}</v-list-item-title
                >
              </v-list-item-action>
            </v-list-item>
          </div>
        </v-card>

        <v-card style="height: 10vh">
          <v-row class="pa-3">
            <v-col cols="6" style="padding-left: 2rem">
              <div style="font-size: 10px; color: #d50000">NET PAYABLE</div>
              <div style="font-size: 20px; padding-top: 1px">
                <v-icon style="margin-top: 0px" size="20px" color="black"
                  >mdi-currency-inr</v-icon
                >{{
                  (
                    totalAmount -
                    discountedPrice +
                    (totalAmount - discountedPrice) * 0.18
                  ).toFixed(2)
                }}
              </div>
            </v-col>
            <v-col cols="6">
              <v-btn
                v-if="radioGroup == 'Self'"
                color="#d50000"
                class="white--text"
                style="padding-left: 2rem; padding-right: 2rem"
                @click="schedulePickupService"
                >BOOK NOW</v-btn
              >

              <v-btn
                v-else
                color="#d50000"
                class="white--text"
                style="padding-left: 2rem; padding-right: 2rem"
                @click="createRazorPayOrder"
                >PAY NOW</v-btn
              >
            </v-col>
          </v-row>
        </v-card>
      </div>
      <div v-else>
        <v-card>
          <v-list-item class="ma-0 pa-0">
            <div class="carttitleblock">
              <v-btn icon> </v-btn>

              <div class="carttitle">Your Cart</div>

              <v-btn icon @click="closeCart">
                <v-icon> mdi-close </v-icon></v-btn
              >
            </div>
          </v-list-item>
        </v-card>
        <v-stepper v-model="e6" vertical>
          <v-stepper-step :complete="e6 > 1" step="1" color="#D50000">
            Select Pickup Type
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-radio-group v-model="radioGroup" mandatory class="mt-0">
              <v-radio
                label="Pickup (Get Your Car Picked Up By Our Mechanic)"
                value="Pickup"
              ></v-radio>
              <v-radio
                label="Self  (Drop Your Car At Our Garage)"
                value="Self"
              ></v-radio>
            </v-radio-group>

            <v-btn
              v-if="radioGroup == 'Pickup'"
              color="#D50000"
              class="white--text"
              @click="e6 = 2"
            >
              Continue
            </v-btn>
            <v-btn
              v-else
              color="#D50000"
              class="white--text"
              @click="goToSummaryPage"
            >
              Confirm
            </v-btn>
            <v-btn text @click="disableCheckoutButton"> Cancel </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 2" step="2" color="#D50000">
            Select Pickup Location
          </v-stepper-step>

          <v-stepper-content step="2">
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

            <v-btn color="#D50000" class="white--text" @click="e6 = 3">
              Continue
            </v-btn>
            <v-btn text @click="e6 = 1"> Cancel </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 3" step="3" color="#D50000">
            Select Pickup Date
          </v-stepper-step>

          <v-stepper-content step="3">
            <v-row justify="space-around">
              <v-chip-group
                class="my-4 pa-0"
                mandatory
                active-class="red accent-4 white--text"
                width="100%"
                v-model="dateChipIndex"
              >
                <v-chip v-for="(item, i) in listDateSlots" :key="i">
                  {{ item.day + "\n" + item.date + "\n" + item.mon }}
                </v-chip>
              </v-chip-group>
            </v-row>

            <v-btn color="#D50000" class="white--text" @click="e6 = 4">
              Continue
            </v-btn>
            <v-btn text @click="e6 = 2"> Cancel </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 4" step="4" color="#D50000">
            Select Pickup Time
          </v-stepper-step>

          <v-stepper-content step="4">
            <v-row justify="space-around">
              <v-chip-group
                class="my-4 pa-0"
                mandatory
                active-class="red accent-4 white--text"
                width="100%"
                v-model="timeChipIndex"
              >
                <v-chip v-for="(item, i) in listTimeSlots" :key="i">
                  {{ item }}
                </v-chip>
              </v-chip-group>
            </v-row>
            <v-btn color="#D50000" class="white--text" @click="goToSummaryPage">
              CHECKOUT
            </v-btn>
            <v-btn text @click="e6 = 3"> Cancel </v-btn>
          </v-stepper-content>
        </v-stepper>
      </div>
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
                <v-card-subtitle
                  justify="center"
                  align="center"
                  v-if="radioGroup == 'Self'"
                  >Thank You! We will contact you shortly…</v-card-subtitle
                >
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn
                  v-if="radioGroup == 'Pickup'"
                  text
                  @click="handleClick()"
                  style="text-align: left"
                >
                  View Invoice</v-btn
                >
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
import { doc, setDoc, collection, onSnapshot } from "@firebase/firestore";
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
      couponsList: [],
      discountedPrice: 0,
      gstPrice: 0,
      orderId: "",
      script: `https://checkout.razorpay.com/v1/checkout.js`,
      isSkipped: false,
      radioGroup: "Pickup",
      isCouponApplied: false,
      selectedCouponIndex: -1,
      CurrentserviceId: "",
      CurrentinvoiceId: "",
    };
  },
  computed: {
    totalAmount() {
      return this.$store.state.cartItems.reduce(
        (sum, val) => sum + parseInt(this.$store.state.prices[val.category]),
        0
      );
    },
    address() {
      return this.$store.state.location;
    },
  },
  methods: {
    handleClick() {
      let data = {
        serviceId: this.CurrentserviceId,
        invoiceId: this.CurrentinvoiceId,
      };
      this.$router.push({
        name: "invoiceView", //use name for router push
        params: { data },
      });
      this.dialog = false;
    },
    createInvoice(pickupId, services) {
      if (this.$store.state.currentState == "Uttar Pradesh") {
        services.push({
          name: "Discount",
          price: this.discountedPrice,
        });
        services.push({
          name: "SGST",
          price: (this.totalAmount - this.discountedPrice) * 0.09,
        });
        services.push({
          name: "CGST",
          price: (this.totalAmount - this.discountedPrice) * 0.09,
        });
      } else {
        services.push({
          name: "Discount",
          price: this.discountedPrice,
        });
        services.push({
          name: "IGST",
          price: (this.totalAmount - this.discountedPrice) * 0.18,
        });
      }

      console.log("state", this.$store.state.currentState);
      var igstInfo = [{ rate: 18, type: "IGST" }];
      var cgstInfo = [
        { rate: 9, type: "SGST" },
        { rate: 9, type: "CGST" },
      ];
      var date = new Date();
      var utc = date.getTime();
      var dateIST = new Date(utc);
      const docRef = doc(collection(db, "pickups/" + pickupId + "/invoices"));
      this.CurrentserviceId = pickupId;
      this.CurrentinvoiceId = docRef.id;
      console.log(
        "this is",
        this.CurrentserviceId + "and" + this.CurrentinvoiceId
      );
      setDoc(docRef, {
        isWalletUsed: false,
        walletAmountUsed: 0,
        walletId: "NA",
        amount: (
          this.totalAmount -
          this.discountedPrice +
          (this.totalAmount - this.discountedPrice) * 0.18
        ).toFixed(2),
        amountBeforeTax: this.totalAmount,
        tax: (this.totalAmount - this.discountedPrice) * 0.18,
        items: services,
        customerId: auth.currentUser.uid,
        customerName: this.$store.state.customer.userInfo.fullName,
        id: docRef.id,
        mechanicId: "NA",
        mechanicName: "NA",
        state: this.$store.state.currentState,
        paid: this.radioGroup == "Self" ? false : true,
        serviceId: pickupId,
        serviceType: "Scheduled",

        when: {
          date: dateIST.toLocaleDateString(),
          time: dateIST.toLocaleTimeString("en-US"),
        },
        orderId: this.orderId,
        discountedPrice: this.discountedPrice,

        //paymentId: response.paymentId.toString(),
        //signature: response.signature.toString(),
        gstList:
          this.$store.state.currentState == "Uttar Pradesh"
            ? cgstInfo
            : igstInfo,
      }).then(() => {
        console.log("Success");
        this.$store.state.cartItems = [];
        this.$store.state.cart = false;
        this.$store.state.isCheckoutClicked = false;
        this.$store.state.showOrderSummary = false;

        this.e6 = 1;
        this.orderSuccess = true;
        this.dialog = true;
      });
    },
    removeCoupon() {
      this.selectedCouponIndex = -1;
      this.discountedPrice = 0;
    },
    couponApplied(percent, idx) {
      this.selectedCouponIndex = idx;
      console.log("coupon applied");
      this.discountedPrice = this.totalAmount * (percent / 100);
      this.isCouponApplied = true;
    },

    async fetchCoupons() {
      const colRef = collection(db, "coupons");
      onSnapshot(colRef, (snapshot) => {
        let items = [];
        snapshot.forEach((item) => {
          items.push({ id: item.id, ...item.data() });
        });
        this.couponsList = items;
        //console.log("this is coupon", this.couponsList);
      });
    },
    goToSummaryPage() {
      this.$store.state.showOrderSummary = true;
    },
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
            mode: this.radioGroup,
            address: this.radioGroup == "Self" ? "NA" : this.address,
            date:
              this.radioGroup == "Self"
                ? "NA"
                : this.listDateSlots[this.dateChipIndex].value,
            time:
              this.radioGroup == "Self"
                ? "NA"
                : this.listTimeSlots[this.timeChipIndex],
            location: {
              latitude: this.$store.state.coordinates.latitude,
              longitude: this.$store.state.coordinates.longitude,
            },
            state: this.$store.state.currentState,
          },
          acceptedAt: {
            date: "NA",
            time: "NA",
          },
          couponInfo: {
            couponCode:
              this.selectedCouponIndex == -1
                ? "NA"
                : this.couponsList[this.selectedCouponIndex].code,
            isCouponUsed: this.selectedCouponIndex == -1 ? false : true,
          },
          vehicleInfo: {
            vehicleName: this.$store.state.vinfo.model,
            vehicleBrand: this.$store.state.vinfo.brand,
          },
        }).then(() => {
          this.createInvoice(docRef.id, services);
        });
      } else {
        this.$store.state.logindialog = true;
      }
    },
    async loadRazorPay() {
      return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = this.script;
        script.onload = () => {
          resolve(true);
        };
        script.onerror = () => {
          resolve(false);
        };
        document.body.appendChild(script);
      });
    },
    async initializeRazorpay() {
      const result = await this.loadRazorPay();
      if (!result) {
        alert("Failed to load razorpay script");
        return;
      }
      const options = {
        key: "rzp_test_ERgSVx1qxIlbw7",
        amount:
          (this.totalAmount -
            this.discountedPrice +
            (this.totalAmount - this.discountedPrice) * 0.18) *
          100,
        currency: `INR`,
        name: `QuickMechanic`,
        order_id: this.orderId,
        image:
          "https://firebasestorage.googleapis.com/v0/b/quickmechanic-india.appspot.com/o/Logo-2.png?alt=media&token=6f32c013-07d7-4e52-9efc-24625451c35f",
        handler: this.schedulePickupService,
        prefill: {
          name: this.$store.state.customer.userInfo.fullName,
          email:
            this.$store.state.customer.userInfo.email == ""
              ? "quickmechanicit@gmail.com"
              : this.$store.state.customer.userInfo.email,
          contact: this.$store.state.customer.userInfo.phoneNumber,
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    },
    async createRazorPayOrder() {
      console.log("Api Called");
      await axios
        .get(
          `https://us-central1-quickmechanic-india.cloudfunctions.net/razorpayModule-createNewRazorpayOrder1?payableAmount=${
            (this.totalAmount -
              this.discountedPrice +
              (this.totalAmount - this.discountedPrice) * 0.18) *
            100
          }`
        )
        .then((response) => {
          this.orderId = response.data.orderId;
          console.log(this.orderId);
          this.initializeRazorpay();
        });
    },
    closeCart() {
      this.$store.state.cart = false;
      this.$store.state.isCheckoutClicked = false;
      this.$store.state.showOrderSummary = false;
      this.radioGroup = "Pickup";
    },
    enableCheckOutButton() {
      if (this.$store.state.cartItems.length != 0) {
        this.$store.state.isCheckoutClicked = true;
      }
    },
    setAddress() {
      var location = JSON.parse(localStorage.getItem("location"));
      if (location != null) {
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
    this.fetchCoupons();
    //this.createRazorPayOrder();
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
  font-size: 18px;
  font-weight: 400;
}

.carttitleblock {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}

.v-list-item {
  padding: 0px;
}
</style>