const express = require('express');
const app = express();
const mongoose = require('mongoose');
var methodOverride = require('method-override');
const bodyParser = require('body-parser')
const port  = 3000 ; 
const path = require('path');
//------------------ this file require to set a inital database-----------
const {seedDB} = require('./seed.js');

// method overrider 
app.use(methodOverride('_method'));


app.set('view engine','ejs');
app.set('views' , path.join(__dirname ,'/views'));

app.use( express.static(path.join(__dirname,'/public')));
app.use(express.urlencoded({ extended: true }));

//--------------------db connectivity------------------
mongoose.connect('mongodb://localhost/shopApp', {useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify:false})
.then(()=>{
    console.log("successfully connected to db");
})
.catch((err)=>{
    console.log("error in db connectivity "+err.message);
});


// seedDB();

//----------------------- using routers
const {productsRouter} = require('./router/products.js');
app.use(productsRouter);
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port ,()=>{
    console.log("listening on "+port);
})