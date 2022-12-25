<template>
  <div id="main">
    <div id="loc">
      <div id="link">
        Home /
        <div> Standerd Services</div>
      </div>

      <div id="link">
        Maruti / alto / petrol
        <div style="color: red; cursor: pointer"> (Change Car)</div>
      </div>
    </div>
    <div class="d-flex justify-space-around mt-6 bg-surface-variant xyz">
        <v-chip
          v-for="(i, index) in item"
          v-bind:key="index"
          class="ma-0 pt-4 pb-4 pl-12 pr-12 xyza"
          :input-value="active"
          active-class="red white--text"
          x-large
          @click="key = i.category"
          text
          :color="
            curpage == i.category
              ? 'background: red '
              : 'background: transparent'
          "
          >{{ i.category }}
        </v-chip>
      </div>

    <!-- <div class="l1">
      <div class="l1-1">
        <img width="100%" height="auto" src="../assets/workshop.jpg" />
      </div>
      <div class="l1-2">
        <div class="l1-2-1"></div>
        <div class="l1-2-2"></div>
      </div>
      <div class="l1-3">
        <div class="l1-3-1"></div>
      </div>
      <div class="l1-4"></div>
      <div class="l1-5">
        <div class="l1-5-1"></div>
        <div class="l1-5-2"></div>
      </div>
      <div class="l1-6">
        <div class="l1-6-1"></div>
      </div>
    </div> -->
  </div>
</template>
      <script>
//   import vechileInfo from "../vechileInfo.vue";
//   import { db } from "../../firebase";
//   import { collection, getDocs } from "firebase/firestore";

export default {
  name: "productsVue",
  data() {
    return {
      loading: false,
      selection: 1,
    };
  },

  components: {},
  mounted() {
    //   this.dialogs = true;
    //   this.curpage = this.$route.params.id;
    //   this.$store.state.vdialog = true;
    // To apply the default browser preference instead of explicitly setting it.
    // firebase.auth().useDeviceLanguage();
  },
  watch: {
    // Creating function for
    // input component
    // key: function () {
    //   this.data = this.items.filter((item) => item.category == this.key);
    //   this.curpage = this.key;
    // },
  },
  created() {
    //   this.firebaseData();
    // console.log(this.key)
    //   this.dialogs = true;
    //  console.log("********************")
    //     console.log(this.data)
    //     console.log("********************")
    // To apply the default browser preference instead of explicitly setting it.
    // firebase.auth().useDeviceLanguage();
    //   navigator.geolocation.getCurrentPosition(
    //     (position) => {
    //       console.log(position.coords.latitude, position.coords.longitude);
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
  },

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },

    //   dent(cat) {
    //     console.log(this.$route, cat);
    //     // this.$router.go(cat);
    //   },

    //   async firebaseData() {
    //     this.items = [];
    //     const querySnapshot = await getDocs(collection(db, "services"));
    //     querySnapshot.forEach((doc) => {
    //       // doc.data() is never undefined for query doc snapshots
    //       this.items.push(doc.data());
    //     });
    //     this.item = this.items;
    //     console.log("tttttttttt");
    //     console.log(this.item);
    //     this.data = this.items.filter((item) => item.category == this.key);
    //     console.log("periodic data ");

    //     console.log(this.data[0].description);
    //     console.log("periodic data ");
    //   },
  },
};
</script>
  
  
  
      <style scoped>
#main {
  width: calc(100% - 200px);
  height: 100%;
  border: 1px solid black;
  margin-top: 58px;
  margin-left: 100px;
  margin-right: 100px;
}
#loc {
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  justify-content: space-between;
  align-text: center;
  align-items: center;
}
#link {
  display: flex;
  flex-direction: row;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  /* identical to box height */

  color: rgba(0, 0, 0, 0.86);
}

.l1 {
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 512px;
  border: 1px solid black;
}
.l1-1 {
  width: 360px;
  height: 206px;
  border: 1px solid black;
  background-color: grey;
}
.l1-2-1 {
  width: 50%;
  height: 100%;
  background-color: blue;
}
.l1-2-2 {
  width: 50%;
  height: 100%;
  background-color: green;
}
.l1-2 {
  width: 360px;
  height: 60px;
  border: 1px solid black;
  background-color: grey;
  display: flex;
  flex-direction: row;
}
</style>
  