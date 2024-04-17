const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

//@route GET /api/contacts
const get_contacts = asyncHandler(async(req, res)=>{
    const contact = await Contact.find({userID: req.user.id});
    res.status(200).json(contact);
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
    const contact = await Contact.create({
        name,
        email,
        phoneNo,
        userID: req.user.id,
    });

    res.status(201).json(contact);
});

//@route GET /api/contacts/:id
const get_contact = asyncHandler(async(req, res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Unavailable");
    }
    res.status(200).json(contact);
});

//@route UPDATE /api/contacts/:id
const put_contact = asyncHandler(async(req, res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Unavailable");
    }
    if(contact.userID.toString()!==req.user.id){
        res.status(403);
        throw new Error("you can't Update other user Contacts!");
    }
    const update = await Contact.findByIdAndUpdate(req.params.id, req.body, {new:true});

    res.status(200).json(update);
});

//@route DELETE /api/contacts/:id
const delete_contact = asyncHandler(async(req, res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Unavailable");
    }
    if(contact.userID.toString()!==req.user.id){
        res.status(403);
        throw new Error("you can't Delete other user Contacts!");
    }
    await Contact.deleteOne({_id: req.params.id});
    res.status(200).json(contact);
});

module.exports={get_contacts, post_contact, get_contact, put_contact, delete_contact};