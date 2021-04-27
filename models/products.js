const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },img:{
        type:String
    },
    price:{
        type:Number,
        min:0
    },
    desc:{
        type:String
    }

  });

const Products = new mongoose.model('Product',productSchema);
module.exports.Products  = Products;


