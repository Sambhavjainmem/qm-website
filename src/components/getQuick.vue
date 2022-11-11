<template>
  <div class="downloadmain" id="someSection">
    <div class="downloadleft">
      <img class="sosphone" src="../assets/sosphone.png" />
    </div>
    <div class="downloadright">
      <div class="headderofpage">
        <p class="getquick">Get the Quick Mechanic App</p>
        <p class="sendlink">
          WE will send you link, open it on your phone the app
        </p>
      </div>
      <div class="radioandemail">
        <div class="subradioandemail">
          <!-- //width 70% -->
          <div class="emailandphone">
            
            <div class="container">
              <div class="right">Email</div>
              <div class="radio">
                <input type="radio" value="email" name="send" id="email" />
                <label for="email"></label>
              </div>
            </div>

           
            <div class="container1">
                <div class="right">Phone</div>
              <div class="radio">
                <input type="radio" value="phone" name="send" id="phone" />
                <label for="phone"></label>
              </div>
            </div>
          </div>
          <input
            class="inputemail"
            type="text"
            placeholder="  Email"
          />
        </div>
        <div class="sendbtn">
          <!-- width 30% -->
          <button class="button button2">Share App Link</button>
        </div>
      </div>
      <div class="downloaddiv">
        <div class="downloadapp">Download the App</div>
        <div class="imgofplayandapple">
          <img class="storeimg" src="../assets/Group 10765-h.jpg" />
          <img class="storeimg" src="../assets/Group 10765-h.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "getQuick",
  components: {},
};
</script>


<style scoped>
.container1 {
  margin: 10px;

  display: flex;

  align-items:center;
  justify-content: left;
  width: 50%;
 
 
}
.container {
  margin: 10px;
  display: flex;

  align-items: center;
  width: 50%;
}
.right {
  float: left;
  margin: 10px;
  color: black;
  font-size: 20px;
  font-weight: bold;
  align-items: center;
}
.radio {
  width: 20px;
  position: relative;
}
.radio label {
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: absolute;
  top: 1;
  left: 0;
  background: white;
  border-radius: 50px;
  box-shadow: inset 0px 1px 1px white, 3px 3px 9px rgba(0, 0, 0, 0.5);
  border: 1px solid black;
}
.radio label:after {
  content: "";
  position: absolute;
  top: 4px;
  left: 4px;
  border: 6px solid blue;
  border-radius: 50px;
  opacity: 0;
}
.radio label:hover::after {
  opacity: 0.3;
}
.radio input[type="radio"] {
  visibility: hidden;
}
.radio input[type="radio"]:checked + label:after {
  opacity: 1;
}

.button {
  background-color: red; /* Green */
  border: none;
  color: white;
  width: auto;
  height: 50px;
  padding-left: 25px ;
  padding-right: 25px;
  font-size: 20px;

  justify-content: center;
  align-items: center;
  text-decoration: none;

  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  border-radius: 15px;
 
 

  position:absolute;
  bottom: 8px;
  left: 0px;

}

.button2:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.downloadmain {
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 500px;
  padding-top: 30px;
}
.downloadleft {
  width: 30%;
  height: 100%;

  display: flex;
  justify-content: center;
}
.emailandphone {

  display: flex;

  flex-direction: row;

}
.downloadright {
  width: 70%;
  height: 100%;

  display: flex;
  flex-direction: column;
}
.headderofpage {
  width: 100%;
  height: auto%;

  display: flex;
  flex-direction: column;
  margin: 10px;
}
.radioandemail {
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: row;
}

.getquick {
  font-size: 29px;
}
sendlink {
  font-size: 19px;
}
.inputemaildiv {
}

.subradioandemail {
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.sendbtn {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items:flex-start;
 
  position: relative;

  height: 100%;
}
.inputemail {
  width: 80%;
  height: 50px;
  place-content: "suraj";
}
.downloaddiv {
  width: 100%;
  height: 45%;

  display: flex;
  flex-direction: column;
}
.downloadapp {
  width: 100%;
  height: 50%;
  font-size: 29px;
  padding-top: 10px;
}
.imgofplayandapple {
  width: 70%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  margin-top: -10px;
  padding-right:30px;
 
}
.sosphone {
  width: 85%;
  height: auto;

 
}
.inputemail {
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
  width: 95%;
}
.storeimg {
  width: 200px;
  height: 60px;
  cursor: pointer;
}
</style>

