const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://nomoremoney:rhdvkf21@boiler-plate.mkoyn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => console.log(`litening on port ${port}`));
