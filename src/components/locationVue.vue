<template>
  <div id="main">
    <div  id="lochead">
      Please setup locations

      <div id="headdersub">
        Help us with your location so we can serve you better
      </div>
    </div>

    <div class="closebtn">
      <v-btn icon dark @click="()=>{$store.state.locdialog = false;bool = true}">
        <v-icon class="grey--text" style="font-size: 30px">mdi-close</v-icon>
      </v-btn>
    </div>
    <div class="half" v-if="bool">
      <div class="layer">
        <div class="ico">
          <div style="
            width: 50px;
            height: 50px;

            display: flex;
            justify-content: center;
            align-items: center;
          ">
            <v-icon style="font-size: 35px">mdi-crosshairs-gps</v-icon>
          </div>
        </div>
        <div class="parent">
          <div class="hedr hdr">Use my current location</div>
          <div class="hedr subhdr">
            We need permission to use your device’s location
          </div>
          <div class="hedr">
            <v-btn class="red white--text" style="
              width: 274px;
              height: 48px;
              font-family: 'Avenir Next';
              font-style: normal;
              font-weight: 500;
            " @click="
              () => {
                load = true;
                location();
              }
            ">FETCH MY CURRENT LOCATION</v-btn><v-btn elevation="2" icon loading class="m-2" v-if="load"></v-btn>
          </div>
          <div></div>
        </div>
      </div>
    </div>
    <div style="" id="seperater" v-if="bool"></div>
    <div class="half" v-if="bool">
      <div class="layer">
        <div class="ico">
          <div style="
            width: 50px;
            height: 50px;

            display: flex;
            justify-content: center;
            align-items: center;
          ">
            <v-icon style="font-size: 35px">mdi-map-marker</v-icon>
          </div>
        </div>
        <div class="parent">
          <div class="hedr hdr">Select location manually</div>
          <div class="hedr subhdr">
            Select or search your city from the list
          </div>
          <div class="hedr">
            <v-btn class="red white--text" style="
              width: 274px;
              height: 48px;
              font-family: 'Avenir Next';
              font-style: normal;
              font-weight: 500;
            " @click="bool = !bool">SELECT MANUALLY</v-btn>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!bool" id="unknown">
      

      <div id="unknown2">
        <v-btn class="red--text" text ><v-icon></v-icon></v-btn>
        <v-btn class="red--text pa-0" text ><v-icon></v-icon> </v-btn>
       
      </div>
      
      <div id="unknown3">
        <div id="unknown2" style="position: absolute; top: -56px; left: 0px; ">
        
       
      </div>
        <div style="">Popular Cities</div>
        <div style="" id="cityrow">
          <div class="card" @click="locmalual(popularCity[0])">
            <img style="width: 48px; height: 55px" src="../assets/cities/icon_new-delhi.png" />
            <div class="citytitle">Delhi</div>
          </div>
          <div class="card" @click="locmalual(popularCity[1])">
            <img style="width: 48px; height: 55px" src="../assets/cities/icon_bengaluru.png" />
            <div class="citytitle">Bangalore</div>
          </div>


          <div class="card" @click="locmalual(popularCity[2])">
            <img style="width: 48px; height: 55px" src="../assets/cities/icon_mumbai.png" />
            <div class="citytitle">Mumbai</div>
          </div>
          <div class="card" @click="locmalual(popularCity[3])">
            <img style="width: 48px; height: 55px" src="../assets/cities/icon_panipat_1624945713.png" />
            <div class="citytitle">Chandigarh</div>
          </div>
          <div class="card" @click="locmalual(popularCity[4])">
            <img style="width: 48px; height: 55px" src="../assets/cities/icon_chennai.png" />
            <div class="citytitle">Chennai</div>
          </div>
          <div class="card" @click="locmalual(popularCity[5])">
            <img style="width: 48px; height: 55px" src="../assets/cities/icon_hyderabad.png" />
            <div class="citytitle">Hyderabad</div>
          </div>
          <div class="card" @click="locmalual(popularCity[6])">
            <img style="width: 48px; height: 55px" src="../assets/cities/icon_kolkata.png" />
            <div class="citytitle">Kolkata</div>
          </div>
          <div class="card" @click="locmalual(popularCity[7])">
            <img style="width: 48px; height: 55px" src="../assets/cities/icon_jaipur_1667550208.png" />
            <div class="citytitle">Jaipur</div>
          </div>
        </div>
      </div>
      <div style="height: 100px; width: 90%">
        <div style="">Other Cities</div>
        <div style="width: 100%; height: fit-content; flex-wrap: wrap">
          <v-chip v-for="(item, i) in otherpopularCity" :key="i" outlined class="ma-2" @click="locmalual(item)">
            {{ item.name }}</v-chip>
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
          name: "Delhi",
          location: {
            longitude: "77.2314900",
            latitude: "28.6519500",
          },
        },
        {
          name: "Bangalore",
          location: {
            longitude: "77.580643",
            latitude: "12.972442",
          },
        },
        {
          name: "Mumbai",
          location: {
            longitude: "72.8826100",
            latitude: "19.0728300",
          },
        },
        {
          name: "Chandigarh",
          location: {
            longitude: "76.768066",
            latitude: "30.741482",
          },
        },
        {
          name: "Chennai",
          location: {
            longitude: "NA",
            latitude: "NA",
          },
        },
        {
          name: "Hyderabad",
          location: {
            longitude: "80.237617",
            latitude: "13.067439",
          },
        },
        {
          name: "Kolkata",
          location: {
            longitude: "88.3630400",
            latitude: "22.5626300",
          },
        },
        {
          name: "Jaipur",
          location: {
            longitude: "75.7878100",
            latitude: "26.9196200",
          },
        },
      ],
      otherpopularCity: [
        { name: "Surat" },
        { name: "Lucknow" },
        { name: "Patna" },
        { name: "Agra" },
        { name: "Nasik" },
        { name: "Thane" },
        { name: "Faridabad" },
        { name: "Rajkot" },
        { name: "Allahabad" },
        { name: "Jabalpur" },
        { name: "Jodhpur" },
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
    getCityIcon(city) {
      switch (city) {
        case "Delhi":
          return "../assets/city.png";

        case "Bangalore":
          return "../assets/cities/icon_bengaluru.png";
        case "Mumbai":
          return "../assets/cities/icon_mumbai.png";
        case "Chandigarh":
          return "../assets/cities/icon_rohtak_1624945760.png";
        case "Chennai":
          return "../assets/cities/icon_chennai.png";
        case "Hyderabad":
          return "../assets/cities/icon_hyderabad.png";
        case "Kolkata":
          return "../assets/cities/icon_kolkata.png";
        case "Jaipur":
          return "../assets/cities/icon_jaipur_1667550208.png";

        default:
          return "../assets/city.png";
      }
    },

    locmalual(item) {
      this.$store.state.location = item.name;
      this.$store.state.location1 = item.name;
      this.$store.state.location2 = null;
      this.$store.state.currentState = item.name;
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
          (this.$store.state.coordinates = {
            latitude: this.lat,
            longitude: this.long,
          }),
            (url = `https://geocode.maps.co/reverse?lat=${this.lat}&lon=${this.long}`);
          const response = await axios.get(url);

          console.log(response.data.address);
          const myArray = response.data.display_name.split(",");
          this.$store.state.location = response.data.display_name;
          this.$store.state.currentState = response.data.address.state;


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

    },


  },
  created() {
    console.log(this.getCityIcon("Delhi"));
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
  padding: 4px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(24px);
}

