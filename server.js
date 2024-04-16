const express = require("express");
const hndlError = require("./Error/handlingError");
const dotenv = require("dotenv").config();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./route/contacts_route"));
app.use(hndlError);

app.listen(port, ()=>{
    console.log(`Run the port No: ${port}`);
});