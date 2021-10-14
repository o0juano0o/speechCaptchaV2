const express = require("express");
const { getTrascription } = require("../controllers/transcription");
const transcriptionRouter = express.Router();

transcriptionRouter.post("/", getTrascription);

module.exports = transcriptionRouter;
