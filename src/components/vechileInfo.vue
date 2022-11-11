<template>
   <div id="vechileMain">
            <div id="VRegester">
                    <div id="main">
                       <div id="vheadder" > Experience The Best Car Services In Delhi</div>
                       <div id="vsubheadder" >Get Intert quotes for your car service</div>

                    </div>



                    <div id="formcombobox">
                        <v-combobox
        v-model="vtype"
        :items="items"
      
       
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
        
      ></v-combobox>
      <button id="submitbtn" type="button">CHECK BEST PRICES</button>
      
                    </div>
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
  #vechileMain {
    width:100%;
    height: 100vh;
 
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #VRegester {
    width:450px;
    height: 450px;
   
    display: flex;
    flex-direction: column;
    background-color:pink;
  }
  #vheadder {
    font-size: 30px;
   
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
  }
  #formcombobox {
    margin-top: 20px;
  }
  #submitbtn {
    width: 400px;
    background-color: red;
    color: white;
    height: 60px;
    border-radius: 20px;
  }
  #vsubheadder {
    font-size: 15px;
    text-align: center;
  }
  
  </style>
  
  