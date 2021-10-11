const express = require("express");
const userRouter = express.Router();
const { getUser } = require("../controllers/users");

userRouter.get("/", getUser);

module.exports = userRouter;
