const express = require("express");
const router = express.Router();

router.post("/register",(req,res)=>{
    res.json({message:"Register to the Contact Portal"});   //Create the user's Router
});

router.post("/login",(req,res)=>{
    res.json({message:"Login"});
});

router.get("/current",(req,res)=>{
    res.json({message:"Current Details"});
});

module.exports = router;

