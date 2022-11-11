<template><div id="mar">
    <div class="Mechanics" >
        Quick Mechanics Team
    </div>
  <v-sheet
    class="mx-auto"
    elevation="0"
    max-width="100%"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
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
  
      <v-card-title>
        Top western road trips
      </v-card-title>
 
    
    
    <v-card-text  class="text-wrap">
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
          </v-card-text>
     
  
      
    </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet></div>
</template>

<script>
  export default {
    name: 'MechanicsTeam',
    data: () => ({
      model: null,
    }),
  }
</script>
<style scoped>
.v-application .elevation-5{
  box-shadow: unset;
  }
   
.Mechanics {
    width: 100%;
    height: 150px;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}
#mar {
  margin-bottom: 20px;
}
.v-application .elevation-5 {
  box-shadow: 0px 11px 15px -7px rgb(0, 0, 0), 0px 24px 38px 3px rgb(0, 0, 0), 0px 9px 46px 8px rgba(57, 3, 3, 0.961);


}
</style>