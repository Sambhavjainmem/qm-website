<template>
<div id="main" >
    <div class="Mechanics" >
    <div class="text1">  Choose From The Best</div>
    <div class="text2"> All Original Spare Parts</div>
    </div>
  <v-sheet
    class="mx-auto"
    elevation="0"
    max-width="100%"
   
  
   
  >
    <v-slide-group
      v-model="model"
      class="pa-4 xyz"
      active-class="success"
      show-arrows
     
      
    >
      <v-slide-item
        v-for="n in 15"
        :key="n"
        v-slot:default="{  }"
        
      >
       <v-card
      class="mx-5"
      max-width="250"
      max-height="350"
    >
      <v-img
        src="../assets/ac.jpg"
        height="200px"
      ></v-img>
  
         </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet></div>
</template>

<script>
  export default {
    name: 'chooseBest',
    data: () => ({
      model: null,
    }),
  }
</script>
<style scoped>
.Mechanics {
    width: 100%;
    height: 150px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
   
}
.text1 {
  font-size: 30px;

}
.text2 {
  font-size: 18px;
  
}
.xyz {
  box-shadow: none;
}

</style>