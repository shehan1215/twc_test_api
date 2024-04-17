const asyncHandler = require("express-async-handler");
const availableUser = require("../models/userModel");


//@route GET /api/register
const register = asyncHandler(async(req,res)=>{
    const {email,password,confirmPassword} = req.body;
    if(!email || !password || !confirmPassword){
        res.status(400);
        throw new Error("Please fill the all fields");
    }
    const user = await availableUser.findOne({email});
    if(user){
        res.status(400);
        throw new Error("error: Email is already exist!");
    }
    res.json({message:"Register to the Contact Portal"}); 
});
//@route GET /api/login
const login = asyncHandler(async(req,res)=>{
    res.json({message:"Login"});
});
//@route GET /api/current
//@private access only
const current = asyncHandler(async(req,res)=>{
    res.json({message:"Current Details"});
});

module.exports = {register,login,current};