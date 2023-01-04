import fs from "fs";

import ProductSchema from "../models/products.js";
import CategorySchema from "../models/categories.js";
import PhonesSchema from "../models/phonesSchema.js";
// import mongoose from "mongoose";

class ProductService {
  
  //Fetch Documents According to Catalog Name
  static async fetchAllDocument(catalog_name, query) {
    //Find Catalog Id From Category Collection
    const catalog = await this.findCatalogId(catalog_name);
    //create empty list for returnning
    let products = null;
    //If is there  Query , find method work else all product return back
    if (Object.keys(query).length) {
      //Find inside of subdocument
      products = await this.fetchFromSubDocument(catalog_name, query);
    } else {
      products = await ProductSchema.find({
        CategoryId: catalog,
      }).populate("ProductId");
    }
    return products;
  }

  //Fetch From Sub Document With According Collection
  static async fetchFromSubDocument(catalog_name, query){
    let schemaName = catalog_name+'Schema';
    let findings = [];
    //Find Catalog Name and get filters inside of according to subcollection and find inside of ProductSchema
    switch(schemaName){
      case 'ComputerSchema':
        console.log('insert also computer');
        break;
      case 'PhonesSchema':
        findings = await PhonesSchema.find(query);
        break;
    }
    let products = await ProductSchema.find({
      ProductId:{
        $in: findings
      }
    })
    return products;
  }

  //Find Category Id For Catalog Name
  static async findCatalogId(catalog_name) {
    const category = await CategorySchema.findOne({
      category_name: catalog_name,
    });
    return category;
  }

  //Find Product With Id
  static async fetchById(data_id) {
    const product = await ProductSchema.findOne({
      ProductId: data_id,
    }).populate("ProductId");
    return product;
  }

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
      delete i["objectId"];
      delete i["Cell_Phone_Brands"];
      delete i["Cell_Phone_Models"];

      let colors = []; //Create Colors For Phones
      let somes = i["Colors"]?.split("|"); //Split Colors
      i["Price"] = 120;
      i["Discount"] = 5;
      i["Point"] = 3;
      await somes?.filter((item) => colors.push(item.trim())); //Add Colors in Colors Array
      i["Colors"] = colors;
      //Create One Phone Document
      const new_Phone = await new PhonesSchema(i);
      new_Phone.save();
      //Find Category From Category Schema
      const category_doc = await CategorySchema.findOne({
        category_name: "Phones",
      });
      console.log("Category Name : ", category_doc);
      //Add PhoneDoc to Product Schema
      const newItem = await new ProductSchema({
        CategoryId: category_doc,
        ProductId: new_Phone,
        Model: i["Model"],
        Brand: i["Brand"],
        Thumbnail: i["Thumbnail"],
        Price: 120,
        Discount: 5,
        Point: 3,
        Colors: colors,
      });
      newItem.save();
      if (total === 13) return;
    }
  }
}

export default ProductService;
