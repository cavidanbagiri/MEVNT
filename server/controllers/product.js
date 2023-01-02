import AppError from "../exceptions/AppError.js";
import ProductService from "../services/product.js";

import tryCatch from "../utils/tryCatch.js";

class ProductController {
  static async fetchAllDocument(req, res, next) {
    let catalog_name = req.params.catalog_name;
    if (catalog_name[0] === "6") {
      tryCatch(
        await ProductService.fetchById(catalog_name)
          .then((respond) => {
            return res.send(respond);
          })
          .catch((err) => {
            next(err);
          })
      );
      return;
    }
    else{
      tryCatch(
        await ProductService.fetchAllDocument(catalog_name, req.query)
          .then((respond) => {
            // throw AppError.BadRequest("Bad Request By Me", 300);
            // throw new Error('Another Error');
            res.send(respond);
          })
          .catch((err) => {
            next(err);
          })
      );
    }
  }

  //Fetch Documents According to Catalog Name
  // static async fetchAllDocument(req, res,next) {
  //   try {
  //     //There are 2 Dynamic Id and always work first one is catalog name and second is id
  //     let catalog_name = req.params.catalog_name;
  //     //if start with 6 this is find ID
  //     if (catalog_name[0] === "6") {
  //       //find by id work
  //       await ProductService.fetchById(catalog_name)
  //         .then((respond) => {
  //           return res.send(respond);
  //         })
  //         .catch((err) => {
  //           console.log("Fetch Product Error : ", err);
  //           return res.json({ "Fetch Product Error ": err });
  //         });
  //         return ;
  //     }

  //     ProductService.fetchAllDocument(catalog_name, req.query)
  //      .then((respond) => {
  //       // throw new Error('Unhandled User Error');
  //        res.send(respond);
  //      })
  //      .catch((err) => {
  //        next(err);
  //      });

  //     //This Code Work
  //     // ProductService.fetchAllDocument(catalog_name, req.query)
  //     //   .then((respond) => {
  //     //     res.send(respond);
  //     //   })
  //     //   .catch((err) => {
  //     //     console.log("Fetch Documents Error : ", err);
  //     //     res.json({ "Fetch Error ": err });
  //     //   });

  //   } catch (err) {
  //     console.log("Insert Data Err: ", err);
  //   }
  // }

  // static async fetchById(req, res) {
  //   //Find Product With id
  //   try {
  //     let id = req.params.id;
  //     ProductService.fetchById(id)
  //       .then((respond) => {
  //         console.log("Fetch product respond is : ", respond);
  //         res.send(respond);
  //       })
  //       .catch((err) => {
  //         console.log("Fetch Product Error : ", err);
  //         res.json({ "Fetch Product Error ": err });
  //       });
  //   } catch (err) {
  //     console.log("Insert Data Err: ", err);
  //   }
  // }

  //Insert Data
  static async insertProduct(req, res) {
    try {
      ProductService.insertData();
      res.send("insert doc work");
    } catch (err) {
      console.log("Insert Data Err: ", err);
    }
  }
}

export default ProductController;
