<template>
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
</template>
<script>
// import {auth} from "../firebase"
// import { RecaptchaVerifier, getAuth, signInWithPhoneNumber } from "firebase/auth";

// const phoneNumber = getPhoneNumberFromUserInput();
// const appVerifier = window.recaptchaVerifier;
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

export default {
  name: "LoginView",
  components: {},
  data: () => ({
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
  }),
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
          this.$store.commit('changeDilog',false)
        },
      },
      auth
    );

    // To apply the default browser preference instead of explicitly setting it.
    // firebase.auth().useDeviceLanguage();
  },

  methods: {
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
  },
};
</script>
<style scoped>
.maindivlogin {
  background-color: rgba(0, 0, 0, 0.297);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

@import url(http://weloveiconfonts.com/api/?family=fontawesome);
/* ---------- ERIC MEYER'S RESET CSS ---------- */
/* ---------- http://meyerweb.com/eric/tools/css/reset/ ---------- */
@import url(http://meyerweb.com/eric/tools/css/reset/reset.css);

/* ---------- FONTAWESOME ---------- */
[class*="fontawesome-"]:before {
  font-family: "FontAwesome", sans-serif;
}

/* ---------- GENERAL ---------- */
* {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

*:before,
*:after {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

#cardlogin {
  background-color: rgba(45, 45, 41, 0.353);
}

a {
  color: #eee;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

input {
  border: none;
  font-family: "Open Sans", Arial, sans-serif;
  font-size: 14px;
  line-height: 1.5em;
  padding: 0;
  -webkit-appearance: none;
}

p {
  line-height: 1.5em;
}

.clearfixlogin {
  *zoom: 1;
}

.clearfixlogin:before,
.clearfixlogin:after {
  content: " ";
  display: table;
}

.clearfixlogin:after {
  clear: both;
}

#login {
  width: 280px;
  margin: 40px;
}

#login form span {
  background-color: #363b41;
  border-radius: 3px 0px 0px 3px;
  color: #606468;
  display: block;
  float: left;
  height: 50px;
  line-height: 50px;
  text-align: center;
  width: 50px;
}

#login form input {
  height: 50px;
}

#login form input[type="text"],
input[type="password"] {
  background-color: #3b4148;
  border-radius: 0px 3px 3px 0px;
  color: white;
  margin-bottom: 1em;
  padding: 0 16px;
  width: 230px;
}

#login form input[type="submit"] {
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  background-color: #ea4c88;
  color: #eee;
  font-weight: bold;
  margin-bottom: 2em;
  text-transform: uppercase;
  width: 280px;
}

#login form input[type="submit"]:hover {
  background-color: #d44179;
}

#login > p {
  text-align: center;
}

#login > p span {
  padding-left: 5px;
}
</style>

