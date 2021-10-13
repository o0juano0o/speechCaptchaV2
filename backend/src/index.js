const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");
const bodyParser = require("body-parser");

app.use(
  bodyParser.json({
    limit: "50mb",
  })
);

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    parameterLimit: 100000,
    extended: true,
  })
);
app.use(cors());

app.use(express.json());

app.use("/api", routes);

const PORT = 3001;

app.listen(PORT, () => console.log(`server listenning on port ${PORT}`));
