const express = require("express");
const {register,login,current} =require("../Controllers/user_controller");
const validate = require("../Token/validate_token");

const router = express.Router();

router.post("/register",register);

router.post("/login",login);

router.get("/current",validate, current);

module.exports = router;

