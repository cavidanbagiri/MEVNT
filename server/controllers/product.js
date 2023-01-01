import ProductService from "../services/product.js";

class ProductController {
  //Fetch Documents According to Catalog Name
  static async fetchAllDocument(req, res,next) {
    try {
      //There are 2 Dynamic Id and always work first one is catalog name and second is id
      let catalog_name = req.params.catalog_name;
      //if start with 6 this is find ID
      if (catalog_name[0] === "6") {
        //find by id work
        await ProductService.fetchById(catalog_name)
          .then((respond) => {
            return res.send(respond);
          })
          .catch((err) => {
            console.log("Fetch Product Error : ", err);
            return res.json({ "Fetch Product Error ": err });
          });
          return ;
      }
      ProductService.fetchAllDocument(catalog_name, req.query)
        .then((respond) => {
          res.send(respond);
        })
        .catch((err) => {
          console.log("Fetch Documents Error : ", err);
          res.json({ "Fetch Error ": err });
        });
    } catch (err) {
      console.log("Insert Data Err: ", err);
    }
  }
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
