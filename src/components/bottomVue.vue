<template>
<div class="topbottom" id="bottom">
    <div class="bottom" >
           
 <div class='footercolumn' id="bottom">
    <span class="footertextheading">About</span>
    <span class="footertext">FAQs</span>
    <span class="footertext">Contact Us</span>
    <span class="footertext">Careers</span>
    <span class="footertext">Terms and Conditions</span>
    <span class="footertext">Privacy Policy</span>
    <span class="footertext">Review</span>
    <span class="footertext">Workshop Location</span>    
</div>

<div class='footercolumn'>
    <span class="footertextheading">Our Services</span>
    <span class="footertext">Periodic Service</span>
    <span class="footertext">AC Services</span>
    <span class="footertext">Wheel Care</span>
    <span class="footertext">Batteries</span>
    <span class="footertext">Denting & Paintingt</span>
    <span class="footertext">Car Spa</span>
    <span class="footertext">Car Inspection</span>    
</div>

 <div class='footercolumn'>
    <span class="footertextheading">Top Brands</span>
    <span class="footertext">Maruti Suzuki</span>
    <span class="footertext">Honda</span>
    <span class="footertext">Hyundai</span>
    <span class="footertext">Toyota</span>
    <span class="footertext">Tata</span>
    <span class="footertext">Mahindra</span>
    <span class="footertext">Kia</span> 
    <span class="footertext">Chevrolet</span> 
    <span class="footertext">Chevrolet</span> 
    <span class="footertext">Skoda</span>  
    <span class="footertext">Volkswagen</span>  
</div>




    </div>
    <div class="bottomstrip">
        <img class ="logo" src="../assets/Group_10826.png">
       <span id="copyright">copyright © {{new Date().getFullYear()}} Quick Mechanic</span>
       <div>
        <img class ="master" src="../assets/visa.png">
        <img class ="master" src="../assets/master.png">
        <img class ="installments" src="../assets/installents.png">
        </div>
        <div></div>
        <div></div>



    </div>
</div>
</template>
<script>



export default {
 name: 'bottomVue',
 components: {

  
  },

}
</script>
<style scoped>
.topbottom {
    display:flex;
    flex-direction:column;
    background-color:#9f9f9f;
    margin-top: 40px;
}
.bottom {
width: 100%;
height: auto;




display: flex;
flex-direction: row; 
padding-bottom: 20px;
margin-bottom: 20px;


}

.footercolumn {
    display: flex;
    flex-direction: column;
    margin: 10px;
}
.footertext {
   display: inline-block;
  
   margin-left: 20px;
   margin-right: 10px;
   margin-top: 5px;
   margin-bottom: 5px;
   color: white;
}
.footertextheading {
    font-size: 30px;
    margin-bottom: 25px;
    margin-left:10px;
}
.bottomstrip {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.logo {
    width: 50px;
    height: 50px;
}
.installments {
    max-width: 300px;
    margin: 5px;
}
.master{
    /* max-width: 120px; */
    max-width: 50px;
    margin:5px;
}
#copyright {
  
    display: flex;
    align-items: center;
}

</style>

