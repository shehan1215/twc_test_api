const asyncHandler = require("express-async-handler");

//@route GET /api/contacts
const get_contacts = asyncHandler(async(req, res)=>{
    res.status(200).json({message:"All user's contacts"});
});

//@route CREATE /api/contacts/:id
const post_contact = asyncHandler(async(req, res)=>{
    console.log("body of:", req.body);
    //to create the error handle
    const {name,email,phoneNo} = req.body;
    if(!name || !email || !phoneNo){
        res.status(400);
        throw new Error("Fill the all fields");
    }
    res.status(201).json({message:"Add the contacts"});
});

//@route GET /api/contacts/:id
const get_contact = asyncHandler(async(req, res)=>{
    res.status(200).json({message:`Contact for ${req.params.id}` });
});

//@route UPDATE /api/contacts/:id
const put_contact = asyncHandler(async(req, res)=>{
    res.status(200).json({message:`update the contacts of id ${req.params.id}`});
});

//@route DELETE /api/contacts/:id
const delete_contact = asyncHandler(async(req, res)=>{
    res.status(200).json({message:`delete contact of id ${req.params.id}` });
});

module.exports={get_contacts, post_contact, get_contact, put_contact, delete_contact};