<template>
<v-app>
                            
    <v-navigation-drawer
    v-if= drawer
    class="header" fixed="top"

      app
      v-model="drawer"
      :mini-variant.sync="mini"
      
      permanent
      color="grey"
      width="185"
      
    >
      <v-list-item class="pa-2">
        <v-img
          max-height="40"
          max-width="40"
          src="./assets/Group_10826.png"
        ></v-img>
        <v-list-item-title class="white--text font-weight-bold px-2"
          > Quick Mechanic</v-list-item-title
        >
        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon color="white">mdi-home-alert</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              Home
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/services">
          <v-list-item-icon>
            <v-icon color="white">mdi-car-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              Our Services
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-item-icon>
              <v-icon color="white">mdi-comment-question</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="white--text">FAQs+</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item to="/doctorslist">
            <v-list-item-content>
              <v-list-item-title class="white--text"
                >Doctors List</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/DoctorSummaryView">
            <v-list-item-content>
              <v-list-item-title class="white--text"
                >Consultation Summary</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/DoctorReportsView">
            <v-list-item-content>
              <v-list-item-title class="white--text"
                >Consultation Report</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
        <v-list-item to="/contactus">
          <v-list-item-icon>
            <v-icon color="white">mdi-email</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              Contact Us
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item><v-list-item to="/notifications">
          <v-list-item-icon>
            <v-icon color="white ">mdi-account-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">
             Add Mechanic
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/signup">
          <v-list-item-icon>
            <v-icon color="white">mdi-account-wrench-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              Sign Up
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/login">
          <v-list-item-icon>
            <v-icon color="white ">mdi-login</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">
             Log In
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="logout">
          <v-list-item-icon>
            <v-icon color="white ">mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              Logout
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
<!-- 
    <v-toolbar dark class="primary">
    <v-toolbar-title>
      Quick Mechanic
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only"  >
      <v-vtn flat>
        
        View Meetups
      </v-vtn>
       <v-vtn flat>
        
        View Meetups
      </v-vtn>
       <v-vtn  flat class="ma-5">
        
        View Meetups
      </v-vtn>
      <v-vtn  flat class="ma-5">
        
        View Meetups
      </v-vtn>
      <v-vtn  flat class="ma-5">
        
        View Meetups
      </v-vtn>
      <v-vtn  flat class="ma-5">
        
        View Meetups
      </v-vtn>
      <v-vtn  flat class="ma-5">
        
        View Meetups
      </v-vtn>
      
    </v-toolbar-items>

    </v-toolbar>
 -->
 
    <div id="nav"  >
        <img class="logo" src="./assets/Group_10826.png" />
      <div id="middlee">
        <v-btn  text to="/" :ripple="false"  class="no-background-hover"  >Home</v-btn>
        <a href="#someSections">  <v-btn text :ripple="false"  class="no-background-hover" >  Our Services+ </v-btn> </a>
        <v-btn text to="/faqVue" :ripple="false"  class="no-background-hover" > FAQ+</v-btn>
        <a href="#bottom">  <v-btn  :ripple="false"  class="no-background-hover" text >Contact Us </v-btn> </a>
      
       
      </div>
    
    <div id="right">
      
      <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn 
        text 
        v-bind="attrs"
          v-on="on"
          :ripple="false"  class="no-background-hover"
         >Login</v-btn>
        
      </template>
      <div class="maindiv">
        <div class="closebtn">
      <v-btn
         icon
         dark
        
         @click="fff"
       >
         <v-icon class="black--text">mdi-close</v-icon>
       </v-btn>
        </div>




        <div class="maindivlogin">
    <div id="cardlogin">
      <div id="login">
        <form action="javascript:void(0);" method="get">
          <fieldset class="clearfixlogin">
            <p v-if="!boolotp">
              <span class="fontawesome-user"></span
              ><input
                type="text"
                value="Enter Phone No"
                onBlur="if(this.value == '') this.value = 'Username'"
                onFocus="if(this.value == 'Username') this.value = ''"
                required
                v-model="phoneNumber"
              />
            </p>
            <!-- JS because of IE support; better: placeholder="Username" -->

            <p v-if="!boolotp">
              <input
                type="submit"
                value="Get OTP"
                @click="loggin"
                id="log-in"
              />
            </p>
            <p>
              <template>
                <div>
                  <div
                    class="ma-auto position-relative"
                    style="max-width: 300px"
                    v-if="boolotp"
                  >
                    <v-otp-input
                      v-model="otp"
                      :disabled="loading"
                      @finish="this.$xyz = false"
                    ></v-otp-input>
                    <v-overlay absolute :value="loading">
                      <v-progress-circular
                        indeterminate
                        color="primary"
                      ></v-progress-circular>
                    </v-overlay>
                  </div>
                </div>
              </template>
            </p>
            <p v-if="boolotp">
              <input type="submit" value="Submit" @click="submit" />
            </p>
            <!-- JS because of IE support; better: placeholder="Password" -->
          </fieldset>
        </form>
        <div id="skt"></div>

        <p>
          Not a member? <a href="#">Sign up now</a
          ><span class="fontawesome-arrow-right"></span>
        </p>
      </div>
      <!-- end login -->
    </div>
  </div>
























        
      </div>



      
    
    </v-dialog>


      
      <v-btn text :ripple="false"  class="no-background-hover" to="/signup"  >Sign Up</v-btn>
      <v-dialog
      v-model="dialogs"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrss }">
        <v-btn  text       
      v-bind="attrss"
          v-on="on"
          class="blue"
      >Add Mechanic</v-btn>
      </template>
      
      <v-card>
      
       <v-btn
         icon
         dark
         @click="dialogs = false"
         
       >
         <v-icon class="black--text">mdi-close</v-icon>
       </v-btn>
     
      
      
  
    
       <getQuick />
           
    
   </v-card>
 </v-dialog>



      <v-icon>mdi-account</v-icon>
    </div>
    </div>
    


   

   
     



 
   <v-main>
      <router-view></router-view>
    </v-main>
    
  </v-app>
  </template>





