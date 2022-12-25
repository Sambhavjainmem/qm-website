<template><div class="secondcomponent">
<servicesVue />
<!-- <div class="partners">
    <div id="ATP">Accredited Training Partners</div>
     <img class="partnerimg"
          src="../assets/Image3.jpg"/>
     <img class="partnerimgt"
          src="../assets/Image 4.jpg" />

</div> -->
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
#ATP{
    font-size: 24px;
    text-align: center;
}
.partners {
    width: 0%;
  
    height: inherit;
}
.secondcomponent{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
   
    margin-top: 0px;
    height: fit-content;
    background: linear-gradient(180deg, #FFFFFF 0%, #F8F8F8 100%);
    }
.partners {
    display: flex;
    flex-direction: column;
}
.partnerimg {
    width: 100%;

}
</style>

