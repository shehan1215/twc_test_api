const mongoose = require("mongoose");

const contact = mongoose.Schema({
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"user",
    },
    name:{
        type:String,
        required:[true,"Enter the Full Name"],
    },
    email:{
        type:String,
        required:[true,"Enter the Email Address"],
    },
    phoneNo:{
        type:String,
        required:[true,"Enter the Phone No"],
    },
},{
    timestamps:true,
});

module.exports = mongoose.model("Contacts", contact);