<script>
  import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";


 
    import './appcss.css';
    import getQuick from './components/getQuick.vue';
   



export default {
  name: "App",
  data() {
    return {
      drawer: false,
      mini: true,
      isLoggedIn: false,
      height: 0,
      width: 0,
      dialog : false,
      dialogs : false,






      loading: false,
    snackbar: false,
    snackbarColor: "default",
    otp: "",
    text: "",
    expectedOtp: "133707",
    boolotp: false,

    phoneNumber: "+917352540343",
    confirmationResult: null,
    otpnum: null,
    recaptchaVerifier: null,
    recaptchaWidgetId: null,
    confirmResult: null,
    smsSent: false,











      ac: {
      header : "AC Maintenance & Service",
      header2 : "AC check-up",
      subheader : "INR 699 + PART & SERVICE COST",
     
        notifications: false,
        sound: true,
        widgets: false,

    },
    wheel: {
      header : "AC Maintenance & Service",
      header2 : "AC check-up",
      subheader : "INR 699 + PART & SERVICE COST"

    },
    battries: {
      header : "AC Maintenance & Service",
      header2 : "AC check-up",
      subheader : "INR 699 + PART & SERVICE COST"

    },
    danting: {
      header : "AC Maintenance & Service",
      header2 : "AC check-up",
      subheader : "INR 699 + PART & SERVICE COST"

    },
    };
  },
    components: {
   getQuick,
 
  },


  mounted() {
    const auth = getAuth();
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

    // To apply the default browser preference instead of explicitly setting it.
    // firebase.auth().useDeviceLanguage();
  },





  methods: {

      fff(){
        this.dialog = false
      },





      

    submit() {
      console.log("submit function is called");
      console.log(this.$xyz);
      this.$xyz = false;
      console.log(this.$xyz);
      this.confirmationResult
        .confirm(this.otp)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(user);
          console.log(this.$xyz);
          this.boolotp = true;
          this.$xyz = false;

          // ...
        })
        .catch((error) => {
          console.log(error);
          // User couldn't sign in (bad verification code?)
          // ...
        });
    },

    loggin() {
      this.height =  window.innerHeight;
    this.width =  window.innerWidth;
     window.addEventListener("resize", this.resizeHandler);
      this.recaptchaVerifier.render().then((widgetId) => {
        this.recaptchaWidgetId = widgetId;
        const phoneNumber = "+91" + this.phoneNumber;
        const appVerifier = this.recaptchaVerifier;

        const auth = getAuth();

        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
          .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            this.confirmationResult = confirmationResult;
            this.boolotp = true;
            // ...
          })
          .catch((error) => {
            console.log(error);
          });
      });
    },













   
    
     resizeHandler()  {
        this.height =  window.innerHeight;
        this.width =  window.innerWidth;
         if(this.width <990){
      this.drawer = true;
     }
     if(this.width >990){
      this.drawer = false;
     }
    },

   
    },
 
   


};

</script>


