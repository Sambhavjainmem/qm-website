<template>
  <div class="home" id="refhome">
  
  
  
   
  
  
  
  
    
        
  <!-- <div class="sos">
        <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
        <template v-slot:activator="{ on, attrs }">
           <v-img 
         v-bind="attrs"
            v-on="on"
        src="../assets/SOS-removebg.png"></v-img>
        </template>
        
        <v-card>
         
         <v-btn
           icon
           dark
           @click="dialog = false"
         >
           <v-icon class="black--text">mdi-close</v-icon>
         </v-btn>
        
        
    
      
         <getQuick />
             
      
     </v-card>
   </v-dialog>
  </div> -->
  
  
  
        
  <div id="vsm">
  
  
    <v-btn
            icon
            dark
            style="position: absolute; top: 15px; right: 15px"
            @click="this.$store.state.vdialog = false;"
          >
            <v-icon class="black--text">mdi-close</v-icon>
          </v-btn>



    























































    <div id="bgcolor">

      <div
      
      style="
        width: fit-content;
        height: 70px;
        font-family: 'Avenir Next';
        font-style: normal;
        font-weight: 500;
        font-size: 34px;
        line-height: 46px;

        color: rgba(0, 0, 0, 0.6);
        position: absolute;
        top: 80px;
        left: 100px;
        z-index: 100000;
      "
    >
      Select Your Car

      <div
        style="
          font-family: 'Avenir Next';
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 27px;

          color: rgba(0, 0, 0, 0.87);
        "
      >
        We will get you the best prices for the services we offer for your car
      </div>
    </div>
  


</div>


  
    <div class="bgtext">
  
          QUICK MECHANIC
  
  </div>
  
  
  
  
  <div id="left">
  
    <div id="store">
        <img width="40px" height="auto" style="display: flex; margin-bottom: 2px;" src="../assets/Group 10765.jpg" />
        <img width="40px" height="auto" style="display: flex" src="../assets/Group 10766.jpg" />
      </div>
    
  </div>
  <div id="middle">
  
  
        
  
  
  
    
    <div id="chip"> 
       
      <div id="svechile">  
    
        
       
 
    <v-container fluid style=" color: red;height: fit-content;width: fit-content; ">
      <v-row align="center" justify="space-between" >
       
  
       
  
        <v-col
          class="d-flex"
          cols="2"
         
          flat
          style="border-right: 2px soid black"
        >

        
          <v-select
            :items="items"
            label="BRAND"
            solo
            height="50px"
            flat
            v-model="$store.state.vinfo.brand"
            @change="onChange()"
            
            
        
          >
          <div class="seperater">
          </div>
        </v-select>
        
   
        </v-col>
        
         <v-col
          class="d-flex"
          cols="2"
         
        >
      
          <v-select
            :items="caritems"
            label="MODEL"
            solo
            flat
            v-model="$store.state.vinfo.model"
            @change="onChangecar()"
          ></v-select>

      
        </v-col>
         <v-col
          class="d-flex"
          cols="2"
         
        >
          <v-select
            :items="fueltype"
            label="FUEL"
            solo
            flat
            v-model="$store.state.vinfo.fueltype"
            @change="onChangefuel($event)"
          ></v-select>
        </v-col>
        
       
        <v-col
          class="d-flex ma-0 pa-0"
          cols="4"
        
          style=" display: flex;flex-direction: row-reverse;"
          
        >
        
        <button class="cpb23"  @click="ggg">CHECK BEST PRICES</button>
  
        </v-col>
       

    
      </v-row>
    </v-container>


      
      
      
      
      
      
      
      
    </div>
    
    
    
   
    
    </div>
    <div id="msh"></div>
    <div id="svechile2">  
     
  
  
    <!-- HTML !-->
    <button class="cpb2" role="button">VALUE ADDED SERVICES</button>
  <button class="cpb2sos" role="button">SOS</button>
   
    
    
    
    
    
    
    
    
    </div>
  
  
  
  </div>
  <div id="right">
  
    <img class="ford" src="../assets/ford_ecosport2018_blue.png">
  
  
  
  </div>
  
  
  
  
  
  
  </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      <!-- <img class="ford" src="../assets/ford_ecosport2018_blue.png"> -->
       <!-- <img class ="sos2" src="../assets/SOS-removebg.png"> -->
       <div class="footer">
      
  
  
  
  
  
      <span class="subfooter">We are in Social</span><div class="subfooter" ><v-icon class="socl">mdi-facebook</v-icon><v-icon class="socl" >mdi-twitter</v-icon><v-icon class="socl">mdi-youtube</v-icon><v-icon class="socl" >mdi-instagram</v-icon><v-icon class="socl">mdi-linkedin</v-icon></div><div class="subfooter"><img id="star" src="../assets/star.png">  4.5 &nbsp; &nbsp;<img id="star" src="../assets/g.png"> 2,000+ Google views!</div>
      
      
     
    </div>
     
  
   <!-- <vechile-info /> -->
   <!-- <profileVue /> -->
  
   
  
   
    
    
  
  
  
  </div>
  
  </template>
  <script>
  
  

  

  import { collection, getDocs, query, where } from "firebase/firestore";
  import {db} from '../firebase.js'

  
   

  export default {
   name: 'vechileInfo',
   data() {
      return {
        drawer: false,
        mini: true,
        isLoggedIn: false,
        height: 0,
        width: 0,
        dialog : false,
        items: [],
        caritems: [],
        fueltype: ["Diesel","Petrol","EV","Gass"],
        brand: "",
        model: "",
        fuel: "",

       
      };
    },
  
   components: {
  
    
  
   
     
    //  VechileInfo,
  
    

  // profileVue ,
  
    },

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
    onChange(){
    this.caritems = [],
    
      
      
      this.carmodel(this.$store.state.vinfo.brand);
      console.log("vechile",this.$store.state.vinfo.brand);


     }

     ,

     onChangecar(){
  
    
     
      console.log(  "carmodel selected",this.$store.state.vinfo.model);
      this.carsdata();
     }
,
onChangefuel(e){
  
  this.$store.state.vinfo.fueltype = e.target.value;
  console.log(this.$store.state.vinfo.fueltype);
  
 },
 ggg(){
      if(this.$store.state.vinfo.model == 'Model'){
      alert("please select car")}
      else{
      localStorage.setItem("vdata", JSON.stringify(this.$store.state.vinfo));
      this.$store.state.vdialog = false;
      console.log(this.$store.state.vdialog);
     
      
      }
      
    },
    async carsdata() {
      const brandname = this.$store.state.vinfo.model;
      console.log("function started");
      const q = query(collection(db, "cars"), where("name", "==", brandname));

      const querySnapshots = await getDocs(q);
      querySnapshots.forEach((doc) => {
        this.$store.state.prices = doc.data();
        console.log(this.$store.state.prices["Batteries"]);
      });
      console.log("function ended");
    },

    },
    mounted() {

    this.firebaseData();

    

    },
  
  }
  </script>,
   
  <style scoped>



  @media screen and (max-width: 991px) {
  

}

  #bgcolor {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.87);
