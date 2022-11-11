<template>
    <div id ="maincontainer">
        <h1>this is login practice</h1>
        <div id="suraj"></div>
        <br>
            <div id="recaptcha-container" style="background-color:#1b1a1a;width:300px;margin:auto;">
            </div>
            <br>
        <div>
                <button class="btn btn-primary" id="log-in" @click="submit">Login</button>
        </div>
    </div>

</template>
<script>
import { getAuth ,RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";
export default {
 name: 'LoginPractive',
 data() {
      return {
        phoneNumber: "+917352540343", 
        confirmationResult:null,
        otpnum:null,
        recaptchaVerifier:null,
        recaptchaWidgetId:null,
        confirmResult:null,
        smsSent:false,
      }
    },
 components: {

  
  },
  mounted()
    {
        const auth = getAuth();
       auth.useDeviceLanguage();
        this.recaptchaVerifier = new RecaptchaVerifier('log-in', {
                'size': 'invisible',
                'callback': (response) => {
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                    // onSignInSubmit();
                    console.log(response);
                }
        }, auth);

        // To apply the default browser preference instead of explicitly setting it.
        // firebase.auth().useDeviceLanguage();      
    },
    methods:{
        submit()
        {
            this.recaptchaVerifier.render().then((widgetId) => {
            this.recaptchaWidgetId = widgetId;
             const phoneNumber = this.phoneNumber;
            const appVerifier = this.recaptchaVerifier;

            const auth = getAuth();
            signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                    // SMS sent. Prompt user to type the code from the message, then sign the
                    // user in with confirmationResult.confirm(code).
                    this.confirmationResult = confirmationResult;
      // ...
            }).catch((error) => { console.log(error) })

            })
           
            

        },



       
    },

}


</script>

<style scoped>
#maincontainer {
    width: 100%;
    height: 500px;
}

</style>
