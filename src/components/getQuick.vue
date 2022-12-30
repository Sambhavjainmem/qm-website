<template>
  <div class="downloadmain" >
    <div class="dialogBoxCss">
      <!-- <v-btn @click="dialogs = false" style="
      background: transparent; box-shadow: none;
      ">
          <v-icon class="elevation-0 red--text">mdi-close</v-icon>
        </v-btn> -->
    </div>
    <div class="bgtext" v-if="!$store.state.becomedialog" >GET QUICKMECHANIC APP</div>
    <div class="bgtext" v-if="$store.state.becomedialog">BECOME A QUICK MECHANIC</div>
    <div id="fff">
      <div class="downloadleft">
        <img class="sosphone" src="../assets/App_website-logo.png" />
      </div>
      <div class="downloadright">
        <div style="widht: 429px; height: 255px">
          <div class="sendlink">
            Get QuickMechanic App installation link on your phone <br />
            via SMS/Whatsapp
          </div>
          <div
            class="radiorow"
            style="width: 300px; display: flex; flex-direction: row"
          >
            <v-radio-group v-model="radioGroup">
              <div
                style="
                  display: flex;
                  flex-direction: row;
                  width: 300px;
                  height: 50px;
                "
              >
                <div
                  style="
                    width: fit-content;
                    height: fit-content;
                    margin-right: 50px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                  "
                >
                  <v-radio
                    style="font-size: 30px"
              
                    value="sms"
                    color="gray"
                    class="ma-0 pa-0"
                  >
                  </v-radio>

                  <div class="ll">SMS</div>
                </div>
                <div
                  style="
                    width: fit-content;
                    height: fit-content;
                    margin-right: 50px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                  "
                >
                  <v-radio
             
                    value="whatsApp"
                    color="gray"
                    class="ma-0 pa-0"
                  ></v-radio>

                  <div class="ll">WhatsApp</div>
                </div>
              </div>
            </v-radio-group>
          </div>

          <div
            style="
              width: 100%px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 40px;
              border-radius: 8px;
              height: 48px;
              border: 1px solid rgba(0, 0, 0, 0.3);
              display: flex;
              flex-direction: row;
              margin-top: 10px;
              align-items: center;
              padding-right: 5px;
            "
          >
            <div
              style="
                margin-left: 6px;
                font-family: Arial, Helvetica, sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 24px;
                line-height: 29px;
                color: rgba(0, 0, 0, 0.4);
              "
            >
              +91
            </div>
            <div style="width: 6px; margin-right: 2px; height: 1px"></div>
            <input
              type="text"
              name="fname"
              placeholder="-"
              style="width: calc(100% - 110px); height: 100%"
            />
            <button
              type="button"
              style="
                width: 106px;
                height: 36px;

                color: white;
                padding-left: 8px;
                padding-right: 8px;
                font-family: Arial, Helvetica, sans-serif;
                font-style: normal;
                font-weight: 500;
                font-size: 13px;
                line-height: 17px;

                text-transform: uppercase;
                background: #D50000;
                border-radius: 18px;
              "
            >
              SEND LINK
            </button>
          </div>

          <div
            style="
              width: 428px;
              height: 65px;
              margin-top: 10px;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
            "
          >
          <a
              href="https://play.google.com/store/apps/details?id=com.quickmechanic.unifiedmobileapp&pli=1"
              target="_blank"
              >
            <img class="storeimg" src="../assets/Group 10765-h.jpg" /></a>
            <img
              class="storeimg"
              style="margin-left: 3px"
              src="../assets/Group 10766-h.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: "getQuick",
  data() {
    return {
      radioGroup: true,
      radioGroup2: true,
      dialogs: false,
    };
  },
  components: {},
  
  watch: {
    // Creating function
    // for input component
    radioGroup: function () {
      console.log(this.radioGroup2);
    },
    radioGroup2: function () {
      console.log(this.radioGroup);
    },
  },
  mounted() {
    console.log(this.radioGroup);
    console.log(this.radioGroup2);
    // this.sendSms();
    
  },
  // methods: {
  //   sendSms() {
  //     const client = Twilio('AC753557afb669991fd24cf49766de7f78', '5f62a5b764913bce85aef0d778f128ea');
  //       client.messages.create({
  //         "to" : "+917352540343",
  //         "from": "+918865880350",
  //         "body" : "hello"
  //       });
    
  //   },
  // },
};
</script>


