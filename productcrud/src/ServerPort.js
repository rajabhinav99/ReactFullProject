const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for ServerPort
const ServerPort = new Schema({
    productname: {
        type: String
      },
      productspec: {
          type: String
      },
      productprice: {
        type: Number
    }
},{
    collection: 'servers'
});

module.exports = mongoose.model('ServerPort', ServerPort);