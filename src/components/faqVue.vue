<template>
  <v-row justify="center" id="faq">
    <v-expansion-panels accordion>
      <v-expansion-panel
        v-for="(item,i) in 5"
        :key="i"
      >
        <v-expansion-panel-header>Item</v-expansion-panel-header>
        <v-expansion-panel-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>
<script>


export default {
 
 name: 'faqVue',
components: {

  },
  data() {
    return {
         };
  }

}
</script>


<style scoped>
#faqmain {

  height: 100vh;
  background-color: cadetblue;
  width: 100%;
}

#faq {

padding-top: 100px;
}
</style>

