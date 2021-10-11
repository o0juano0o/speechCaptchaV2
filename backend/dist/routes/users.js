"use strict";

var express = require("express");

var userRouter = express.Router();

var getUser = require("../controllers/users");

userRouter.get("/", function (req, res) {
  res.send("hello word");
});
module.exports = userRouter;