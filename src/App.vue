<template>
  <v-app>
    <div @click="$store.state.cart = true" v-if="!$store.state.cart" style="position: fixed; bottom: 40px;right: 30px;z-index: 10" >
          
       
        <v-btn fab >
          <v-badge bottom offset-x="30" offset-y="35" :content="cartLength" color="#D50000">
            <v-btn text :ripple="false" class="no-background-hover" @click="$store.state.cart = true">
              <v-icon class="mr-1 black--text">mdi-cart-variant</v-icon>
            </v-btn>
          </v-badge>
        </v-btn>
      </div>
     
    <div id="mobilenav">
      <v-app-bar-nav-icon  class="mr-2" @click="drawer = true"></v-app-bar-nav-icon>
      <a href="/"> <img class="logo" style="height:38px; width:30px" src="./assets/Logo-2 (1).png" /></a>
        <a>
          <div id="qm" @click="goToPages('home')">
            <div id="q">Quick</div>
            <div id="m">Mechanic</div>
          </div>
        </a>

        


        <div class="moblocName" >
          

          <div style="
              font-size: 15px;
              opacity: 0.7;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: center;
            "
            @click="$store.state.locdialog = true"
            >
            <div style="font-weight: bold; font-size:12px">
              {{ $store.state.location1 }}

            </div>
           
         
          </div>
        </div>
    </div>
    <div id="nav" style="height:72px">
      <div id="left">
        <a href="/"> <img class="logo" style="height:56px; width:48px" src="./assets/Logo-2 (1).png" /></a>
        <a>
          <div id="qm" @click="goToPages('home')">
            <div id="q">Quick</div>
            <div id="m">Mechanic</div>
          </div>
        </a>
        <div class="locName" @click="$store.state.locdialog = true">
          <v-icon id="locicon">mdi-map-marker </v-icon>
          <div style="
              font-size: 15px;
              opacity: 0.7;
              display: flex;
              flex-direction: row;
            ">
            <div style="font-weight: bold; font-size:20">
              {{ $store.state.location1 }}

            </div>
            <div style="mergin-left: 2px; margin-right: 2px" v-if="$store.state.location2">
              ,
            </div>
            {{ $store.state.location2 }}
          </div>
        </div>
      </div>

      <div id="right">
        <div id="link">
          <a>
            <div v-if="this.$store.state.currentPath == '/'" @click="goHome()"
              style="color: red; cursor: pointer; margin-left: 6px; margin-right: 30px; font-family: Arial, Helvetica, sans-serif;">
              Home
            </div>
            <div v-else @click="goHome()"
              style="color: black; cursor: pointer; margin-left: 6px; margin-right: 30px; font-family: Arial, Helvetica, sans-serif;">
              Home
            </div>
          </a>
          <a>
            <div v-if="this.$store.state.currentPath == '/services'" @click="goservices()"
              style="color: red; cursor: pointer; margin-left: 6px; margin-right: 30px; font-family: Arial, Helvetica, sans-serif;">
              Services
            </div>
            <div v-else @click="goservices()"
              style="color: black; cursor: pointer; margin-left: 6px; margin-right: 30px; font-family: Arial, Helvetica, sans-serif;">
              Services
            </div>
          </a>
          <a>
            <div v-if="this.$store.state.currentPath == '/trainingView'" @click="goToPages('training')"
              style="color: red; cursor: pointer; margin-left: 6px; margin-right: 30px; font-family: Arial, Helvetica, sans-serif;">
              Training
            </div>
            <div v-else @click="goToPages('training')"
              style="color: black; cursor: pointer; margin-left: 6px; margin-right: 30px; font-family: Arial, Helvetica, sans-serif;">
              Training
            </div>
          </a>

          <a>
            <div v-if="this.$store.state.currentPath == '/contactusView'" @click="goToPages('contactUs')"
              style="color: red; cursor: pointer; margin-left: 6px; margin-right: 30px; font-family: Arial, Helvetica, sans-serif;">
              Contact Us
            </div>
            <div v-else @click="goToPages('contactUs')"
              style="color: black; cursor: pointer; margin-left: 6px; margin-right: 30px; font-family: Arial, Helvetica, sans-serif;">
              Contact Us
            </div>
          </a>

        </div>
        <div id="link" v-if="this.$store.state.vinfo.brand != 'Brand'"
          style="font-family: Arial, Helvetica, sans-serif;">
          {{ this.$store.state.vinfo.brand }} -
          {{ this.$store.state.vinfo.model }}

          <div style="color: red; cursor: pointer; margin-left: 6px; font-family: Arial, Helvetica, sans-serif;"
            @click="$store.state.vdialog = true">
            (Change Car)
          </div>
        </div>
        <div id="link" v-if="this.$store.state.vinfo.brand == 'Brand'">
          <div style="color: red; cursor: pointer; margin-left: 6px; font-family: Arial, Helvetica, sans-serif;"
            @click="$store.state.vdialog = true">
            Select Car
          </div>
        </div>
        <div @click="$store.state.cart = true">
          <v-badge bottom offset-x="30" offset-y="35" :content="cartLength" color="#D50000">
            <v-btn text :ripple="false" class="no-background-hover" @click="$store.state.cart = true">
              <v-icon class="mr-1 black--text">mdi-cart-variant</v-icon>
            </v-btn>
          </v-badge>
        </div>
        <v-btn text @click="menu = !menu" style="background: rgba(0, 0, 0, 0.12)" rounded :ripple="false" class="mr-1"
          v-click-outside="onClickOutside">
          <v-icon>mdi-menu</v-icon>
          <v-icon class="ml-1">mdi-account-circle</v-icon>
        </v-btn>

        <v-dialog v-model="$store.state.logindialog" fullscreen :scrim="false" transition="dialog-bottom-transition">
          <newLogin />
        </v-dialog>
        <v-dialog v-model="this.$store.state.vdialog" fullscreen hide-overlay transition="dialog-bottom-transition"
          persistent>
          <v-card>
            <v-btn icon dark @click="this.$store.state.vdialog = false">
            </v-btn>

            <vechileInfo />
          </v-card>
        </v-dialog>

        <v-dialog v-model="$store.state.dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
          <SignupForm />
        </v-dialog>
        <v-dialog v-model="$store.state.becomedialog" fullscreen>
          <div style="background-color: white">
            <v-btn icon dark @click="$store.state.becomedialog = false" style="width: 1cm; top: ">
              <v-icon class="red--text ma-5 pa-5">mdi-close</v-icon>
            </v-btn>
            <getQuick style="height: 95vh" />
          </div>
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
      <v-dialog v-model="this.$store.state.bSignupForm" fullscreen persistent>
        <SignupForm />
      </v-dialog>
    </div>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item @click="goHome">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item @click="goservices">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Services</v-list-item-title>
          </v-list-item>

          <v-list-item @click="goToPages('training')" >
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Training</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Contact Us</v-list-item-title>
          </v-list-item>

          <v-list-item @click="
        () => {
          $store.state.logindialog = true;
          boolotp = false;
          loading = false;
        }" v-if="!user" >
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>LogIn</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="!user">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>SignUp</v-list-item-title>
          </v-list-item>
          <v-list-item v-if="user" @click="logoutfn"> 
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>


        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-dialog v-model="$store.state.locdialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <location-vue />
    </v-dialog>

    <v-dialog v-model="$store.state.cart" fullscreen hide-overlay transition="dialog-right-transition">
      <cart-vue />
    </v-dialog>

  
    <v-main>
     
      <router-view></router-view>
    </v-main>

    <div v-if="menu" style=" 
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
        padding-top:20px;
        flex-direction: column;
      ">
      <div class="item" style="font-family: Arial, Helvetica, sans-serif" @click="
        () => {
          $store.state.logindialog = true;
          boolotp = false;
          loading = false;
        }
      " v-if="!user">
        Login
      </div>
      <div class="item" style="font-family: Arial, Helvetica, sans-serif" @click="booklist" v-if="user">
        My Bookings
      </div>

      <div class="item" style="font-family: Arial, Helvetica, sans-serif" @click="goToPages('aboutUs')">
        About Us
      </div>







      <!-- <div class="item" style="font-family: Arial, Helvetica, sans-serif">
        FAQs
      </div> -->
      <div class="item" style="font-family: Arial, Helvetica, sans-serif" @click="$store.state.becomedialog = true">
        Become a Certified Mechanic
      </div>
      <div class="item" style="font-family: Arial, Helvetica, sans-serif">
        Call Us:
        <div style="color: red">1800 XXXX XXXX</div>
        <v-icon style="font-size: 15px" class="red--text">mdi-phone</v-icon>
      </div>
      <div class="item" @click="logoutfn" v-if="user" style="font-family: Arial, Helvetica, sans-serif">
        Log Out
      </div>
    </div>
    <v-dialog v-model="alertDialog" transition="dialog-bottom-transition" max-width="700">
      <template>
        <v-card height="300">
          <v-card-text>
            <v-row justify="center" align="center">
              <v-col cols="2">
                <v-icon class="pa-15" color="red" size="90px">mdi-alert-circle-outline</v-icon>
              </v-col>
              <v-col cols="10">
                <div class="text-h6 pa-12">
                  CAN'T LOGGED IN AS MECHANIC
                </div>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions class="justify-end">
            <v-btn text @click="alertDialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-app>
