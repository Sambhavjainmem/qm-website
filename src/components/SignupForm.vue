<template>
  <div id="login-box">
    <div class="left">
      <h1>Personal Info..</h1>

      <input type="text" name="username" placeholder="Enter Full Name" />
      <input type="text" name="gender" placeholder="Gender" />
      <input type="date"  id="date" placeholder="DD/MM/YEAR">
      <input type="text" name="country" disabled placeholder="INDIA" />
      <input type="text" name="state" placeholder="State" />
      <input type="text" name="District" placeholder="District" />
      <input type="text" name="city" placeholder="Postal Code" />
    </div>

    <div class="right">
      <h1>Vehicle Info..</h1>

      
      
      <v-combobox
        v-model="vtype"
        :items="items"
      
       
        outlined
        
      ></v-combobox>
      <v-combobox
        v-model="vbrand"
        :items="items"
      
       
        outlined
      ></v-combobox>
      <v-combobox
        v-model="vname"
        :items="items"
       
       
        outlined
      ></v-combobox>
    
      <v-combobox
        v-model="vftype"
        :items="items"
       
       
        outlined
      ></v-combobox>
      
      <v-combobox
        v-model="vtransmission"
        :items="items"
       
       
        outlined
      ></v-combobox>
      

      <input type="submit" name="signup_submit" value="Sign me up" />
    </div>
    <div class="or">
      <div class="profile-pic-div">
        <img src="../assets/image.jpg" id="photo" />
        <input type="file" id="file" />
        <label for="file" id="uploadBtn">Choose Photo</label>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SignupForm",
  components: {},
  props: {
    companyName: {
      type: String,
      default: "Quick Mechanic",
    },
  },
  data() {
    return {
      vtype: ["Vechile Type"],
      vbrand: ["Vechile Brand"],
      vname: ["Vechile Name"],
      vftype: ["Fuel Type"],
      vtransmission: ["Transmission"],
      items: ["Programming", "Design", "Vue", "Vuetify"],
      elevate: false,

      reset: 0,
      email: "",
      name: "",
      nameRule: [(v) => !!v || "User Name is required"],
      emailRule: [
        (v) => !!v || "Email is required",
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
      showPassword: false,
      passwordRule: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length <= 15 && v.length >= 8) ||
          "Password must be between 8 to 15 characters",
      ],
      showCnfrmPassword: false,
      cnfrmpasswordRule: [
        (v) => !!v || "Confirm Password is required",
        (v) => v === this.password || "Password doesn't match",
      ],
      countryRule: [(v) => !!v || "Country is required"],
      //Below is the regex validation of mobile number
      mobnumberRule: [
        (v) => !!v || "Mobile Number is required",
        (v) =>
          /^(\+\d{1,3}[- ]?)?\d{10}$/.test(v) || "Mobile Number must be valid",
      ],
      password: "",
      cnfrmpassword: "",
      mobnumber: "",
      country: "",
      countryCode: "",
      snackbar: false,
      text: "Sign Up Successful!!!",
    };
  },
  mounted() {
    this.callApi();
    const options = {
      method: "GET",
      url: "https://andruxnet-world-cities-v1.p.rapidapi.com/",
      params: { query: "paris", searchby: "city" },
      headers: {
        "X-RapidAPI-Key": "e78cc4045emsh013b0966a5b43e6p1a5d3bjsnfbe395dc477c",
        "X-RapidAPI-Host": "andruxnet-world-cities-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  },
  beforeUpdate() {
    this.updatingCountry();
  },
  methods: {
    
   
    
    
  },
  created() {},
};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);
*:focus {
  outline: none;
}

body {
  margin: 0;
  padding: 0;
  background: #ddd;
  font-size: 16px;
  color: #222;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
}

#login-box {
  position: relative;
  margin: 5% auto;
  width: 675px;
  height: 475px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.left {
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 40px;
  width: 300px;
  height: 400px;
}

h1 {
  margin: 0 0 20px 0;
  font-weight: 300;
  font-size: 28px;
}

input[type="text"],
input[type="password"] {
  display: block;
  box-sizing: border-box;
  margin-bottom: 20px;
  padding: 4px;
  width: 220px;
  height: 32px;
  border: none;
  border: 1px solid #aaa;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 15px;
  transition: 0.2s ease;
}

input[type="text"]:focus,
input[type="password"]:focus {
  border-bottom: 2px solid #16a085;
  color: #16a085;
  transition: 0.2s ease;
}

input[type="submit"] {
  margin-top: 28px;
  width: 120px;
  height: 32px;
  background: #16a085;
  border: none;
  border-radius: 2px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  transition: 0.1s ease;
  cursor: pointer;
}

input[type="submit"]:hover,
input[type="submit"]:focus {
  opacity: 0.8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  transition: 0.1s ease;
}

input[type="submit"]:active {
  opacity: 1;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  transition: 0.1s ease;
}

.or {
  position: absolute;
  top: 0px;
  left: calc(50% - 50px);
  width: 100px;
  height: 100px;
  background: #ddd;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  line-height: 40px;

  background-color: blue;
}

.right {
  position: absolute;
  top: 0;
  right: 0;
  box-sizing: border-box;
  padding: 40px;
  width: 300px;
  height: 400px;
  background: url("https://goo.gl/YbktSj");
  background-size: cover;
  background-position: center;
  border-radius: 0 2px 2px 0;
}

.right .loginwith {
  display: block;
  margin-bottom: 40px;
  font-size: 28px;
  color: #fff;
  text-align: center;
}

button.social-signin {
  margin-bottom: 20px;
  width: 220px;
  height: 36px;
  border: none;
  border-radius: 2px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  transition: 0.2s ease;
  cursor: pointer;
}

button.social-signin:hover,
button.social-signin:focus {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  transition: 0.2s ease;
}

button.social-signin:active {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  transition: 0.2s ease;
}

button.social-signin.facebook {
  background: #32508e;
}

button.social-signin.twitter {
  background: #55acee;
}

button.social-signin.google {
  background: #dd4b39;
}

.profile-pic-div {
  height: 100%;
  width: 100%;

  border-radius: 50%;
  overflow: hidden;
  border: 1px solid grey;
}

#photo {
  height: 100%;
  width: 100%;
}

#file {
  display: none;
}

#uploadBtn {
  height: 40px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  color: wheat;
  line-height: 30px;
  font-family: sans-serif;
  font-size: 15px;
  cursor: pointer;
  display: none;
}
#date {
  
  display: block;
    box-sizing: border-box;
    margin-bottom: 20px;
    padding: 4px;
    width: 220px;
    height: 32px;
    border: none;
    border-bottom: 1px solid #aaa;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 15px;
    transition: 0.2s ease;  
    
 
  
}
</style>
