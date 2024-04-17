const mongoose = require("mongoose");

const user = mongoose.Schema({
    email:{
        type:String,
        required:[true, "Add email address"],
        unique:[true, "This email adress already exist..."],
    },
    password:{
        type:String,
        required:[true,"Enter the Password"],
    },
    confirmPassword:{
        type:String,
        required:[true,"Enter the confirm Password"],
    },
},{
    timestamps:true,

});
module.exports = mongoose.model("user",user);