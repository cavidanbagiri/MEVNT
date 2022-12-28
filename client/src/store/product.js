import { defineStore } from "pinia";
import axios from "axios";

const productStore = defineStore("ProductStore", {
  //Creating States
  state: () => ({
    phones: [],
  }),

  //Creating Getters
  getters: {
    GETPHONES: (state) => this.phones,
  },

  //Create Actions
  actions: {
    async GETPHONEMARKS(state) {
      console.log("Get Phone Marks Work");
      await axios
        .get("http://localhost:3000/product/Phones")
        .then(async(respond) => {
            this.phones = await respond.data;
            return this.phones;
        })
        .catch((err) => {
          console.log("get Phone Marks Doesnt Work : ", err);
        });
    },
  },
});

export default productStore;
