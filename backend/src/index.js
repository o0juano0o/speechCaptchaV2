const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");

app.use(cors());

app.use(express.json());

app.use("/api", routes);

const PORT = 3001;

app.listen(PORT, () => console.log(`server listenning on port ${PORT}`));
