const express = require('express');
const router = express.Router();
const {Products} = require('../models/products.js');

router.get('/products' , async(req,res)=>{
    const pds = await Products.find({});
    // res.send(pds);
    res.render('products/index',{pds});
});


router.get("/products/new",(req,res)=>{
    res.render('products/new');
});

router.get("/products/:id",async(req,res)=>{
    let {id}=req.params;
    let product = await Products.findById(id);
    
    res.render("products/show",{product});

});

router.delete("/products/:id",async(req,res)=>{
    let {id}=req.params;
    await Products.findByIdAndDelete(id);
    res.redirect('/products');
});
router.get("/products/:id/edit",async(req,res)=>{
    let {id}=req.params;
    let product = await Products.findById(id);
    
    res.render("products/edit",{product});

});

router.patch("/products/:id",async(req,res)=>{
    let {id}=req.params;
    let{name, price,desc,img}= req.body;
    await Products.findByIdAndUpdate(id, req.body);
    res.redirect("/products");
});
router.post("/products",(req,res)=>{
    Products.insertMany(req.body);
    res.redirect("/products");  
});
module.exports.productsRouter = router;