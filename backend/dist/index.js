"use strict";

var express = require("express");

var cors = require("cors");

var app = express();

var routes = require("./routes");

app.use(cors());
app.use(express.json());
app.use("/api", routes);
var PORT = 3001;
app.listen(PORT, function () {
  return console.log("server listenning on port ".concat(PORT));
});