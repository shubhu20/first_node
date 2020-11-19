var mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');
const confiq=require('../config/config').get(process.env.NODE_ENV);
const salt=10;

const userSchema=mongoose.Schema({
    firstname:{
        type: String,
        required: true,
        maxlength: 100
    },
    lastname:{
        type: String,
        required: true,
        maxlength: 100
    },
    organization:{
        type: String,
        required: true,
        maxlength: 100
    },
    designation:{
        type: String,
        required: true,
        maxlength: 100
    },
    country:{
        type: String,
        required: true,
        maxlength: 100
    },
    state:{
        type: String,
        required: true,
        maxlength: 100
    },
    city:{
        type: String,
        required: true,
        maxlength: 100
    },
    pin:{
        type: String,
        required: true,
        maxlength: 100
    },
    address:{
        type: String,
        required: true,
        maxlength: 100
    },
    contact:{
        type: String,
        required: true,
        maxlength: 100
    },
    type:{
        type: String,
        required: true,
        maxlength: 100
    },

    email:{
        type: String,
        required: true,
        trim: true,
        unique: 1
    }

});



module.exports=mongoose.model('User',userSchema);