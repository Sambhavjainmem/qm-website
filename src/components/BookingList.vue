<template>
  <v-container>
    <v-card class="card" elevation="0">
      <div id="link">
          <v-btn
            text
            :ripple="false"
            to="/"
            class="no-background-hover ma-0 pa-0"
          >
            Home
          </v-btn>

          <v-btn
            text
            :ripple="false"
            class="no-background-hover ma-0 pa-0 text--secondary"
            style="margin-left: -5px"
          >
            / MY BOOKINGS
          </v-btn>
        </div>
      <v-card-title
        style="
          font-family: Arial, Helvetica, sans-serif;
          text-align: center;
          padding:2mm;
        "
        >My Bookings</v-card-title
      >
      <v-card
        class="ma-2"
       
      >
        <v-data-table
          class="ma-2 pa-2"
          :headers="headers"
          :items="tableData"
          :search="search"
        ></v-data-table>
      </v-card>
    </v-card>
  </v-container>
</template>
    <script>
import { db } from ".././firebase";
import { collection,where,getDocs,query } from "firebase/firestore";
export default {
  name: "bookingList",
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Vehicle Name",
          align: "start",
          filterable: false,
          value: "vehicleInfo.vehicleName",
          class: "header",
        },

        { text: "Pickup Date", value: "pickupInfo.date" },
        { text: "Pickup Time", value: "pickupInfo.time" },
        { text: "Status", value: "status" },
        { text: "Address", value: "pickupInfo.address" },
        { text: "Starts At", value: "startTime.date" },
        { text: "Ends At", value: "endTime.date" },
      ],
      tableData: [],
      items: [
        {
          text: 'HOME',
          disabled: false,
          href: '/',
        },
        {
          text: 'My Bookings',
          disabled: true,
          href: 'breadcrumbs_link_1',
        },
      ],
    };
  },
  methods: {
    async fetchBookings() {

      const q = query(collection(db, "pickups"), where("customerInfo.id", "==", this.$store.state.uid));

      const querySnapshots = await getDocs(q);
      let items = [];
      querySnapshots.forEach((item) => {
          items.push(item.data());
        });
        this.tableData = items;
    },
  },
  created() {
    this.fetchBookings();
  },
};
</script>,
     
  <style scoped>
.card {
  margin-top: 9vh;
}
tbody > tr > td {
  border: solid black 3px;
}
thead tr th span {
  font-size: large;
  background-color: BLUE;
}
</style>