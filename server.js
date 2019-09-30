require('dotenv').config();
const express = require("express");
const path = require("path");
const mysql = require("mysql");


const app = express();
const PORT = 3002

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// creating database connection :)
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYPASSWORD,
    database: "ecom"
});

connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM Products", function(err, data){
        // console.table(data)
    })
});

// index page
app.get('/', function (req, res) {
    res.send('Hello World')
})
  
  // fetch all products
  app.get('/allproducts', (req, res) => {
    connection.query("SELECT * FROM Products_price INNER JOIN Products ON Products_price.product_id = Products.product_id", function(err, data){    
      res.send(data)   
    })
  });
  
  // fetch all products from A to z
app.get('/alphabetical', (req, res) => {
    connection.query("SELECT * FROM Products_price INNER JOIN alphabetical ON Products_price.product_id = alphabetical.product_id", function(err, data){    
      res.json(data) 
    })
  })
  // fetch all products from Z to A
  app.get('/backward', (req, res) => {
    connection.query("SELECT * FROM Products_price INNER JOIN backward ON Products_price.product_id = backward.product_id", function(err, data){    
      res.json(data) 
    })
  })
  // filter all products by price lowest to highest
  app.get('/lowToHigh', (req, res) => {
    connection.query("SELECT * FROM Products INNER JOIN lowToHigh ON Products.product_id = lowToHigh.product_id", function(err, data){    
      res.json(data) 
    })
  })
  // filter all products by price from highest to lowest
  app.get('/highToLow', (req, res) => {
    connection.query("SELECT * FROM Products INNER JOIN highToLow ON Products.product_id = highToLow.product_id", function(err, data){    
      res.json(data) 
    })
  })
  
//   ////////////////////////////////////
//   /////       Launch Server      ////
//   //////////////////////////////////
  app.listen(PORT, function () {
    console.log(`Server listening on port ${PORT}!`)
  })
