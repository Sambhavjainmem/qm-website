<template>
  <div id="main">
    <div
      v-if="bool"
      style="
        width: fit-content;
        height: 70px;
        font-family: 'Avenir Next';
        font-style: normal;
        font-weight: 500;
        font-size: 34px;
        line-height: 46px;

        color: rgba(0, 0, 0, 0.6);
        position: absolute;
        top: 80px;
        left: 100px;
      "
    >
      Please setup locations

      <div
        style="
          font-family: 'Avenir Next';
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 27px;

          color: rgba(0, 0, 0, 0.87);
        "
      >
        Help us with your location so we can serve you better
      </div>
    </div>

    <div class="closebtn">
      <v-btn icon dark @click="$store.state.locdialog = false">
        <v-icon class="grey--text" style="font-size: 30px">mdi-close</v-icon>
      </v-btn>
    </div>
    <div class="half" v-if="bool">
      <div class="layer">
        <div class="ico">
          <div
            style="
              width: 50px;
              height: 50px;

              display: flex;
              justify-content: center;
              align-items: center;
            "
          >
            <v-icon style="font-size: 35px">mdi-crosshairs-gps</v-icon>
          </div>
        </div>
        <div class="parent">
          <div class="hedr hdr">Use my current location</div>
          <div class="hedr subhdr">
            We need permission to use your device’s location
          </div>
          <div class="hedr">
            <v-btn
              class="red white--text"
              style="
                width: 274px;
                height: 48px;
                font-family: 'Avenir Next';
                font-style: normal;
                font-weight: 500;
              "
              @click="
                () => {
                  load = true;
                  location();
                }
              "
              >FETCH MY CURRENT LOCATION</v-btn
            ><v-btn elevation="2" icon loading class="m-2" v-if="load"></v-btn>
          </div>
          <div></div>
        </div>
      </div>
    </div>
    <div
      style="width: 2px; height: 300px; background-color: grey; opacity: 0.5"
      v-if="bool"
    ></div>
    <div class="half" v-if="bool">
      <div class="layer">
        <div class="ico">
          <div
            style="
              width: 50px;
              height: 50px;

              display: flex;
              justify-content: center;
              align-items: center;
            "
          >
            <v-icon style="font-size: 35px">mdi-map-marker</v-icon>
          </div>
        </div>
        <div class="parent">
          <div class="hedr hdr">Select location manually</div>
          <div class="hedr subhdr">
            Select or search your city from the list
          </div>
          <div class="hedr">
            <v-btn
              class="red white--text"
              style="
                width: 274px;
                height: 48px;
                font-family: 'Avenir Next';
                font-style: normal;
                font-weight: 500;
              "
              @click="bool = !bool"
              >SELECT MANUALLY</v-btn
            >
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="!bool"
      style="
        width: 85%;
        height: 500px;

        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: -100px;
      "
    >
      <div
        style="
          width: fit-content;
          height: 70px;
          font-family: 'Avenir Next';
          font-style: normal;
          font-weight: 500;
          font-size: 34px;
          line-height: 46px;
          

          color: rgba(0, 0, 0, 0.6);
        "
      >
        Please setup location

        <div
          style="
            font-family: 'Avenir Next';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 27px;

            color: rgba(0, 0, 0, 0.87);
          "
        >
          Help us with your location so we can serve you better
        </div>
      </div>

      <div
        style="
          width: 90%;
          height: 48px;
          display: flex;
          flex-direction: row;

          justify-content: space-between;
          align-items: center;
          border-radius: 5px;
        "
      >
        <v-btn class="red--text" text @click="bool = !bool"
          ><v-icon>mdi-chevron-left</v-icon> back</v-btn
        >
        <input
          style="
            width: 90%;
            height: 48px;
            border: 1px solid grey;
            border-radius: 5px;
            border: 1px solid black;
          "
          type="text"
          id="fname"
          name="fname"
        />
      </div>
      <div
        style="
          height: 100px;
          width: 90%;

          display: flex;
          flex-direction: column;
        "
      >
        <div style="">Popular Cities</div>
        <div style="display: flex; flex-diraction: row">
          <div class="card" v-for=" (item,i) in popularCity" :key="i" @click="locmalual(item)">
            <img style="width: 48px; height: 55px" src="../assets/city.png" />
            <div class="citytitle">{{item.name}}</div>
          </div>

         
        </div>
      </div>
      <div style="height: 100px; width: 90%">
        <div style="">Other Cities</div>
        <div style="width: 100%; height: fit-content; flex-wrap: wrap">
          <v-chip v-for="(item ,i) in otherpopularCity" :key="i" outlined class="ma-2" @click="locmalual(item)"> {{ item.name }}</v-chip>

         
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
import axios from "axios";
export default {
  name: "locationVue",
  data() {
    return {
      bool: true,
      lat: "",
      long: "",
      load: false,
      popularCity: [
      {
        "name" : "Delhi",
        "location" : {
          "longitude" : "77.2314900",
            "latitude" : "28.6519500",

        }
      },
      {
        "name" : "Bangalore",
        "location" : {
          "longitude" : "77.580643",
            "latitude" : "12.972442",

        }
      },
      {
        "name" : "Mumbai",
        "location" : {
          "longitude" : "72.8826100",
            "latitude" : "19.0728300",

        }
      },
      {
        "name" : "Chandigarh",
        "location" : {
          "longitude" : "76.768066",
            "latitude" : "30.741482",

        }
      },
      {
        "name" : "Chennai",
        "location" : {
          "longitude" : "NA",
            "latitude" : "NA",

        }
      },
      {
        "name" : "Hyderabad",
        "location" : {
          "longitude" : "80.237617",
            "latitude" : "13.067439",

        }
      },
      {
        "name" : "Kolkata",
        "location" : {
          "longitude" : "88.3630400",
            "latitude" : "22.5626300",

        }
      },
      {
        "name" : "Jaipur",
        "location" : {
          "longitude" : "75.7878100",
            "latitude" : "26.9196200",

        }
      },




     ],
     otherpopularCity: [
      
     {"name" : "Surat"},
     {"name" : "Lucknow"},
     {"name" : "Patna"},
     {"name" : "Agra"},
     {"name" : "Nasik"},
     {"name" : "Thane"},
     {"name" : "Faridabad"},
     {"name" : "Rajkot"},
     {"name" : "Allahabad"},
     {"name" : "Jabalpur"},
     {"name" : "Jodhpur"},
     ],

    };
  },

  components: {},

  // methods: {
  //   anync location() {
  //     const response = await axios.get('https://geocode.maps.co/reverse?lat=28.536318&lon=77.229156');
  //     console.log(response.data);

  //   },
  // },

  methods: {

    locmalual (item){
    
    this.$store.state.location1 = item.name; 
          this.$store.state.location2 = null;
               
          localStorage.setItem(
            "location1",
            JSON.stringify(this.$store.state.location1)
          );
          localStorage.setItem(
            "location2",
            JSON.stringify(this.$store.state.location2)
          );
     
            this.$store.state.locdialog = false;     
  },




    // async location() {
    //   navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     this.lat = "28.651";
    //      this.long = "77.231";
    //      console.log(position);

    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    // const url = `https://geocode.maps.co/reverse?lat=${this.lat}&lon=${this.long}`;
    //   this.$store.state.location = await axios.get(url);

    //   console.log(this.$store.state.location.data.display_name);

    // },

    async reverseGeocode() {
      const response = await axios.get(
        "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
          this.lat +
          "," +
          this.lang +
          ".json",
        {
          params: {
            access_token:
              "pk.eyJ1Ijoic2t0aXZhcmkxIiwiYSI6ImNsYnVvOG90MTBhNDk0M3BoM2hsamxtdGcifQ.tNhjVfCgOEq2NyAMNq-pkg",
          },
        }
      );
      console.log(response);

      // this.address = response.data.features[0].place_name;
    },

    async location() {
      var url = `https://geocode.maps.co/reverse?lat=${this.lat}&lon=${this.long}`;

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          //  console.log(position);
          this.lat = position.coords.latitude;
          this.long = position.coords.longitude;
          console.log("position");
          url = `https://geocode.maps.co/reverse?lat=${this.lat}&lon=${this.long}`;
          const response = await axios.get(url);

          console.log(typeof response.data.display_name);
          const myArray = response.data.display_name.split(",");
          this.$store.state.location= response.data.display_name;

          console.log(myArray);
          this.$store.state.location1 = myArray[0];
          this.$store.state.location2 = myArray[1];
          localStorage.setItem(
            "location1",
            JSON.stringify(this.$store.state.location1)
          );
          localStorage.setItem(
            "location2",
            JSON.stringify(this.$store.state.location2)
          );
          localStorage.setItem(
            "location",
            JSON.stringify(this.$store.state.location)
          );


          console.log(
            "loc",
            this.$store.state.location1,
            this.$store.state.location2
          );
          this.$store.state.locdialog = false;
          this.load = false;
        },
        (error) => {
          console.log(error);
        }
      );
      //const url = `https://us-central1-calldoc-dev.cloudfunctions.net/messaging-sendMessage?token=${token}&title=${title}&body=${body}&id=${id}`;

      // this.reverseGeocode();
    },

    // async location() {
    //   try {
    //     var { data } = await axios.get(
    //       "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
    //         this.lat +
    //         "," +
    //         this.long +
    //         "&key=AIzaSyBEDWtvBBPBlTiJzCNsS29heJ_7V_IIZcM"
    //     );
    //     if (data.error_message) {
    //       console.log(data.error_message);
    //     } else {
    //       this.address = data.results[0].formatted_address;
    //       console.log(this.address);
    //     }
    //   } catch (error) {
    //     console.log(error.message);
    //   }
    // },
  },
  created() {
    // this.$store.commit("getData", [{ name: "suraj" }, { name: "kumar" }]);
    // console.log(this.items);
  },
};
</script>
  
  
  <style scoped>
#main {
  width: 100%;
  height: 100%;

  padding-top: 56px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(24px);
}

.subhdr {
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;

  color: rgba(0, 0, 0, 0.87);
  margin-top: -10px;
}
.citytitle {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  /* identical to box height */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  color: rgba(0, 0, 0, 0.6);
}
.hdr {
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;

  color: rgba(0, 0, 0, 0.6);
}
.closebtn {
  position: absolute;
  top: 90px;
  right: 50px;
  cursor: pointer;
  z-index: 10000;
}
.hedr {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
}
.half {
  width: 50%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.layer {
  width: 350px;
  height: 200px;

  display: flex;
  flex-direction: row;
}

.ico {
  width: 50px;
  height: 100%;

  display: flex;
  justify-content: center;
}
.parent {
  width: calc(100% - 50px);
  height: 100%;
}
.card {
  width: 56px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  margin-right: 8px;
  cursor: pointer;
}
</style>
  
  