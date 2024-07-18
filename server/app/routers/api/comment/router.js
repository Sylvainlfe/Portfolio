const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const comment = require("../../../controllers/commentActions");


router.get("/", comment.browse);
router.get("/:id", comment.read);
router.put("/:id", comment.edit);
router.post("/:id/comments", comment.add);
router.delete("/:id", comment.destroy);

module.exports = router;
