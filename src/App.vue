<template>
  <v-app>
    <div id="nav" style="height:72px">
      <div id="left">
        <a href="/"> <img class="logo" style="height:48px; width:48px" src="./assets/Logo-2 (1).png" /></a>
        <a href="/">
          <div id="qm">
            <div id="q">Quick</div>
            <div id="m">Mechanic</div>
          </div>
        </a>
        <div class="locName" @click="$store.state.locdialog = true">
          <v-icon id="locicon">mdi-map-marker </v-icon>
          <div
            style="
              font-size: 15px;
              opacity: 0.7;
              display: flex;
              flex-direction: row;
            "
          > 
          <div style="font-weight: bold; font-size:20">
            {{ $store.state.location1 }}

          </div>
            <div
              style="mergin-left: 2px; margin-right: 2px"
              v-if="$store.state.location2"
            >
              ,
            </div>
            {{ $store.state.location2 }}
          </div>
        </div>
      </div>
      <!-- 
      <v-navigation-drawer v-model="$store.state.cart" right app width="350">
        <cart-vue />
      </v-navigation-drawer> -->
      <div id="right">
        <div id="link">
          {{ this.$store.state.vinfo.brand }} /
          {{ this.$store.state.vinfo.model }} /
          {{ this.$store.state.vinfo.fuel }}
          <div
          v-if="this.$store.state.vinfo.brand != 'Brand'"
            style="color: red; cursor: pointer; margin-left: 6px"
            @click="$store.state.vdialog = true"
          >
            (Change Car)
          </div>
          <div v-if="this.$store.state.vinfo.brand == 'Brand'"
            style="color: red; cursor: pointer; margin-left: 6px"
            @click="$store.state.vdialog = true"
          >
            (Select Car)
          </div>
        </div>
        

        <v-badge
          bottom
          offset-x="30"
          offset-y="35"
          :content="cartLength"
          color="#D50000"
        >
          <v-btn
            text
            :ripple="false"
            class="no-background-hover"
            @click="$store.state.cart = true"
          >
            <v-icon class="mr-1 black--text">mdi-cart-variant</v-icon>
          </v-btn>
        </v-badge>

        <v-btn
          text
          @click="menu = !menu"
          style="background: rgba(0, 0, 0, 0.12)"
          rounded
          :ripple="false"
          class="mr-1"
          v-click-outside="onClickOutside"
        >
          <v-icon>mdi-menu</v-icon>
          <v-icon class="ml-1">mdi-account-circle</v-icon>
        </v-btn>

        <v-dialog
          v-model="$store.state.logindialog"
          fullscreen
          :scrim="false"
          transition="dialog-bottom-transition"
        >
          <newLogin />
        </v-dialog>
        <v-dialog
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

        <v-dialog
          v-model="$store.state.dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <SignupForm />
        </v-dialog>
        <v-dialog v-model="dialogs">
          <v-btn icon dark @click="dialogs = false">
            <v-icon class="white--text">mdi-close</v-icon>
          </v-btn>
          <getQuick />
        </v-dialog>

        <!-- <v-btn
          text
          :ripple="false"
          class="no-background-hover"
          v-if="!user"
          @click="$store.state.dialog = true"
          >Sign Up</v-btn
        > -->

        <!-- <v-btn
          text
          :ripple="false"
          @click="logoutfn"
          class="no-background-hover"
          to="/"
          v-if="user"
          >Log Out</v-btn
        > -->

        <!-- <v-btn icon v-if="user">
          <v-icon>mdi-account</v-icon>
        </v-btn> -->
      </div>
    </div>
    <v-dialog
      v-model="$store.state.locdialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <location-vue />
    </v-dialog>

    <v-dialog
      v-model="$store.state.cart"
      fullscreen
      hide-overlay
      transition="dialog-right-transition"
    >
      <cart-vue />
    </v-dialog>

    <v-main>
      <router-view></router-view>
    </v-main>

    <div
      v-if="menu"
      style="
        position: fixed;
        top: 56px;
        right: 0px;
        width: 231px;
        height: 304px;
        background: rgba(255, 255, 255, 0.87);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.26);
        backdrop-filter: blur(24px);
        border-radius: 0px 0px 16px 16px;
        display: flex;
        flex-direction: column;
      "
    >
      <div
        class="item"
        style="font-family: Arial, Helvetica, sans-serif"
        @click="
          () => {
            $store.state.logindialog = true;
            boolotp = false;
            loading = false;
          }
        "
        v-if="!user"
      >
        Login
      </div>
      <div
        class="item"
        style="font-family: Arial, Helvetica, sans-serif"
        @click="booklist"
        v-if="user"
      >
        My Bookings
      </div>
      <div class="item" style="font-family: Arial, Helvetica, sans-serif">
        Resources
      </div>
      <div class="item" style="font-family: Arial, Helvetica, sans-serif">
        FAQs
      </div>
      <div
        class="item"
        style="font-family: Arial, Helvetica, sans-serif"
        @click="dialogs = true"
      >
        Become a Quick Mechanic
      </div>
      <div class="item" style="font-family: Arial, Helvetica, sans-serif">
        Call Us:
        <div style="color: red">1800 XXXX XXXX</div>
        <v-icon style="font-size: 15px" class="red--text">mdi-phone</v-icon>
      </div>
      <div
        class="item"
        @click="logoutfn"
        v-if="user"
        style="font-family: Arial, Helvetica, sans-serif"
      >
        Log Out
      </div>
    </div>
  </v-app>
