require('dotenv').config();
const express = require("express");
const path = require("path");
const apiRoutes = require("./apiRoutes");


const app = express();
const PORT = 3002

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Use apiRoutes
app.use("/", apiRoutes);
app.use("/allproducts", apiRoutes);
app.use("/contacts", apiRoutes);

app.listen(PORT, function() {
  console.log(`server now on port ${PORT}!`);
});