const express = require("express");

const router = express.Router();

const user = require("../../../controllers/userActions");


router.post("/",user.add);
router.get("/:id", user.read);
router.get("/", user.read)
router.delete("/:id", user.destroy);

module.exports = router;
