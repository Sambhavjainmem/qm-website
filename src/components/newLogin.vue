<template>
  <div
    class="maindiv"
    v-click-outside="
      () => {
        wait = true;
      }
    "
  >
    <v-dialog v-model="this.$store.state.bSignupForm" fullscreen persistent>
      <SignupForm />
    </v-dialog>
    <div class="maindiv123">
      <div id="card123">
        <div id="login123">
          <v-btn
            icon
            dark
            style="position: absolute; top: 15px; right: 15px"
            @click="closedialog"
          >
            <v-icon class="black--text">mdi-close</v-icon>
          </v-btn>
          <div id="mainarea">
            <div class="area headder">LogIn/SignUp</div>
            <div class="area">
              <div
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  font-size: 14px;
                  font-weight: 700;
                  text-align: center;
                  color: rgba(70, 81, 102, 0.5);
                  margin-left: 10px;
                  margin-right: 10px;
                "
              >
                +91
              </div>
              <input
                id="username"
                name="username"
                placeholder=" Mobile Number*"
                minlength="3"
                maxlength="10"
                required
                v-model="phoneNumber"
              />
              <button
                v-if="clicked"
                id="getotp"
                @click="submit"
                style="color: #d50000"
              >
                Get OTP
              </button>
              <button v-if="!clicked" id="getotp" style="color: green">
                <v-icon>mdi-check-all</v-icon>
              </button>
              <!-- <v-btn v-if="!clicked" elevation="2" icon loading></v-btn> -->
            </div>
            <div class="area style">
              <div style="width: 200px">
                <v-otp-input length="6" plain v-model="otp"></v-otp-input>
              </div>
            </div>

            <div
              class="area"
              :style="
                !flag
                  ? 'background: #eaeff3;color: rgba(70, 81, 102, 0.3);cursor: pointer;color: white'
                  : 'background: #D50000; color: rgba(70, 81, 102, 0.3);cursor: pointer;color: white'
              "
              @click="
                () => {
                  confirm();
                  $store.state.loginpage = false;
                }
              "
            >
              LOGIN
            </div>
            <div
              class="area"
              style="
                border: none;
                cursor: pointer;
                color: red;
                font-size: 10px;
                margin-top: -5px;
              "
              id="log-in"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
        <script>
//   import vechileInfo from "../vechileInfo.vue";
//   import { db } from "../../firebase";
//   import { collection, getDocs } from "firebase/firestore";

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, getDoc } from "@firebase/firestore";
import SignupForm from "./SignupForm.vue";
export default {
  name: "newLogin",
  data() {
    return {
      loading: false,
      selection: 1,
      size: 0,
      otp: "",
      flag: false,
      clicked: true,
      phoneNumber: "",
    };
  },

  components: {
    SignupForm,
  },
  mounted() {
    this.clicked = true;
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
  },

  created() {},
  watch: {
    otp: function () {
      this.getBaseLog();
    },
  },

  methods: {
    async fetchCustomerData() {
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      this.$store.state.customer = docSnap.data();
      console.log(this.$store.state.customer.userInfo);
      if (this.$store.state.customer.role == "NA") {
        this.$store.state.bSignupForm = true;
      }
    },
    getBaseLog() {
      // this.size = Math.log(y) / Math.log(x);
      if (this.otp.length == 6 && this.phoneNumber.length == 10) {
        this.flag = true;
        console.log(this.flag);
      } else {
        this.flag = false;
      }
    },
    confirm() {
      // console.log("submit function is called");
      // console.log(this.$xyz);
      // this.$xyz = false;
      // console.log(this.$xyz);

      if (this.flag) {
        console.log("filled");
        this.confirmationResult
          .confirm(this.otp)
          .then((result) => {
            const user = result.user;
            console.log("this one", user.uid);
            this.fetchCustomerData();
            // getuserdata(user.uid);

            // console.log(this.$xyz);
            // this.boolotp = false;
            // this.$xyz = false;
            // this.dialog = false;
            // this.$store.state.logindialog = false;
            this.$store.state.logindialog = false;
            this.flag = false;
          })
          .catch((error) => {
            console.log(error);
            this.msg = "Wrong OTP";
            // User couldn't sign in (bad verification code?)
            // ...
          });
      } else {
        console.log("not filled");
      }
    },
    closedialog() {
      this.clicked = true;
      console.log("funtion colleed ddfia");

      this.$store.state.logindialog = false;
      console.log(this.$store.state.logindialog);
    },
    submit() {
      this.clicked = false;
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
    },
  },
};
</script>
    
    
    
<style scoped>
.maindiv {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(24px);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100000000000;
}
#getotp {
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  color: grey;
}
#username {
  width: 80%;
  /* border: 1 px solid blue; */
  height: 100%;
}
input ::after {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 29px;
  border: none;

  /* identical to box height */
}
/* input ::before {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 29px;
  border: none;


} */
.closebtn {
  position: absolute;
  top: 10px;
  right: 10px;
}
input {
  background-repeat: repeat-x;
  font-size: 16px;
  font-weight: 500;

  opacity: 0.5;
  /* color: rgba(70, 81, 102, 0.5); */
  margin-left: 10px;
  /* color: red; */
}
.maindiv123 {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100000000000;
}

#card123 {
  background-color: white;
}

#login123 {
  width: 445px;
  height: 445px;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.area {
  width: 100%;
  height: 45px;
  border: 1px solid #dde5eb;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 5px;
}
#mainarea {
  width: 360px;
  height: fit-content;
}
.headder {
  display: flex;

  align-items: center;
  text-align: center;
  font-size: 20px;
  color: #465166;
  margin-bottom: 48px;
  font-weight: 500;
  line-height: 1.3;
  border: none;
}
</style>
    