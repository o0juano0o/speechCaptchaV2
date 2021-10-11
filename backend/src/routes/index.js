const express = require("express");
const router = express.Router();

router.use("/users", require("./users"));
router.use("/transcription", require("./transcription"));

module.exports = router;
