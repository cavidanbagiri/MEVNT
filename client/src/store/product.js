import { defineStore } from "pinia";
import axios from "axios";

const productStore = defineStore("ProductStore", {
  //Creating States
  state: () => ({
    //Get Products For Catalog Page Main Side
    products: [],
    //Get Products Filter Item For Filter Side
    filters_key: {},
    //Get Category Name For Creating Filter Items
    category_name: null,
  }),

  //Creating Getters
  getters: {
    //Get All Products
    GETPRODUCTS: (state) => state.products,
    //Get All Filters
    GETFILTERS: (state) => {
      return state.filters_key;
    },
  },

  //Create Actions
  actions: {
    //Fetch All Products With Category Name
    async FETCHPRODUCTS(category_name) {
      category_name = category_name[0].toUpperCase() + category_name.slice(1);
      await axios
        .get(`http://localhost:3000/product/${category_name}`)
        .then(async (respond) => {
          //Take All Products
          this.products = await respond.data;
          await this.FETCHONEPRODUCTFORFILTERS(this.products[0].ProductId._id);
          for await (let i of this.products) {
            for await (let j of Object.keys(this.filters_key)) {
              this.filters_key[j].add(i.ProductId[j]);
            }
          }
          let temp = [];
          for(let i of this.filters_key.Brand){
            temp.push(i);
          }
          this.filters_key.Brand = temp;
          return this.products;
        })
        .catch((err) => {
          console.log("get Phone Marks Doesnt Work : ", err);
        });
    },
    //Fetch One Document And Populate It For Provide Filters
    async FETCHONEPRODUCTFORFILTERS(data_id) {
      await axios
        .get(`http://localhost:3000/product/${data_id}`)
        .then(async (respond) => {
          let temp = [...respond.data.ProductId.Filters];
          for await (let i of temp) {
            this.filters_key[i] = new Set();
          }
        })
        .catch((err) => {
          console.log("fetch One Product Id Return Back TO An Error : ", err);
        });
    },
  },
});

export default productStore;
