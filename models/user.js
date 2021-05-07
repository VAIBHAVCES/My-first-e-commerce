const mongoose = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    }
});

userSchema.plugin(passportLocalMongoose);
const Users= new mongoose.model('User',userSchema); 
module.exports.Users = Users;