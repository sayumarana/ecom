const router = require("express").Router(); // allows server to route into page
const mysql = require("mysql"); // allows client intergration to the database


// creating database connection :) between backend and mysql
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", // user on my sql workbench
    password: process.env.MYPASSWORD, // dotenv allows me to hide this password
    database: "ecom" // name of my database 
});

// live connection with the server
connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT * FROM Products", function(err, data){
        // console.table(data)
    })
});


// index page
router.get('/', function (req, res) {
})
  
  // fetch all products
  router.get('/allproducts', (req, res) => {
    connection.query("SELECT * FROM Products_price INNER JOIN Products ON Products_price.product_id = Products.product_id", function(err, data){    
      res.send(data)   
    })
  });
  
  // fetch all products from A to z
router.get('/alphabetical', (req, res) => {
    connection.query("SELECT * FROM Products_price INNER JOIN alphabetical ON Products_price.product_id = alphabetical.product_id", function(err, data){    
      res.json(data) 
    })
  })
  // fetch all products from Z to A
  router.get('/backward', (req, res) => {
    connection.query("SELECT * FROM Products_price INNER JOIN backward ON Products_price.product_id = backward.product_id", function(err, data){    
      res.json(data) 
    })
  })
  // filter all products by price lowest to highest
  router.get('/lowToHigh', (req, res) => {
    connection.query("SELECT * FROM Products INNER JOIN lowToHigh ON Products.product_id = lowToHigh.product_id", function(err, data){    
      res.json(data) 
    })
  })
  // filter all products by price from highest to lowest
  router.get('/highToLow', (req, res) => {
    connection.query("SELECT * FROM Products INNER JOIN highToLow ON Products.product_id = highToLow.product_id", function(err, data){    
      res.json(data) 
    })
  })

  router.get('/contacts', (req, res) => {
    connection.query("SELECT * FROM Contacts", function(err, data){
      res.json(data)
    })
  })
  


  module.exports = router;
