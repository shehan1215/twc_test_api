const express = require("express");
const router = express.Router();
const {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact} = require("../Controllers/contacts_controll");
const validate = require("../Token/validate_token");

router.route("/").get(getContacts);
router.route("/").post(createContact);
router.route("/:id").get(getContact);
router.route("/:id").put(updateContact);
router.route("/:id").delete(deleteContact);
router.use(validate);
module.exports = router;