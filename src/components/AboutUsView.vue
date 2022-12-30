<template >
    <div style="height:30rem; width: 100%; margin-top:4rem;">
        <v-row class="AboutUsImageCss">
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
                <v-row style="margin-top: 9rem;">
                    <div style="font-size: 64px; font-weight: 700;
                    font-family: Arial, Helvetica, sans-serif; color: white;
                    text-align: center;
                
                    
                    ">About Us</div>
                </v-row>
                
            </v-col>
        </v-row>
        <v-row style="height:45rem; background-color: #EEEEEE; margin:0px;">
            <span style="text-align:center; font-family:Arial, Helvetica, sans-serif;
             font-size: 36px;
             margin-top: 2rem;
             "></span>
            
            

            <p style="text-align:center;  font-family:Arial, Helvetica, sans-serif;
                        padding-left: 240px;
                        font-size: 18px;
                        padding-right: 240px;
                        color: black;
                        opacity: 0.8;
                        ">The company offers a mobile based digital solution ‘Quick Mechanic’ app, which provides hassle free access to real-time Car repairs anytime/anywhere.</p>
            <p style="text-align:center;  font-family:Arial, Helvetica, sans-serif;
                        padding-left: 240px;
                        font-size: 18px;
                        padding-right: 240px;
                        color: black;
                        opacity: 0.8;
                        ">QuickMechanic is formed with an objective to provide prompt car care through a well-qualified panel of workshops/ specialists Mechanics that is convenient, affordable and transparent. It can be accessed at one's comfort in real-time through Voice, Video and/ or Chat or by calling Mechanics at your doorstep or by getting your car picked by QuickMechanic workshop from comfort of your home or office.</p>
            <p style="text-align:center;  font-family:Arial, Helvetica, sans-serif;
                        padding-left: 240px;
                        font-size: 18px;
                        padding-right: 240px;
                        color: black;
                        opacity: 0.8;
                        ">The QuickMechanic app is convenient for people in rural/remote areas to access best vehicle care and consultation advice.</p>
            <p style="text-align:center;  font-family:Arial, Helvetica, sans-serif;
                        padding-left: 240px;
                        font-size: 18px;
                        padding-right: 240px;
                        color: black;
                        opacity: 0.8;
                        ">QuickMechanic focuses on quality car care through quick, easy, safe, efficient and cost-effective alternative for emergency on Indian Expressways Pan India and in-person visits for non-emergency maintenance and repair services by listed and verified QuickMechanic workshops. QuickMechanic philosophy is simple and process oriented.</p>
            <p style="text-align:center;  font-family:Arial, Helvetica, sans-serif;
                        padding-left: 240px;
                        font-size: 18px;
                        padding-right: 240px;
                        color: black;
                        opacity: 0.8;
                        ">QuickMechanic encourages to work in a structured framework by influencing innovation through creative thinking and open communication. It is based on continuous change for improvement as parent company 4Di. QuickMechanic is equipped with requisite industry knowledge and capabilities to help organization to transform customer experience by ensuring quality services.</p>
        </v-row>
        
        <bottomVue/>
    </div>
</template>

<script>
import bottomVue from "./bottomVue";

export default {
    name: "AboutUsView",
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
.AboutUsImageCss{
    height:15rem; 
    margin:0px;
    background: url("../assets/aboutusBanner.jpg");
    background-size: cover;
}
</style>