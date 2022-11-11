<template>
  <div class="maindivs">
    <div class="leftdiv">
      <img class="image" src="../assets/arrow.png" />
      <div class="maintext">
        <div class="heading">
          
            <h6 id="sixreson">Six reasons</h6>
            <div id="wyscqm">
              <h4 id="whyu">Why You should Choose</h4>
              <h3 id="quick">#Quick Mechanice</h3>
            </div>
         
        </div>
        <div class="subdiv">
          <div class="desc">
            <div class="desclogdiv">
              <img class="desclogdiv" src="../assets/logo.png" />
            </div>
            <div class="descdesc">
              <div class="descheadder">Fast Process</div>
              <div class="descdescription">
                he process takes minutes and you get instant quotes online.
              </div>
            </div>
          </div>
         <div class="desc">
            <div class="desclogdiv">
              <img class="desclogdiv" src="../assets/logo.png" />
            </div>
            <div class="descdesc">
              <div class="descheadder">Fast Process</div>
              <div class="descdescription">
                he process takes minutes and you get instant quotes online.
              </div>
            </div>
          </div>

          <div class="desc">
            <div class="desclogdiv">
              <img class="desclogdiv" src="../assets/logo.png" />
            </div>
            <div class="descdesc">
              <div class="descheadder">Fast Process</div>
              <div class="descdescription">
                he process takes minutes and you get instant quotes online.
              </div>
            </div>
          </div>

          <div class="desc">
            <div class="desclogdiv">
              <img class="desclogdiv" src="../assets/logo.png" />
            </div>
            <div class="descdesc">
              <div class="descheadder">Fast Process</div>
              <div class="descdescription">
                he process takes minutes and you get instant quotes online.
              </div>
            </div>
          </div>

          <div class="desc">
            <div class="desclogdiv">
              <img class="desclogdiv" src="../assets/logo.png" />
            </div>
            <div class="descdesc">
              <div class="descheadder">Fast Process</div>
              <div class="descdescription">
                he process takes minutes and you get instant quotes online.
              </div>
            </div>
          </div>

          <div class="desc">
            <div class="desclogdiv">
              <img class="desclogdiv" src="../assets/logo.png" />
            </div>
            <div class="descdesc">
              <div class="descheadder">Fast Process</div>
              <div class="descdescription">
                he process takes minutes and you get instant quotes online.
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
<div class="rightdiv">
    <img
      class="rightdivimg"
     
      src="../assets/photoright.jpg"
    />
</div>
  </div>
</template>
<script>
export default {
  name: "whyYou",
  components: {},
};
</script>
<style scoped>
* {
  color: white;
}
.maindivs {
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 415px;
  flex-wrap: wrap;
  padding-top: 5px;
  margin-bottom: 20px;
}
.leftdiv {
  width: 60%;
  background-color:#e44997;
  height: 100%;
  margin: 2px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.image {
  width: 20%;
  height: 100%;
 
}
.maintext {
  width: 80%;
  height: 100%;
 
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.heading {
  width: 100%;
  height: 100px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
 
}
.subdiv {
  width: 100%;
  height: 300px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.desc {
  width: 49%;
  height: 30%;

  margin: 1px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: -5px;
 
 
}
.desclogodiv {
  width: 10%;
  height: 100%;

}
.descdesc {
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 100%;

}
.descheader {
  height: auto;

}
.descdescription {
  flex-wrap: wrap;
  font-size: 11px;
}
.rightdiv {
  width: 39%;
  height: 100%;
  display: flex;
  align-items: center;
 margin-left: -2px;



}
#wyscqm {
  display: flex;
  flex-direction: row;
  font-size: 25px;
}
#whyu {
  margin-right: 20px;
}
.rightdivimg {
    height: 90%;
   
    width: 100%;
   

}
</style>

