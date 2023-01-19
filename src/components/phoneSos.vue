<template>
   <div class="maindiv">
    <v-btn @click="$store.state.phonesos = false" style="position:absolute; top: 15px; right: 15px;" text>
          <v-icon class="red--text">mdi-close</v-icon>
        </v-btn>



    <div class="bgtext">
        DOWNLOAD QUICKMECHANIC APP
    </div>

   
        <div
            style="
              width: fit-content;
              height: fit-content;
              margin-top: 10px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              margin-top: 100px;
            "
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.quickmechanic.unifiedmobileapp&pli=1"
              target="_blank"
            >
              <img class="storeimg" src="../assets/Group 10765-h.jpg"
            /></a>
            <img
              class="storeimg"
              style="margin-left: 3px"
              src="../assets/Group 10766-h.jpg"
            />
          </div>
  


   </div>
  </template>
<script>



  export default {
    name: "phoneSos",
    data() {
      return {
      
      };
    },
  

   
  
 
  
    
  };
  </script>
      
      
      
  <style scoped>
  .storeimg {
  width: 300px;
  height: auto;
  cursor: pointer;
  margin: 8px;
}
  .bgtext{
  height: -moz-fit-content;
  height: fit-content;
  z-index: 2;
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 41px;
  text-transform: uppercase;
  color: #000000;
}
  .maindiv {
    background: white;

    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    
   
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
  @media (max-width: 888px){
    #login123 {
    width: 388px;
    height: 343px;
   
  }
  }
  </style>
      