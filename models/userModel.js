const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:[true, "Add email address"],
        unique:[true, "This email adress already exist..."],
    },
    password:{
        type:String,
        required:[true,"Enter the Password"],
    },
},{
    timestamps:true,

});
module.exports = mongoose.model("user",userSchema);