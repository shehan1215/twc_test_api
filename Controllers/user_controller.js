const asyncHandler = require("express-async-handler");
const availableUser = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@route GET /api/register
const register = asyncHandler(async(req,res)=>{
    const {email,password,confirmPassword} = req.body;
    if(!email || !password || !confirmPassword){
        res.status(400);
        throw new Error("Please fill the all fields");
    }
//check the already regsterd user or not    
    const userVerified = await availableUser.findOne({email});
    if(userVerified){
        res.status(400);
        throw new Error("error: Email is already exist!");
    }
    const hashedPw = await bcrypt.hash(password, 10);
    console.log("Password: ", hashedPw);
    const user = await availableUser.create({
        email,
        password:hashedPw,
        confirmPassword,
    });
    console.log(`Created Successfully ${user}`);
    if(user){
        res.status(201).json({_id:user.id, email:user.email});
    }else{
        res.status(400);
        throw new Error("Not valid Data!");
    }

    res.json({message:"Register to the Contact Portal"}); 
});
//@route GET /api/login
const login = asyncHandler(async(req,res)=>{
    const {email, password} = req.body;
    if(!email || !password){
    res.status(400);
    throw new Error("Please fill the all fields");
    }
    const user = await availableUser.findOne({email});

    //compare the user password and hash password
    if(user && (await bcrypt.compare(password,user.password))){
        const accessToken = jwt.sign({
            user:{
                email:user.email,
                id:user.id,
            },
        },
        process.env.ACCESS_TOKEN,{expiresIn:"1m"}
    );
        res.status(200).json({accessToken});
    }else{
        res.status(401);
        throw new Error("please provide the valid details");
    }
});
//@route GET /api/current
//@private access only
const current = asyncHandler(async(req,res)=>{
    res.json({message:"Current Details"});
});

module.exports = {register,login,current};