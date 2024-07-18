const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const project = require("../../../controllers/projectActions");


router.get("/", project.browse);
router.get("/:id", project.read);

module.exports = router;
