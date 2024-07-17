const express = require("express");

const router = express.Router();

const commentRouter = require("./comment/router");

router.use("/comments", commentRouter);

const userRouter = require("./user/router");

router.use("/users", userRouter);

module.exports = router;
