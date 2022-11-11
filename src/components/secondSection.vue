<template><div class="secondcomponent">
<servicesVue />
<div class="partners">
     <img class="partnerimg"
          src="../assets/Image3.jpg"/>
     <img class="partnerimgt"
          src="../assets/Image 4.jpg" />

</div>
</div>
</template>
<script>
import servicesVue from './servicesVue.vue'
export default {
 name: 'secondSection',
 components: {
   servicesVue,
  
  },

}

</script>
<style scoped>
.partners {
    width: 35%;
  
    height: inherit;
}
.secondcomponent{
    display: flex;
    flex-direction: row;
}
.partners {
    display: flex;
    flex-direction: column;
}
.partnerimg {
    width: 100%;

}
</style>