#headdersub {
  font-family: 'Avenir Next';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;

  color: rgba(0, 0, 0, 0.87);
}

#cityrow {
  display: flex;
  flex-direction: row;
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

#unknown2 {
  width: 90%;
  height: 48px;
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
}

#unknown3 {
  height: 100px;
  width: 90%;

  display: flex;
  flex-direction: column;
  position: relative;
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

#unknown {
  width: 85%;
  height: 500px;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: -100px;
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

#lochead {
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

#manualloc {
  width: fit-content;
  height: 70px;
  font-family: 'Avenir Next';
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 46px;

  color: rgba(0, 0, 0, 0.6);
}

#seperater {
  width: 2px;
  height: 300px;
  background-color: grey;
  opacity: 0.5;
}

@media (max-width: 888px) {

  .closebtn {

    top: 10px;
    right: 21px;

  }
  .citytitle {

  font-size: 10px;

}

  #manualloc {
    position: absolute;
    top: 10px;
    left: 20px;
  }

  #unknown {
    width: 100%;

  }

  #unknown2 {
    width: 100%;
  }

  #unknown3 {
    width: 100%;
  }

  #cityrow {
    display: flex;
    flex-direction: row;
    height: fit-content;
    flex-wrap: wrap;
  }

  #headdersub {
    font-family: "Avenir Next";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 27px;
    color: rgba(0, 0, 0, 0.87);
    width: 300px;
  }

  .layer {

    margin-left: -50px;
    height: fit-content;
  }

  #lochead {
    width: 100%;
    height: 58px;
    font-family: "Avenir Next";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 46px;
    color: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 10px;
    left: 24px;
  }

  .card {
    width: 56px;
    height: 73px;

    margin-left: 8px;
    margin-right: 8px;
    cursor: pointer;
    margin: 4px;
  }

  #seperater {
    width: 80%;
    height: 4px;
    margin-top: -2px;
    margin-bottom: -2px;
  }

  #main {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.6);
    -webkit-backdrop-filter: blur(24px);
    backdrop-filter: blur(24px);
  }
}
</style>