<style scoped>
#fff {
  width: 100%;
  display: flex;
  flex-direction: row;
  height: fit-content;

  justify-content: center;
}

::placeholder {
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  color: rgba(0, 0, 0, 0.4);
}

input {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  color: rgba(0, 0, 0, 0.4);
}
input ::after {
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 29px;
  border: none;
  /* identical to box height */

  color: rgba(0, 0, 0, 0.4);
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: red;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: red;
}
.radiorow {
  width: 400px;
  height: 50px;
  display: flex;
  flex-direction: row;
}

.v-stepper__step {
  align-items: normal;
  display: flex;
  display: flex;
  flex-direction: row;
  padding: 24px;
  position: relative;
}

#back {
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
}

.ll {
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: gray;
}
.container1 {
  margin: 10px;

  display: flex;

  align-items: center;

  width: 50%;
  width: 40px;
}
.container {
  margin: 10px;
  display: flex;

  align-items: center;
  width: 50%;
  height: 40px;
}
.right {
  margin-left: 26px;
  color: black;
  font-size: 20px;
  font-weight: bold;
  align-items: center;
  font-weight: 400;
}
.right1 {
  margin-left: 6px;
  color: black;
  font-size: 20px;
  font-weight: 400;
  align-items: center;
}
.radio {
  width: 20px;
  position: relative;
}
.radio label {
  width: 22px;
  height: 22px;
  cursor: pointer;
  position: absolute;
  top: 1;
  left: 0;
  background: white;
  border-radius: 50px;
  box-shadow: inset 0px 1px 1px white, 3px 3px 9px rgba(0, 0, 0, 0.5);
}
.radio label:after {
  content: "";
  position: absolute;
  top: 4px;
  left: 4px;
  border: 6px solid black;
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
  border: none;
  color: white;
  width: 200px;
  height: 50px;
  padding-left: 25px;
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

  position: absolute;
  bottom: 8px;
  left: 0px;
}

#homepage {
  position: absolute;
}
.button2:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.downloadmain {
  display: flex;
  flex-direction: column;

  width: 100%;
  height: calc(100vh - 100px);

  background-color: white;

  justify-content: space-evenly;

  background: linear-gradient(180deg, #ffffff 0%, #efefef 100%);
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);
  position: relative;
}

.downloadleft {
  width: fit-content;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.emailandphone {
  display: flex;

  flex-direction: row;

  height: 50px;
}
.downloadright {
  width: fit-content;
  height: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;

  margin-left: 80px;
}

.radioandemail {
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: row;
}

.getquick {
  width: fit-content;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: rgba(0, 0, 0, 0.6);
}
.sendlink {
  font-size: 19px;
  color: gray;
  width: 100%;
}

.subradioandemail {
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;

  width: fit-content;
}

.sendbtn {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: relative;

  height: 100%;
}
.inputemail {
  width: 80%;
  height: 50px;
  place-content: "suraj";
  border: 1px solid black;
  width: fit-content;
}
.downloaddiv {
  width: 100%;
  height: 45%;

  display: flex;
  flex-direction: column;
}
.dialogBoxCss{
  width: 1cm;
  position: absolute;
  top: 5mm;
  left: 3mm;
}
.downloadapp {
  width: 100%;
  height: 50px;
  font-size: 29px;
  padding-top: 10px;
}
.imgofplayandapple {
  width: 440px;
  height: 65px;
  display: flex;
  justify-content: space-between;
  margin-top: -10px;
  padding-right: 30px;

  margin-left: 20px;
}
.sosphone {
  width: 261px;
  height: 255px;
}
.inputemail {
  border-radius: 10px;
  margin: 10px;
  width: 95%;
}
.storeimg {
  width: width;
  height: 63px;
  cursor: pointer;
}

.bgtext {
  height: fit-content;
  z-index: 2;
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 41px;
  text-transform: uppercase;

  color: #000000;
}

@media (min-height: 720px) {
  .downloadmain {
    height: 720px;
  }
}
</style>
