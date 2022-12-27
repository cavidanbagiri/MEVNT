import express from "express";
const router = express.Router();
import fs from 'fs';
import fetch from 'node-fetch';

router.get("/", async (req, res) => {
  
    (async () => {
        const response = await fetch(
            'https://parseapi.back4app.com/classes/Dataset_Cell_Phones_Model_Brand?skip=10&limit=1000',
          {
            headers: {
              'X-Parse-Application-Id': 'MEqvn3N742oOXsF33z6BFeezRkW8zXXh4nIwOQUT', // This is the fake app's application id
              'X-Parse-Master-Key': 'uZ1r1iHnOQr5K4WggIibVczBZSPpWfYbSRpD6INw', // This is the fake app's readonly master key
            }
          }
        );
        const data = await response.json(); // Here you have the data that you need
        //console.log(JSON.stringify(data, null, 2));

          fs.writeFile('./mobile_data.json',JSON.stringify(data, null, 2),err=>{
            if(err)console.log('Error Happen : ',err);
            console.log('file write');
          })

      })();

});

export default router;
