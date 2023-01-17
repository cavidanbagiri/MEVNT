import fs from "fs";

import ProductSchema from "../models/products.js";
import CategorySchema from "../models/categories.js";
import PhonesSchema from "../models/phonesSchema.js";
// import mongoose from 'mongoose';

class ProductService {
  // Fetch Documents According to Catalog Name
  static async fetchAllDocument (catalogName, query) {
    // Find Catalog Id From Category Collection
    const catalog = await this.findCatalogId(catalogName);
    // create empty list for returnning
    let products = null;
    // If is there  Query , find method work else all product return back
    if (Object.keys(query).length) {
      // Find inside of subdocument
      products = await this.fetchFromSubDocument(catalogName, query);
    } else {
      products = await ProductSchema.find({
        CategoryId: catalog
      }).populate("ProductId");
    }
    return products;
  }

  // Fetch From Sub Document With According Collection
  static async fetchFromSubDocument (catalogName, query) {
    const schemaName = catalogName + "Schema";
    let findings = [];
    // Find Catalog Name and get filters inside of according to subcollection and find inside of ProductSchema
    switch (schemaName) {
    case "ComputerSchema":
      break;
    case "PhonesSchema":
      findings = await PhonesSchema.find(query);
      break;
    }
    const products = await ProductSchema.find({
      ProductId: {
        $in: findings
      }
    });
    return products;
  }

  // Find Category Id For Catalog Name
  static async findCatalogId (catalogName) {
    const category = await CategorySchema.findOne({
      category_name: catalogName
    });
    return category;
  }

  // Find Product With Id
  static async fetchById (dataId) {
    const product = await ProductSchema.findOne({
      ProductId: dataId
    }).populate("ProductId");
    return product;
  }

  // Insert Document To Collection
  static async insertData () {
    fs.readFile("./mobile_data1.json", "utf8", async (err, data) => {
      if (err) {
        console.log("Err : ", err);
        return;
      }
      // Add Phones To Collection
      this.addSubDocument(data);
    });
  }

  // Insert Data To Phones Sub Document
  static async addSubDocument (data) {
    // let total = 25;
    const products = JSON.parse(data);
    for await (const i of products.results) {
      // total++;
      // delete i['objectId'];
      // delete i['Cell_Phone_Brands'];
      // delete i['Cell_Phone_Models'];

      delete i?.objectId;
      delete i?.Cell_Phone_Brands;
      delete i?.Cell_Phone_Models;

      const colors = []; // Create Colors For Phones
      const somes = i?.Colors?.split("|"); // Split Colors
      const price = Math.floor(Math.random() * 8000 + 3000);
      i.Thumbnail = "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg";
      i.Price = price;
      const discount = Math.floor(Math.random() * 25 + 5);
      i.Discount = discount;
      const point = Math.floor(Math.random() * 6);
      i.Point = point;
      await somes?.filter((item) => colors.push(item.trim())); //  Add Colors in Colors Array
      i.Colors = colors;
      // Create One Phone Document
      const newPhone = await new PhonesSchema(i);
      newPhone.save();
      // Find Category From Category Schema
      const categoryDoc = await CategorySchema.findOne({
        category_name: "Phones"
      });
      console.log("Category Name : ", categoryDoc);
      // Add PhoneDoc to Product Schema
      const newItem = await new ProductSchema({
        CategoryId: categoryDoc,
        ProductId: newPhone,
        Model: i.Model,
        Brand: i.Brand,
        Thumbnail: "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg",
        Price: price,
        Discount: discount,
        Point: point,
        Colors: colors
      });
      newItem.save();
      // if (total === 26) return;
    }
  }
}

export default ProductService;