</template>





<script>
import "./appcss.css";
import axios from "axios";
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
      role: "",
      msg: "",
      btntitle: "Get OTP",
      wait: true,
      alertDialog: false,
      drawer: false,
      mini: true,
      isLoggedIn: false,
      height: 0,
      width: 0,
      dialog: false,
      dialogs: false,
      sdialogs: false,
      lat: "",
      long: "",
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



      otp: "Enter OTP",



      condition: false,


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
  destroyed() {
    window.removeEventListener("resize", this.screenSize);
  },
  created() {

    this.screenSize();

    window.addEventListener("resize", this.screenSize);
    console.log("this is path:", this.$route.path);
    this.firebaseData();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.$store.state.uid = user.uid;
        console.log(user);
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
    this.location();

  },

  methods: {
    goHome() {


      this.$store.state.currentPath = '/';

      this.$router.push("/");
    },
    goservices() {
      let data = "All services";

      this.$store.state.currentPath = '/services';

      this.$router.push({
        name: "scheduleService",
        params: { data },
      });
    },

    async location() {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          this.lat = position.coords.latitude;
          this.long = position.coords.longitude;
          (this.$store.state.coordinates = {
            latitude: this.lat,
            longitude: this.long,
          });
          var url = `https://geocode.maps.co/reverse?lat=${this.lat}&lon=${this.long}`;
          const response = await axios.get(url);
          const myArray = response.data.display_name.split(",");
          this.$store.state.location = response.data.display_name;
          this.$store.state.currentState = response.data.address.state;
          console.log(response.data.address)
          this.$store.state.location1 = myArray[0];
          this.$store.state.location2 = myArray[1];
          localStorage.setItem(
            "location1",
            JSON.stringify(this.$store.state.location1)
          );
          localStorage.setItem(
            "location2",
            JSON.stringify(this.$store.state.location2)
          );
          localStorage.setItem(
            "location",
            JSON.stringify(this.$store.state.location)
          );
          this.$store.state.locdialog = false;
          this.load = false;
        },
        (error) => {
          console.log(error);
        }
      );
    },
    screenSize() {
      let size = window.innerWidth - 162;
      let finalsize = size - (size % 384);
      document.documentElement.style
        .setProperty('--display-size', finalsize + "px");
    },

    goToPages(idx) {
      if (idx == "home") {

        this.$router.push(`/`);
      } else if (idx == "training") {

        this.$router.push(`/trainingView`);
      } else if (idx == "aboutUs") {

        this.$router.push(`/aboutusView`);
      } else if (idx == "contactUs") {

        this.$router.push(`/contactusView`);
      }
    },
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
        this.role = this.$store.state.customer.role;
        if (this.role == "NA") {
          console.log(this.role);
          this.$store.state.bSignupForm = true;
          console.log(this.$store.state.bSignupForm);
        }
        if (this.role == 'Mechanic') {
          this.alertDialog = true;
          this.logoutfn();
        }
        console.log(
          "Checkpoint Customer Details Stored",
          this.$store.state.customer.userInfo
        );
      });
    },

    logoutfn() {
      localStorage.removeItem("vdata");
      this.$store.state.vinfo = {
        brand: "Brand",
        model: "Model",
        fuel: "Fuel",
      };
      signOut(auth).then(() => {
        console.log("logout sechusdokfj");
        this.$router.replace("/");
        this.$store.state.customer = {};
        this.$store.state.uid = "";
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