backdrop-filter: blur(16px);
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 3;
  }
  #star {
    color:goldenrod;
    width: 15px;
    height: 15px;
    margin-bottom: 0px;
  }
  
  
  .cpb2sos {
    background-color: white;
    color:black;
    border: 1px solid black;
    border-radius: 17px;
    
    width: 290px;
    height: 56px;
    
  }
  .socl {
    color: black;
  }
  .cpb {
    width: auto;
    height: 48px;
    background-color: red;
    color: rgb(94, 28, 28);
    align-items: center;
    /* background-image: linear-gradient(135deg, #f34079 40%, #fc894d); */
    
  color: white;
  padding-left: 10px;
    padding-right: 10px;
    padding-top: 3px;
    
    border-radius: 10px;
  
  
  
  
  
  
  }
  
  .cpb2 {
    width: 290px;
    height: 56px;
    background-color: red;
    color: rgb(94, 28, 28);
    align-items: center;
    /* background-image: linear-gradient(135deg, #f34079 40%, #fc894d); */
    
  color: white;
  padding-left: 10px;
    padding-right: 10px;
    padding-top: 3px;
   
    border-radius: 17px;
  justify-content: space-between;
  
  
  
  
  
  }

  .cpb23 {
    width: 290px;
    height: 56px;
    background-color:#D50000;
;
    color: white;
    align-items: center;
    /* background-image: linear-gradient(135deg, #f34079 40%, #fc894d); */
    
  color: white;
  padding-left: 10px;
    padding-right: 10px;
    padding-top: 3px;
    margin-top: -35px;
   
    border-radius: 24px;
  justify-content: space-between;
  z-index: 1000;margin-right: 12px;
  
  
  
  
  
  }
  
  option {
    font-size: 20px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom:10px;
  }
  #vsm {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    position: relative;
  
  
   
  }
  
  #store {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: calc( 50% - 136px);
    left: 0px;
    width: 40px ;
    height: 272px;
    z-index: 2;
    align-self: center;
    border: 1px solid black;
  
  }
  .banner {
    width: 100%;
    height: auto;
  }
  /* CSS */
  .button-75 {
    align-items: center;
    background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
    border: 0;
    border-radius: 10px;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-family: "Codec cold",sans-serif;
    font-size: 16px;
    font-weight: 700;
    height: 54px;
    justify-content: center;
    /* letter-spacing: .4px; */
    line-height: 1;
    max-width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 3px;
    text-decoration: none;
    text-transform: uppercase;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }
  
  .button-75:active {
    outline: 0;
  }
  
  .button-75:hover {
    outline: 0;
  }
  
  .button-75 span {
    transition: all 200ms;
  }
  
  .button-75:hover span {
    transform: scale(.9);
    opacity: .75;
  }
  
  @media screen and (max-width: 991px) {
    .button-75 {
      font-size: 15px;
      height: 50px;
    }
  
    .button-75 span {
      line-height: 50px;
    }
  }
   
  
  
  #svechile {
   
    width: fit-content;
    height: 70px;
    border-radius: 36px;
    border: 1px solid rgba(0, 0, 0, 0.26);
