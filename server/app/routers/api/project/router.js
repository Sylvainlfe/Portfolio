const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const project = require("../../../controllers/projectActions");
const addComment = require("../../../controllers/commentActions")


router.get("/", project.browse);
router.get("/:id", project.read);
router.post("/:id/comments", addComment.add);

module.exports = router;
