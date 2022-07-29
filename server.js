const express = require("express");
const cors = require("cors");
const apiRoute = require("./backend/routes/api");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", apiRoute);

app.listen(8000, () => console.log("server running"));
