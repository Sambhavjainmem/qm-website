<template>
  <div v-if="!isCheckoutClicked">
    <v-card>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Your Cart</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon @click="$store.state.cart = false">
            <v-icon> mdi-close </v-icon></v-btn
          >
        </v-list-item-action>
      </v-list-item>
    </v-card>
    <v-list flat v-if="this.$store.state.cartItems != 0">
      <v-list-item-group v-model="model" color="indigo">
        <v-card>
          <v-list-item
            v-for="(item, i) in this.$store.state.cartItems"
            :key="i"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
              <v-list-item-subtitle>
                Rs. {{ item.price }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon @click="removeItem(i)">
                <v-icon> mdi-delete </v-icon></v-btn
              >
            </v-list-item-action>
          </v-list-item>
        </v-card>
      </v-list-item-group>
    </v-list>
    <v-container v-else class="d-flex justify-center">
      Cart Is Empty!
    </v-container>
    <div
      style="
        width: 100%;
        height: fit-content;
        position: absolute;
        bottom: 0px;
        right: 0px;

        padding: 15px;

        display: flex;
        flex-direction: column;

        border-top: 1px solid rgba(129, 129, 129, 0.2);
      "
    >
      <div
        style="
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          width: 100%;
          height: 50px;
          text-align: center;
          align-items: center;
          font-weight: 700;
        "
      >
        <div style="">Subtotal</div>
        <div>₹ {{ totalAmount }}</div>
      </div>
      <div style="width: 100%; height: 60px; font-size: 15px">
        Taxes, shipping and discounts codes calculated at checkout
      </div>

      <div
        style="
          border-radius: 12px;
          width: 100%;
          height: 50px;
          background-color: red;
          color: white;
          font-weight: 700;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        "
        @click="isCheckoutClicked = true"
      >
        CHECK OUT
      </div>
    </div>
  </div>
  <div v-else>
    <v-card>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Your Cart</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon @click="$store.state.cart = false">
            <v-icon> mdi-close </v-icon></v-btn
          >
        </v-list-item-action>
      </v-list-item>
    </v-card>
    <v-stepper v-model="e6" vertical>
      <v-stepper-step :complete="e6 > 1" step="1">
        Select Pickup Location
      </v-stepper-step>

      <v-stepper-content step="1">
        <v-text-field
          v-model="this.$store.state.location"
          dense
          class="mt-2"
          outlined
          append-icon="mdi-map-marker"
        ></v-text-field>

        <v-btn color="primary" @click="e6 = 2"> Continue </v-btn>
        <v-btn text> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 2" step="2">
        Select Pickup Date
      </v-stepper-step>

      <v-stepper-content step="2">
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        <v-btn color="primary" @click="e6 = 3"> Continue </v-btn>
        <v-btn text> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-step :complete="e6 > 3" step="3">
        Select Pickup Time
      </v-stepper-step>

      <v-stepper-content step="3">
        <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
        <v-btn color="primary" @click="e6 = 1"> Continue </v-btn>
        <v-btn text> Cancel </v-btn>
      </v-stepper-content>
    </v-stepper>
  </div>
</template>
<script>
export default {
  name: "cartVue",
  data() {
    return {
      isCheckoutClicked: false,
      e6: 1,
    };
  },
  computed: {
    totalAmount() {
      return this.$store.state.cartItems.reduce(
        (sum, val) => sum + parseInt(val.price),
        0
      );
    },
  },
  methods: {
    removeItem(index) {
      this.$store.state.cartItems.splice(index, 1);
    },
  },
};
</script>
    
