const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/uploads", express.static("uploads"));

const user = require("./routes/userRoute");

app.use("/users", user);

module.exports = app;