box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.7);

    
    top: calc(50% - 35px);
    background-color: white;
    z-index: 2000;

    z-index: 100000;
    
  
  }
  #svechile2 {
    width: 100%;
    height: 70px;
    display:flex;
    justify-content: space-around;
    border-radius: 5px;
  
    margin-bottom: 50px;
  
  }
  .myList {
    width: 18%;
    height: 100%;
    border-left: 1px solid black;
    font-size: 16px;
  
   
  }
  .fueltype{
    width: 150px;
    height: 100%;
    border-left: 1px solid black;
    font-size: 16px;
  
  
  }
  #left {
    width: 15%;
    height: 100%;
  
  
    position: relative;
    margin-left: 0px;
  
  
  
  }
  #msh {
    text-align: center;
    margin-top:20px;
    margin-bottom: 20px;
  }
  
  #backbgtext {
    
    top: 0px;
    left: 0px;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
   
  }
  .chipitems {
    width: auto;
    height: 30px;
    background-color: rgba(128, 128, 128, 0.445);
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
    font-size: 14px;
    margin-top:20px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 13px;
   
  
  }
  #chip {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  
  }
  #mh {
    text-align: center;
    margin-top: -50px;
    margin-bottom: 10px;
   
    
    /* margin-top: 20px;
    margin-bottom: 20px; */
    z-index: 5;
  
  
  
  
    font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 41px;
  
  color: rgba(0, 0, 0, 0.87);
  flex-wrap:;
  padding-left: 0px;
  padding-right: 0px;
  
  
  }
  #right {
    width: 15%;
    height: 100%;
  
   
  
  }
  #middle {
  
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-self: center;
    align-self: center;
  
   
  
  }
  .home{
     
      width: 100%;
      height: calc( 100vh );
       
      
   
    
     
  }
  .subhome{
      width: 100%;
      display: flex;
      height:  calc( 100vh );
      justify-content: center;
      align-items: center;
      position: relative;
     
      
   }
  .sos {
     
      float: left;
     
      cursor: pointer;
      margin-left: 100px; 
      align-self: center;
     
      justify-self: center;
  
  }
  .sos2 {
      display: none;
     height: 150px;
      float: left;
     
      cursor: pointer;
      margin-left: 100px; 
      align-self: center;
  
  }
  
  .ford {
      width: 700px;
      float: right;
      margin-right: -350px;
       
         margin-top: 110px;
         z-index:-2;
  
  }
  .footer {
      position:absolute;
     
      height: 40px;
      /* bottom: 8px;
      left: 0px; */
      margin-top: 20px;
      display: flex;
      flex-direction: row;
      left: 10vh;
      bottom:7vh;
      z-index: 2;
  }
  .subfooter {
      margin-left: 100px;
      color: black;
      font-weight: bold;
  
  }
    @media (max-width: 950px){
      .sos {
     height: 100px;
    
      margin-top: 180px;
      margin-right: -120px;
      cursor: pointer;
      margin-left: 100px; 
  
  }
  
    }
  
  @media (max-width: 888px){
  
      .subhome{
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content:start; 
          flex-wrap: wrap; 
          }
        .sos {
              display: none;  
  
           }
        .sos2 {
            display:list-item; 
          
            margin-top: 0px;
            cursor: pointer;
            margin-left: 0px; 
            align-self: center;
            margin-top:-80px;
            height: 100px;
          }
       }
  
  
        @media (max-width: 845px){
              .footer{
                display: none;
              }
        }
        /* .bgtext {
          position: absolute;
  width: 1118px;
  height: 169px;
  
  top: 12%;
  left: calc(100% - 1118px);
  margin-left: 10%;
  margin-right: 10%;
  font-size: 120px;
  z-index: 0;
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  
  line-height: 169px;
  
  color: rgba(239, 239, 239, 0.6);
        } */
  
  
        .bgtext {
          position: absolute;
  width: 100%;
  height: 300px;
  
  /* left: 103px;
  top: 38px; */
  font-size: 120px;

  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  
  line-height: 169px;
  
  color: rgba(239, 239, 239, 0.6);

  
  text-align: center;
        } 
  </style>
  
  