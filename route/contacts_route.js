const express = require("express");
const router = express.Router();
const {
    get_contacts,
    post_contact,
    get_contact,
    put_contact, 
    delete_contact} = require("../Controllers/contacts_controll");

router.route("/").get(get_contacts);
router.route("/").post(post_contact);
router.route("/:id").get(get_contact);
router.route("/:id").put(put_contact);
router.route("/:id").delete(delete_contact);

module.exports = router;