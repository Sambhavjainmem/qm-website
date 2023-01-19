<template >
  <div id="topdiv">
    <v-row class="backgroundImageCss">

      <div  id="headcol">
        <v-row style="margin-top: 10rem">
          <div id="h1">
            Training and Certification
          </div>
        </v-row>
        <v-row style="">
          <div id="h2">
            Get Certified under Skill India Programme
          </div>
        </v-row>
        <v-row>
          <div style="
              font-size: 32px;
              font-weight: 700;
              font-family: Arial, Helvetica, sans-serif;
              text-align: center;
            ">
            <a href="https://eskillindia.org/" target="_blank">
              <v-btn color="#D50000" style="
                  height: 48px;
                  padding: 5px;
                  border-radius: 8px;
                  width: 132px;
                  margin-top: 150px;
                "><span style="
                    margin: 5px 5px 5px 5px;
                    font-size: 12px;
                    font-weight: bolder;
                    color: white;
                  ">GET CERTIFIED</span></v-btn></a>
          </div>
        </v-row>
      </div>
    </v-row>
    <div id="partnerimgdiv">
      <img src="../assets/bottom.jpg" id="partnerimg" />
    </div>

    <v-row id="backdiv">

      <span id="h12">

        <br>
        Automotive Skill Developement Platform</span>

      <p id="p1">
        QuickMechanic provides Training and Certification for Mechanic
      </p>

      <p id="p2">
        QuickMechanic endeavour is to fulfil the growing need for skilled
        manpowerin India automotive sector and narrow the existing gap between
        the demand and supply of skills.
      </p>
      <p id="p3">
        QuickMechanic wish is to partner with Govt. Of India skill development
        Mission by imparting the skills required by ever-growing automotive
        sector.
      </p>
      <p id="p4">
        QuickMechanic want to contribute through its digital platform i.e., App
        to upgrade skills of professions of automotive sector by developing
        necessary training standards and quality assurance both online and
        offline mode.
      </p>
      <p id="p5">
        QuickMechanic will provide platform for Government mission to increase
        the earnings of automotive sector workers mainly in unorganized sector.
      </p>
    </v-row>
    <getQuick />
    <bottomVue />
  </div>
</template>

<script>
import bottomVue from "./bottomVue";
import getQuick from "./getQuick.vue";
export default {
  name: "trainingView",
  data() {
    return {};
  },
  components: {
    bottomVue,
    getQuick,

    // profileVue ,
  },
  created() {
    this.$store.state.currentPath = "/trainingView";
  },
};
</script>

<style>
#topdiv {
  height: 80rem;
  width: 100%;
  margin-top: 4rem;

}

#headcol {
  width: 100%;
  height: fit-content;

}

.v-application--is-ltr .v-messages {
  text-align: left;
  display: none;
}

.backgroundImageCss {
  height: 34rem;
  margin: 0px;
  background: url("../assets/banner2.png");
  background-size: cover;
}

#p1 {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  padding-left: 290px;
  padding-right: 290px;
  font-size: 28px;
  font-weight: lighter;
  color: gray;
}

#backdiv {
  height: 45rem;
  background-color: #eeeeee;
  margin: 0px
}

#h12 {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  margin-top: 5rem;
}

#p2 {
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  padding-left: 250px;
  font-size: 18px;
  padding-right: 190px;
  color: gray;
}

#p3 {
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  padding-left: 250px;
  font-size: 18px;
  padding-right: 190px;
  color: gray;
}

#p4 {
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  padding-left: 250px;
  font-size: 18px;
  padding-right: 190px;
  color: gray;
}

#p5 {
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
  padding-left: 250px;
  font-size: 18px;
  padding-right: 190px;
  color: gray;
}

#h1 {
  font-size: 64px;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
  color: #eeeeee;
  text-align: center;

  background-color: transparent;
}

#h2 {
  font-size: 32px;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
  color: #eeeeee;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: transparent;
}

@media (max-width: 888px) {

  #p1,
  #p2,
  #p3,
  #p4,
  #p5 {
    padding-left: 4px;
    padding-right: 4px;
    font-size: 12px;
    font-weight: 400;
  }

  #topdiv {
    margin-top: 0px;
  }

  #h1 {
    font-size: 24px;
  }

  #h2 {
    font-size: 18px;
    font-weight: 300;
  }

  #backdiv {
    height: fit-content;
    width: 100%;
  }

  .col {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 30%;
  }

  #h12 {

    margin-top: 0rem;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 20px;
  }



}
</style>