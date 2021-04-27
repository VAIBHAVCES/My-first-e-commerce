const {Products}= require('./models/products.js');
const pds = [
    {
        name:"Wahshing Machine",
        img:"https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
        price:30000,
        desc:"a washing deevice used to generally wash you clothes or any fabric item in house "   
    },{
        name:"Smart TV",
        img:"https://images.unsplash.com/photo-1558888401-3cc1de77652d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        price:10000,
        desc:"a smart tv  is differnce in way from normal tv is that it has many several ports and also internet connectivity option "   
    },
    {
        name:"trimmer",
        img:"https://images.unsplash.com/photo-1618247140092-c9278ce7fc9f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80",
        price:5000,
        desc:"a device used generally to shave or trim the facial hairs by mens "   
    },
    {
        name:"iPhone",
        img:"https://images.unsplash.com/photo-1523206489230-c012c64b2b48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        price:100000,
        desc:"a smart mobile device build by appple inc which is firs trillion dollar comapny and majorr mobile manufacturer "   
    },
    {
        name:"macbook air ",
        img:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
        price:250000,
        desc:"a smart laptop build by appple inc which is first trillion dollar comapny and majorr mobile manufacturer "   
    }
    
];

const seedDB = async()=>{
    await Products.insertMany(pds);
    console.log("DB Seeded");
}
module.exports.seedDB=seedDB; 