import fs from "fs";

import ProductSchema from "../models/products.js";
import CategorySchema from "../models/categories.js";
import PhoneSchema from "../models/phones_sub_document.js";

class ProductService {
  //Insert Document To Collection
  static async insertData() {
    fs.readFile("./mobile_data1.json", "utf8", async (err, data) => {
      if (err) {
        console.log("Err : ", err);
        return;
      }
      //Add Phones To Collection
      this.addSubDocument(data);
    });
  }
  //Insert Data To Phones Sub Document
  static async addSubDocument(data) {
    let total = 0;
    const products = JSON.parse(data);
    for await (let i of products.results) {
      total++;
      if(total===1){
        continue
      }
      delete i["objectId"];
      delete i["Cell_Phone_Brands"];
      delete i["Cell_Phone_Models"];

      let colors = []; //Create Colors For Phones
      let somes = i["Colors"].split("|"); //Split Colors
      i["Price"] = 120
      i["Discount"] = 5
      i["Point"] = 3
      await somes.filter((item) => colors.push(item.trim())); //Add Colors in Colors Array
      i["Colors"] = colors;
        //Create One Phone Document
        const new_Phone = await new PhoneSchema(i);
        new_Phone.save();
        //Find Category From Category Schema
        const category_doc = await CategorySchema.findOne({
            category_name:"Phones"
        });
        console.log('Category Name : ',category_doc);
        //Add PhoneDoc to Product Schema
        const newItem = await new ProductSchema({
            CategoryId:category_doc,
            ProductId:new_Phone,
            Model:i["Model"],
            Brand:i["Brand"],
            Thumbnail:i["Thumbnail"],
            Price:120,
            Discount:5,
            Point:3,
            Colors:colors
        })
        newItem.save();
      // const temp = await new ProductSchema(i);
      // temp.save();
      if (total === 2) return;
    }
  }
}

export default ProductService;
