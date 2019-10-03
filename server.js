// dotenv is a module that loads variables from a .env file into process.env and is ideal for storing 
// usernames, passwords, URL’s and other sensitive bits of information. allows you to use password on DB
require('dotenv').config();
// Express is a minimal, flexible Node.js web application framework that provides a robust set of 
// features for web and mobile applications. running the application
const express = require("express");
const path = require("path"); // provides utilities for working with file and directory paths. allows you to use npm scripts
const apiRoutes = require("./apiRoutes"); // connecting api routes to server. api routes has the api routes and
// is connected to the DB. grabbing through app.use knows to use it by adding in api routes. this pro
// Helmet helps you secure your Express apps by setting various HTTP headers.
const helmet = require("helmet"); 

// instantiate middleware must have in order to envoke
const app = express();
const PORT = 3002
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(helmet());

// Use apiRoutes
app.use("/", apiRoutes);
app.use("/allproducts", apiRoutes);
app.use("/contacts", apiRoutes);


app.listen(PORT, function() {
  console.log(`server now on port ${PORT}!`);
});