"use strict";

var express = require("express");

var router = express.Router();
router.use("/users", require("./users"));
router.use("/podcast", require("./podcast"));
module.exports = router;