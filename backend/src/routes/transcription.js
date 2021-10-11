const express = require("express");
const { getTrascription } = require("../controllers/transcription");
const transcriptionRouter = express.Router();

transcriptionRouter.get("/", getTrascription);

module.exports = transcriptionRouter;