</template>





<script>
import "./appcss.css";
import getQuick from "./components/getQuick.vue";
import { auth, db } from "./firebase";
import { signOut, onAuthStateChanged } from "@firebase/auth";
import { collection, getDocs, doc, onSnapshot } from "firebase/firestore";
import SignupForm from "./components/SignupForm.vue";
import locationVue from "./components/locationVue.vue";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import CartVue from "./components/cartVue.vue";
import newLogin from "./components/newLogin.vue";
import vechileInfo from "./components/vechileInfo.vue";

export default {
  name: "App",
  restrictChars: function ($event) {
    if (
      $event.charCode === 0 ||
      /\d/.test(String.fromCharCode($event.charCode))
    ) {
      console.log("clicked");
      return true;
    } else {
      $event.preventDefault();
      console.log("clicked");
    }
  },
  data() {
    return {
      msg: "",
      btntitle: "Get OTP",
      wait: true,

      drawer: true,
      mini: true,
      isLoggedIn: false,
      height: 0,
      width: 0,
      dialog: false,
      dialogs: false,
      sdialogs: false,

      loading: false,

      snackbarColor: "default",
      menu: false,

      text: "",

      boolotp: false,

      phoneNumber: "Enter Phone No",
      confirmationResult: null,
      otpnum: null,
      recaptchaVerifier: null,
      recaptchaWidgetId: null,
      confirmResult: null,
      smsSent: false,
      user: false,

      snackbar: false,

      otp: "Enter OTP",

      expectedOtp: "133707",

      condition: false,

      ac: {
        header: "AC Maintenance & Service",
        header2: "AC check-up",
        subheader: "INR 699 + PART & SERVICE COST",

        notifications: false,
        sound: true,
        widgets: false,
      },
      wheel: {
        header: "AC Maintenance & Service",
        header2: "AC check-up",
        subheader: "INR 699 + PART & SERVICE COST",
      },
      battries: {
        header: "AC Maintenance & Service",
        header2: "AC check-up",
        subheader: "INR 699 + PART & SERVICE COST",
      },
      danting: {
        header: "AC Maintenance & Service",
        header2: "AC check-up",
        subheader: "INR 699 + PART & SERVICE COST",
      },
    };
  },
  components: {
    getQuick,
    SignupForm,
    locationVue,
    CartVue,
    newLogin,
    vechileInfo,
  },
  computed: {
    cartLength() {
      if (this.$store.state.cartItems.length == 0) {
        return "0";
      } else {
        return this.$store.state.cartItems.length;
      }
    },
  },
  created() {
    this.firebaseData();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.$store.state.uid = user.uid;
        console.log("userid =", this.$store.state.uid);
        this.user = true;
        this.getuserdata(this.$store.state.uid);
      } else {
        this.user = false;
        console.log("userid =", this.$store.state.uid);
      }
    });

    this.$store.state.vinfo;
    var vobj = JSON.parse(localStorage.getItem("vdata"));
    var location1 = JSON.parse(localStorage.getItem("location1"));
    var location2 = JSON.parse(localStorage.getItem("location2"));
    if (location1 == null && location2 == null) {
      console.log("location one and two is null");
    } else {
      console.log("location one and two", location1, location2);
      this.$store.state.location1 = location1;
      this.$store.state.location2 = location2;
      console.log(
        "location one and two is set",
        this.$store.state.location1,
        this.$store.state.location2
      );
    }
    if (vobj == null) {
      console.log("vobj", vobj);
    } else {
      this.$store.state.vinfo = vobj;
    }
    console.log("local sorage", this.$store.state.vinfo.brand);
  },

  methods: {
    booklist() {
      console.log("clicked");
      this.$router.push({ path: "/bookingList" });
    },
    onClickOutside() {
      this.menu = false;
    },
    async firebaseData() {
      let items = [];
      const querySnapshot = await getDocs(collection(db, "services"));
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      this.sservice = items.filter((item) => item.type == "Scheduled Services");
      this.vservice = items.filter(
        (item) => item.type == "Value Added Services"
      );
    },

    getuserdata(uid) {
      console.log("Checkpoint: getUserData Called");
      const docRef = doc(db, "users", uid);
      onSnapshot(docRef, (doc) => {
        this.$store.state.customer = doc.data();
        console.log(
          "Checkpoint Customer Details Stored",
          this.$store.state.customer.userInfo
        );
      });
    },

    logoutfn() {
      signOut(auth).then(() => {
        console.log("logout sechusdokfj");
        this.router.replace("/");
        this.$store.state.customer = {};
      });
    },
    fff() {
      this.dialog = false;
    },
    submit() {
      console.log("submit function is called");
      console.log(this.$xyz);
      this.$xyz = false;
      console.log(this.$xyz);
      this.confirmationResult
        .confirm(this.otp)
        .then((result) => {
          const user = result.user;
          console.log("this one", user.uid);

          // getuserdata(user.uid);

          console.log(this.$xyz);
          this.boolotp = false;
          this.$xyz = false;
          this.dialog = false;
          this.$store.state.logindialog = false;
        })
        .catch((error) => {
          console.log(error);
          this.msg = "Wrong OTP";
          // User couldn't sign in (bad verification code?)
          // ...
        });
    },

    loggin() {
      this.wait = false;
      if (!this.condition) {
        auth.useDeviceLanguage();
        this.recaptchaVerifier = new RecaptchaVerifier(
          "log-in",
          {
            size: "invisible",
            callback: (response) => {
              // reCAPTCHA solved, allow signInWithPhoneNumber.
              // onSignInSubmit();
              console.log(response);
            },
          },
          auth
        );
      }

      this.recaptchaVerifier.render().then((widgetId) => {
        this.recaptchaWidgetId = widgetId;
        const phoneNumber = this.phoneNumber;
        const appVerifier = this.recaptchaVerifier;

        signInWithPhoneNumber(auth, "+91" + phoneNumber, appVerifier)
          .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            this.confirmationResult = confirmationResult;
            this.boolotp = true;
            // ...
          })
          .catch((error) => {
            console.log(error);
            this.msg = "Entered Wrong OTP";
          });
      });

      // const mechanics=collection(db,"mechanics");
      // const sosList=collection(db,"sos");
    },
  },
};
</script>


