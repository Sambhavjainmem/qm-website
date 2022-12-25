<template>
  <div id="selectVechile">
<div id="formcombobox">
  <div id="hd1">Experience The Best Car in Delhi</div>
  <div id="hd2">Get instant quotes for your car service</div>

  <v-row>
    <v-col>
          <v-lable>Name</v-lable>
    </v-col>
     <v-col cols="8">
      <v-text-field  class="pa-0 ma-0" dense outlined v-model="Name" :readonly="readonly"> </v-text-field>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
          <v-lable>Name</v-lable>
    </v-col>
     <v-col  cols="8">
      <v-text-field class="pa-0 ma-0" dense outlined v-model="Name" :readonly="readonly"> </v-text-field>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
          <v-lable>Name</v-lable>
    </v-col>
     <v-col cols="8">
      <v-text-field class="pa-0 ma-0" dense outlined v-model="Name" :readonly="readonly"> </v-text-field>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
          <v-lable>Name</v-lable>
    </v-col >
     <v-col cols="8">
      <v-text-field class="pa-0 ma-0" dense outlined v-model="Name" :readonly="readonly"> </v-text-field>
    </v-col>
  </v-row>
  <v-row>
    <v-col >
          <v-lable class="pa-0 ma-0 md-4"  dense>Name</v-lable>
    </v-col>
     <v-col cols="8">
      <v-text-field class="pa-0 ma-0"  dense outlined v-model="Name" :readonly="readonly"> </v-text-field>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
          <v-lable>Name</v-lable>
    </v-col>
     <v-col cols="8">
      <v-text-field cols="8" class="pa-0 ma-0" dense outlined v-model="Name" :readonly="readonly"> </v-text-field>
    </v-col>
  </v-row>            
   







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
    name: "profileVue",
    data() {
    return {
        vtype: ["Vechile Type"],
        vmodel: ["Vechile Model"],
        vfuel: ["Fuel Type"],
        mob: ["Mobile No"],
        items: ["Mobile No","selectone ","Mobile No"],
        gender: "",
        readonly: false,
     
    };
  },
 
    components: {},

  };
  </script>
  <style scoped>

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
    width: 550px;
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
  
  