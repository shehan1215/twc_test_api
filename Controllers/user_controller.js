const asyncHandler = require("express-async-handler");


//@route GET /api/register
const register = asyncHandler(async(req,res)=>{
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