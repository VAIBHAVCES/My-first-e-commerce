const express = require('express');
const router = express.Router();
const {Products} = require('../models/products.js');

router.get('/' , async(req,res)=>{
    const pds = await Products.find({});
    // res.send(pds);
    res.render('products/index');
});

module.exports.productsRouter = router;