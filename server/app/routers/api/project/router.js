const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const comment = require("../../../controllers/projectActions");


router.get("/", comment.browse);
router.get("/:id", comment.read);

module.exports = router;
