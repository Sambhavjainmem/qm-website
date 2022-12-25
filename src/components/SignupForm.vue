<template>
  <div id="body">
    <div id="l1">
      <div class="closebtn">
        <v-btn icon dark @click="$store.state.dialog = false">
          <v-icon class="black--text">mdi-close</v-icon>
        </v-btn>
      </div>
      <div id="l1-1">
        <div id="l1-1-1">
          <div id="l1-1-1-1">
            <img width="98px" height="auto" src="../assets/Logo-2 (1).png" />
          </div>
          <div id="l1-1-1-2">
            <div id="lmiht">LET'S MAKE IT HAPPY TOGETHER</div>
          </div>
        </div>
      </div>

      <div id="l1-2">
        <div id="signin">
          Already you have an account?<a href="/" @click="ggg">sign in here</a>
        </div>
        <div id="l1-2-1">Create an Account</div>
        <div id="l1-2-2">
          <div id="l1-2-2-1">
            <div class="left">
              <div class="frmhead">Personal Details</div>

              <input
                class="inputform"
                type="text"
                name="username"
                v-model="name"
                placeholder="Enter Full Name"
              />
              <input
                class="inputform"
                type="date"
                id="date"
                placeholder="DD/MM/YEAR"
                v-model="dob"
              />
              <input
                class="inputform"
                type="text"
                name="country"
                placeholder="Mobile"
                v-model="mobile"
              />
              <input
                class="inputform"
                type="text"
                name="email"
                placeholder="E-mail"
                v-model="email"
              />
            </div>
          </div>
          <div id="l1-2-2-2">
            <div class="left">
              <div class="frmhead">Car Details</div>

              <select class="inputform" @change="onChange($event)">
                <option value="" selected disabled>Select Brand</option>
                <option v-for="item in items" :value="item" :key="item">
                  {{ item }}
                </option>
              </select>
              <select class="inputform" @change="onChangecar($event)">
                <option value="0">
                  Select car<v-icon>mdi--google</v-icon>
                </option>
                <option v-for="item in caritems" :value="item" :key="item">
                  {{ item }}
                </option>
              </select>
              <select class="inputform" @change="onChangefuel($event)">
                <option value="0">Fuel Type<v-icon>mdi--google</v-icon></option>
                <option value="Desial">Desial</option>
                <option value="Petrol">Petrol</option>
                <option value="EV">EV</option>
                <option value="Gass">Gass</option>
              </select>
            </div>
          </div>

          <v-btn
            style="
              position: absolute;
              bottom: 0px;
              display: flex;
              justify-self: center;
              align-self: center;
              background: #d50000;
              border-radius: 8px;
              color: white;
              font-family: 'Inter';
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 17px;
            "
            @click="sendData"
            >Create Account</v-btn
          >
        </div>
        <div id="l1-2-3"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { updateDoc ,getDocs,collection,doc,arrayUnion} from "@firebase/firestore";
import {db} from '../firebase'
export default {
  name: "SignupForm",
  components: {},

  data() {
    return {
      name: "",
      email: "",
      dob: "",
      mobile: "",
      items: [],
      caritems: [],
      brand: "",
      model: "",
      fueltype: "",
    };
  },
  mounted() {
    this.firebaseData();
  },
  beforeUpdate() {},
  methods: {
    async firebaseData() {
      // let items = [];
      const querySnapshot = await getDocs(collection(db, "brands"));
    
      
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.items.push(doc.data().brandName);
      });
     
      console.log(this.items);
      
    },
    ggg() {
      console.log("hello");
      this.dialog = false;
      this.$store.state.logindialog = true;
    },
    async carmodel(car) {
      // let items = [];
      console.log("car model function");
      const carSnapshot = await getDocs(collection(db, "cars"));
    
      
      carSnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
          if(doc.data().brand == car){      
            this.caritems.push(doc.data().name);
          }
      });
     
      console.log("car naem",this.caritems);
      
    },
    

   onChange(e){
    this.caritems = [],
      console.log("car movdel");
      this.$store.state.brand = e.target.value;
      console.log(this.brand);
      
      this.carmodel(this.$store.state.brand)


     }

     ,

     onChangecar(e){
  
      this.$store.state.model = e.target.value;
      console.log(this.model);
      
     }
,
onChangefuel(e){
  
  this.$store.state.fueltype = e.target.value;
  console.log(this.fueltype);
  
 },

    sendData() {
                      const userData = {
                        "userInfo.fullName": this.name,
                        "userInfo.email": this.email,
                        "userInfo.phoneNumber": this.mobile,
                        "userInfo.dob": this.dob,
                           
                      };
                    const userref = doc(db, "users", this.$store.state.uid);
                    updateDoc(userref, userData )
               updateDoc(userref, {"vehicleInfo": arrayUnion({"vehicleBrand": this.$store.state.brand,"vehicleName": this.$store.state.model, "fuelType": this.$store.state.fueltype})} )
               .then(()=>{
                
                this.$store.state.dialog = false;
               })
               .catch((error)=>{
                console.log("errroo upddate",error)
               })
        
      
    },


    // await updateDoc(washingtonRef, {
    // regions: arrayUnion("greater_virginia")






  },
  created() {},
};
</script>
<style scoped>
.frmhead {
  font-family: Inter;

  letter-spacing: 0em;
  margin-top: 20px;
  margin-bottom: 20px;

  height: 15px;
  width: 100%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 15px;
  /* identical to box height */

  color: rgba(0, 0, 0, 0.86);
  text-align: center;
}

.left {
  position: absolute;
  top: 0px;
  left: 0;
  box-sizing: border-box;

  width: 180px;
  height: auto;
  margin-left: 40px;
}

.closebtn {
  position: absolute;
  left: 5px;
  top: 5px;
}

.inputform {
  display: block;

  margin-bottom: 20px;
  padding: 4px;
  width: 180px;
  height: 30px;
  box-sizing: border-box;

  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 15px;
  transition: 0.2s ease;

  border: 1px solid rgba(0, 0, 0, 0.2);
  opacity: 0.6;
}

#l1-2-2-1 {
  width: 50%;
  height: 100%;

  position: relative;
}
#l1-1-1 {
  width: 100%;
  height: 80%;
}
#l1-1-1-2 {
  width: 100%;
  height: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
}
#lmiht {
  width: 204px;
  height: 117px;
  font: Inter;
  font-weight: 600;
  font-size: 32px;
  line-height: 38.73px;
}
#l1-1-1-1 {
  width: 100%;
  height: 50%;

  display: flex;
  justify-content: center;
  align-items: end;
  text-align: center;
}
#l1-2-2-2 {
  width: 50%;
  height: 100%;

  position: relative;
}
#l1-1-2 {
  width: 100%;
  height: 80%;
}

#l1 {
  width: 933px;
  height: 558px;

  display: flex;
  flex-direction: row;

  position: relative;
  background-color: white;
}
#l1-1 {
  width: 30%;
  height: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
}

#l1-2 {
  width: 60%;
  height: 100%;
}

#l1-2-1 {
  height: 150px;
  width: 100%;

  position: relative;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 19px;

  color: rgba(0, 0, 0, 0.86);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
#l1-2-2 {
  height: 350px;
  width: 100%;

  display: flex;
  flex-direction: row;

  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
}
#body {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
}

#signin {
  position: absolute;
  top: 16px;
  right: 16px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 10px;
  /* identical to box height */

  color: rgba(0, 0, 0, 0.87);
}
</style>
