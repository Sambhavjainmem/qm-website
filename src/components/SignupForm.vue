<template>
  <div
    class="maindiv"
    v-click-outside="
      () => {
        wait = true;
      }
    "
  >
  <v-dialog
          v-model="bSignupForm"
    
      width="500"
      
   
          persistent
        >
          <SignupForm />
        </v-dialog>
    <div class="maindiv123">
      <div id="card123">
        <div id="login123">
          
          <div id="mainarea">
            <div class="area headder">SignUp</div>
            <div class="area">
              
              <input
                id="username"
                name="username"
                placeholder="Enter Name"
               
                required
                v-model="name"
              />
              <!-- <button
                v-if="clicked"
                id="getotp"
                @click="submit"
                style="color: #d50000"
              >
                Get OTP
              </button> -->
              <!-- <button
                v-if="!clicked"
                id="getotp"
                
                style="color: green; "
              >
               <v-icon>mdi-check-all</v-icon>
              </button> -->
              <!-- <v-btn v-if="!clicked" elevation="2" icon loading></v-btn> -->
            </div>
            <div class="area style">
           
                <input
                id="username"
                name="username"
                placeholder="Enter Email"
               
                required
                v-model="email"
              />
            
            </div>

            <div
              class="area"
              :style="
                false
                  ? 'background: #eaeff3;color: rgba(70, 81, 102, 0.3);cursor: pointer;color: white'
                  : 'background: #D50000; color: rgba(70, 81, 102, 0.3);cursor: pointer;color: white'
              "
              @click="
                () => {
                  sendData();
                  this.$store.state.bSignupForm = false;
                }
              "
            >
              Submit
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
import { updateDoc, doc, } from "@firebase/firestore";
import { db } from '../firebase'
export default {
  name: "SignupForm",
  components: {},

  data() {
    return {
      name: "",
      email: "",



      rules: {
        required: value => !!value || 'Required.',
        counter: value => value.length <= 20 || 'Max 20 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      }
    };
  },

  methods: {

    sendData() {
      const userData = {
        "userInfo.fullName": this.name,
        "userInfo.email": this.email,
        "role": "Customer",


      };
      const userref = doc(db, "users", this.$store.state.uid);
      updateDoc(userref, userData)
        .then(() => {

          this.$store.state.dialog = false;
        })
        .catch((error) => {
          console.log("errroo upddate", error)
        })


    },


   





  },
  created() { },
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
    

