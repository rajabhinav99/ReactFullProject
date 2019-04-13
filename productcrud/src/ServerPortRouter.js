const express = require('express');
const app = express();
const productRouter = express.Router();
const ServerPort = require('./ServerPort');

productRouter.route('/add').post(function (req, res) {
  
  const product = new ServerPort(req.body);
  product.save()
    .then(product => {
        res.json('Server added successfully');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

productRouter.route('/').get(function (req, res) {
    ServerPort.find(function (err, products){
    if(err){
      console.log(err);
    }
    else {
      res.json(products);
    }
  });
});

module.exports = productRouter;