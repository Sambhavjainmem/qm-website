<template >
    <div id="maintile">
        <v-row id="tilerow"   >
            <v-col cols="2.7" id="col1">
                <v-row  class="tiecol" style=" background-color: transparent; "></v-row>
                <span></span>
            </v-col>
            <v-col cols="2.2" id="col2">
                <v-row  class="tiecol" style=" background-color: #F5F5F5; ">
                    <v-icon large color="black" style="padding:20px">mdi-wrench</v-icon>
                    <span style="text-align:center; font-weight:bold; font-family:Arial, Helvetica, sans-serif">Experienced Mechanic</span>
                </v-row>
            </v-col>
            <v-col cols="2.2" id="col2">
                <v-row class="tiecol" style=" background-color: #EEEEEE;  ">
                    <v-icon large color="black" style="padding:20px">mdi-star</v-icon>
                    <span style="text-align:center; font-weight:bold; font-family:Arial, Helvetica, sans-serif">Quality Service</span>
                </v-row>
            </v-col>
            <v-col cols="2.2" id="col2">
                <v-row  class="tiecol" style="background-color: #E0E0E0; margin-right: 0px; ">
                    <v-icon large color="black" style="padding:20px" size="50px">mdi-check</v-icon>
                    <span style="text-align:center; font-weight:bold; font-family:Arial, Helvetica, sans-serif">Afforadable Prices</span>
                </v-row>
            </v-col>
            <v-col cols="2.7" id="col1">
                <v-row style="height:10rem; background-color: transparent; "></v-row>
                <span></span>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>
        <v-row  class="tilebottom">
            <span style="
             ">Full Auto Service you can rely on</span>
            
            <p >QuickMechanic provides 24x7 Car Service Assistance through well trained mechanics and well-equipped workshop across India thus creating a platform for consumers  to connect with quality workshops and well-trained mechanics</p>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "tileView",
    data(){
        return {

        }
    },
}
</script>

<style>
#maintile {
    height:30rem; width: 100%; margin-right:0px;background: linear-gradient(180deg, #FFFFFF 0%, #EFEFEF 100%);margin-top: 10px;
}
#tilerow {
    height:10rem; background-color: transparent; margin:0px;
}
.tiecol {
  
    height:10rem;
    margin-right: 3px;
}
.tilebottom  {

    height:20rem; background-color: transparent; margin:0px;


}
.tilebottom > span {



text-align:center; 
font-weight:bold;
 font-family:Arial, Helvetica, sans-serif;
font-size: 40px;
margin-top: 5rem;
}

.tilebottom > p {
    text-align: center;
font-weight: bolder;
font-family: Arial, Helvetica, sans-serif;
padding-left: 265px;
padding-right: 265px;
        
}
   @media (max-width: 888px){
    #tilerow {
        justify-content: center;
        height: 8rem;
    }
#col1 {
  display: none;
}
#col2 span {
    font-size: 12px;
}
#col2 > div {
    height: 128px;
}
.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 30%;
}

.tiecol {
    height: 128px;
}
.tilebottom > span {

font-size: 18px;
margin-top: 20px;
margin-bottom: 10px;
        
}
#maintile {
    height: fit-content;
}

.tilebottom > p {

padding-left: 10px;
padding-right: 10px;
font-weight: 400;
        
}

.tilebottom  {

height: fit-content;


}




}
</style>