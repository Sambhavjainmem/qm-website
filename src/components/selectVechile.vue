<template>
    <div id="selectVechile">
  <div id="formcombobox">
   
    <select name="subject" id = "myList" onchange = "favTutorial()">
  <option>Select Your Brand</option>
  <option> w3schools </option>
  <option> Javatpoint </option>
  <option> tutorialspoint </option>
  <option> geeksforgeeks </option>
  </select>
 <div style="width: 2px; height: 80%; background-color: black;"></div>
  <select id = "myList" onchange = "favTutorial()" >
  <option>Models</option>
  <option> w3schools </option>
  <option> Javatpoint </option>
  <option> tutorialspoint </option>
  <option> geeksforgeeks </option>
  </select>
  <v-divider
  vertical
></v-divider> 
  <select id = "myList" onchange = "favTutorial()" >
  <option id="opt">Fuel Type </option>
  
  </select>
  
  <input type="text" id = "myList" placeholder="Mobile" >
  
  <!-- <v-combobox v-model="vtype"  :items="items"
         
          outlined
          
        ></v-combobox>
        <v-combobox
          v-model="vmodel"
          :items="items"
        
         
          outlined
          
        ></v-combobox>
        <v-combobox
          v-model="vfuel"
          :items="items"
          
        
         
          outlined
          
        ></v-combobox>
        <v-combobox
          v-model="mob"
          :items="items"
        
         
          outlined
          
        ></v-combobox> -->
        <v-btn class="red white--text mb-4" 
        @click="this.$store.commit.changeDilog(false)"
        >CHECK BEST PRICES</v-btn>
        </div>
      </div>
    </template>
    <script>
    export default {
      name: "vechileInfo",
      data() {
      return {
          vtype: ["Vechile Type"],
          vmodel: ["Vechile Model"],
          vfuel: ["Fuel Type"],
          mob: ["Mobile No"],
          items: ["Mobile No","selectone ","Mobile No"],
       
      };
    },
   
      components: {},
  
    };
    </script>
    <style scoped>
    #myList {
      width: 240px;
      height: 60px;
      border: 1px solid black;
      border-radius: 5px;
      margin-bottom: 15px;
      font-size: 20px;
      
      padding-left: 10px;
    }
    ::placeholder {
    color: black;
    opacity: 1; /* Firefox */
  }
  
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
   color: black;
  }
  
  ::-ms-input-placeholder { /* Microsoft Edge */
   color: black;
  }
    
    #formcombobox {
      padding-top: 20px;
      display: flex;
      flex-direction: column;
      width: 450px;
      height: auto;
      background-color:white;
      justify-content: center;
      align-items: center;
  
    }
    #selectVechile{
      width: 100%;
      height: 100vh;
      background-color: rgba(87, 20, 20, 0);
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(243, 238, 238, 0.398)
  
    }
    #opt {
      font-size: 20px;
    }
    #hd1 {
      font-size: 26px;
    }
    #hd2 {
      font-size: 15px;
      margin-bottom: 20px;
    }
    
  
  
  
  
    
    </style>
    
    