const mongoose = require('mongoose');


const userSchema= mongoose.Schema({
    first_name:{
        type: String,
        require: true,
    },
    last_name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    gender:{
        type: String,
        require: true,
    },
    avatar: String,
    domain: String,
    available: Boolean
})
module.exports= userSchema;