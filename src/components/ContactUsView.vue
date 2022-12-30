<template >
    <div style="height:30rem; width: 100%; margin-top:4rem;">
        <v-row class="ContactUsImageCss">
            <v-col cols="1" style=" margin: 0px; padding: 0px;" >
                <!-- <div style="margin-left:0px; margin-top: 150px; margin-bottom: 5px;">
                    <v-img style=" border: solid .5px white; border-radius: 5px;" height="136px" width="40.76px" src="../assets/Group 10765.jpg"></v-img>
                </div>
                <div style="margin-left:0px;">
                    <v-img style=" border: solid .5px white; border-radius: 5px;" height="136px" width="40.76px" src="../assets/Group 10766.jpg"></v-img>
                </div> -->
            </v-col>
            <v-col cols="1" style=" margin: 0px;" ></v-col>
            <v-col cols="8" style="margin: 0%; padding: 0px; " >
                <v-row style="margin-top: 4rem;">
                    <div style="font-size: 72px; font-weight: 700;
                    font-family: Arial, Helvetica, sans-serif; color: white;
                    text-align: center;
                
                    
                    ">Contact Us</div>
                </v-row>
                
            </v-col>
        </v-row>
        <v-row style="height:15rem; background-color: #EEEEEE; padding-top:3rem; margin: 0%;">
            <v-col cols="2" ></v-col>
            <v-col cols="2.4">
                <div style="text-align:center; font-size: 30px; font-weight: bolder; margin-bottom: 1rem;">Call us</div>
                <div style="text-align:center"> Tel: +91 9667761701
contactus@quickmechanic.co.in</div>
            </v-col>
            <v-col cols="3">
                <div style="text-align:center; font-size: 30px; font-weight: bolder; margin-bottom: 1rem;">Visit Us</div>
                <p style="text-align:center; "> Omaxe NRI City Centre, 2nd Floor, Multiplex Area
Pari Chowk, Omega II, Greater Noida,
Gautam Buddha Nagar
Greater Noida UP 201308 India</p>
            </v-col>
            <v-col cols="2.4">
                <div style="text-align:center; font-size: 30px; font-weight: bolder; margin-bottom: 1rem;">Opening Hours</div>
                <div style="text-align:center"> Mon - Fri: 7am - 10pm</div>
            </v-col>
            <v-col cols="2"></v-col>
        </v-row>
        <bottomVue/>
    </div>
</template>

<script>
import bottomVue from "./bottomVue";

export default {
    name: "ContactUsView",
    data(){
        return {

        }
    },
    components: {


    bottomVue,

    // profileVue ,
  },
}
</script>

<style>
.ContactUsImageCss{
    height:15rem; 
    margin:0px;
    background: url("../assets/contactusBanner.jpg");
    background-size: cover;
}
</style>