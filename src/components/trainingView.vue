<template >
    <div style="height:80rem; width: 100%; margin-top:4rem;">
        <v-row class="backgroundImageCss">
            <v-col cols="1" style=" margin: 0px; padding: 0px;" >
                <div style="margin-left:0px; margin-top: 150px; margin-bottom: 5px;">
                    <v-img style=" border: solid .5px white; border-radius: 5px;" height="136px" width="40.76px" src="../assets/Group 10765.jpg"></v-img>
                </div>
                <div style="margin-left:0px;">
                    <v-img style=" border: solid .5px white; border-radius: 5px;" height="136px" width="40.76px" src="../assets/Group 10766.jpg"></v-img>
                </div>
            </v-col>
            <v-col cols="1" style=" margin: 0px;" ></v-col>
            <v-col cols="8" style="margin: 0%; padding: 0px; " >
                <v-row style="margin-top: 10rem;">
                    <div style="font-size: 64px; font-weight: 700;
                    font-family: Arial, Helvetica, sans-serif; color: #EEEEEE;
                    text-align: center;
                
                    background-color: transparent;
                    ">Training and Certifications</div>
                </v-row>
                <v-row style="">
                    <div style="font-size: 32px; font-weight: 700;
                    font-family: Arial, Helvetica, sans-serif; color: #EEEEEE;
                    text-align: center;
                    padding-top: 5px;
                    padding-bottom: 5px;
                    background-color: transparent;
                    ">Get Certified under Automotive skill development</div>
                </v-row>
                <v-row>
                    <div style="font-size: 32px; font-weight: 700;
                    font-family: Arial, Helvetica, sans-serif; 
                    text-align: center;
                    ">
                    <v-btn color="#D50000" style=" height:48px;  padding: 5px; border-radius: 8px; width: 132px;"><span style="margin:5px 5px 5px 5px; font-size:12px; font-weight: bolder; color: white;">GET CERTIFIED</span></v-btn></div>
                </v-row>
            </v-col>
        </v-row>
        <v-row style="height:45rem; background-color: #EEEEEE; margin:0px;">
            <span style="text-align:center; font-family:Arial, Helvetica, sans-serif;
             font-size: 36px;
             margin-top: 5rem;
             ">Automotive Skill Developement Platform</span>
            
            <p style="text-align:center; font-family:Arial, Helvetica, sans-serif;
            padding-left: 290px;
            padding-right: 290px;
            font-size: 28px;
            font-weight: lighter;
            color: gray;
            ">QuickMechanic provides Training and Certification for Mechanic</p>

            <p style="text-align:left;  font-family:Arial, Helvetica, sans-serif;
                        padding-left: 250px;
                        font-size: 18px;
                        padding-right: 190px;
                        color: gray;
                        ">QuickMechanic endeavour is to fulfil the growing need for skilled manpowerin India automotive sector 
            and narrow the existing gap between the demand and supply of skills.</p>
            <p style="text-align:left;  font-family:Arial, Helvetica, sans-serif; padding-left: 250px;
                        font-size: 18px;
                        padding-right: 190px;
                        color: gray;
                        ">QuickMechanic wish is to partner with Govt. Of India skill development Mission by imparting the skills
 required by ever-growing automotive sector.</p>
            <p style="text-align:left;  font-family:Arial, Helvetica, sans-serif;
                        padding-left: 250px;
                        font-size: 18px;
                        padding-right: 190px;
                        color: gray;
                        ">QuickMechanic want to contribute through its digital platform i.e., App to upgrade skills of professions of automotive 
sector by developing necessary training standards and quality assurance both online and offline mode.</p>
            <p style="text-align:left;  font-family:Arial, Helvetica, sans-serif;
                        padding-left: 250px;
                        font-size: 18px;
                        padding-right: 190px;
                        color: gray;
                        ">QuickMechanic will provide platform for Government mission to increase the earnings of automotive sector 
workers mainly in unorganized sector.</p>
        </v-row>
        <getQuick/>
        <bottomVue/>
    </div>
</template>

<script>
import bottomVue from "./bottomVue";
import getQuick from "./getQuick.vue";
export default {
    name: "trainingView",
    data(){
        return {

        }
    },
    components: {


    bottomVue,
    getQuick,

    // profileVue ,
  },
  created(){
    this.$store.state.currentPath = '/trainingView';
  },
}
</script>

<style>
.backgroundImageCss{
    height:34rem; 
    margin:0px;
    background: url("../assets/banner2.png");
    background-size: cover;
}
</style>