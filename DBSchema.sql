DROP DATABASE IF EXISTS ecom;
CREATE DATABASE ecom;
USE ecom;

CREATE TABLE Products(
product_id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(50) NOT NULL,
type VARCHAR(50),
description VARCHAR(500),
image_url VARCHAR(500),
quantity INT NOT NULL,
primary key(product_id)
);

INSERT INTO Products(name, type, description, image_url ,quantity)
VALUES('Sea Moss Capsules', 'Capsule','Rich in nutrients and other good factors including vitamin 
A, B-complex, C, E, G, calcium, iodine, magnesium, potassium, iron, silicon, and sulfur. Made from 
 wild crafted herbs. ', 'https://i.etsystatic.com/19941586/r/il/11ec33/1845893774/il_1588xN.1845893774_myk3.jpg', 5)
 ,('GreenLove Capsules', 'Capsule', 'Rich in nutrients and other good factors including vitamin 
 A, B-complex, C, E, G, calcium, iodine, magnesium, potassium, iron, silicon, and sulfur. Made from
 wild crafted herbs.', 'https://i.etsystatic.com/19941586/r/il/bf1db8/1902721953/il_1588xN.1902721953_mapb.jpg', 5)
 ,('Bladderwrack Capsules', 'Capsule', 'Rich in nutrients and other good factors including vitamin 
 A, B-complex, C, E, G, calcium, iodine, magnesium, potassium, iron, silicon, and sulfur. Made from 
 wild crafted herbs.', 'https://i.etsystatic.com/19941586/r/il/3835df/1845908230/il_1588xN.1845908230_hvhm.jpg', 5)
 ,('Chlorella Capsules', 'Capsule', 'Rich in nutrients and other good factors including vitamin 
 A, B-complex, C, E, G, calcium, iodine, magnesium, potassium, iron, silicon, and sulfur. Made from 
 wild crafted herbs.', 'https://i.etsystatic.com/17940532/r/il/c4a34a/1801377670/il_1588xN.1801377670_t774.jpg', 5)
 ,('Maca Root Capsules', 'Capsules', 'Rich in nutrients and other good factors including vitamin 
 A, B-complex, C, E, G, calcium, iodine, magnesium, potassium, iron, silicon, and sulfur. Made from
 wild crafted herbs.', 'https://i.etsystatic.com/13181199/r/il/13cb5d/1578133991/il_1588xN.1578133991_o23y.jpg', 5)
 ,('Brain Blast Capsules','Capsule','Rich in nutrients and other good factors including vitamin 
 A, B-complex, C, E, G, calcium, iodine, magnesium, potassium, iron, silicon, and sulfur. Made from 
 wild crafted herbs.','https://i.etsystatic.com/17811829/r/il/42364c/1570373497/il_1588xN.1570373497_jc3h.jpg', 5)
 ,('Moringa Root Capsules','Capsule','Rich in nutrients and other good factors including vitamin 
 A, B-complex, C, E, G, calcium, iodine, magnesium, potassium, iron, silicon, and sulfur. Made from 
 wild crafted herbs.','https://i.etsystatic.com/8834300/r/il/481a8d/1767669367/il_1588xN.1767669367_sda5.jpg',5)
 ,('Mullein Leaf Tea','Leaf','Rich in nutrients and other good factors including vitamin 
 A, B-complex, C, E, G, calcium, iodine, magnesium, potassium, iron, silicon, and sulfur. Made from 
 wild crafted herbs.','https://i.etsystatic.com/12995391/r/il/c43f96/1468376542/il_1588xN.1468376542_agu7.jpg',5)
 ,('Colon Cleanser', 'Capsule', 'Rich in nutrients and other good factors including vitamin 
 A, B-complex, C, E, G, calcium, iodine, magnesium, potassium, iron, silicon, and sulfur. Made from 
 wild crafted herbs.', 'https://i.etsystatic.com/20402602/r/il/cc7bb6/1957617465/il_1588xN.1957617465_ad55.jpg', 5)
 ,('Burdock Root Capsules', 'Capsule', 'Rich in nutrients and other good factors including vitamin 
 A, B-complex, C, E, G, calcium, iodine, magnesium, potassium, iron, silicon, and sulfur. Made from 
 wild crafted herbs.', 'https://i.etsystatic.com/17811829/r/il/068aa2/1521555532/il_1588xN.1521555532_1pnh.jpg', 5)
 ,('Lymph Flush Detox','Leaf','Rich in nutrients and other good factors including vitamin 
 A, B-complex, C, E, G, calcium, iodine, magnesium, potassium, iron, silicon, and sulfur. Made from 
 wild crafted herbs.', 'https://i.etsystatic.com/17811829/r/il/22c6c4/1521573162/il_1588xN.1521573162_8bcs.jpg', 5)
 ,('Nerve & Cell Rebuild','Capsule', 'Rich in nutrients and other good factors including vitamin 
 A, B-complex, C, E, G, calcium, iodine, magnesium, potassium, iron, silicon, and sulfur. Made from 
 wild crafted herbs.', 'http://www.mandidhealthcare.com/wp-content/uploads/2018/08/capsule-1.jpg', 5);

 CREATE TABLE Products_price(
    product_id INT AUTO_INCREMENT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    primary key(product_id)
);

INSERT INTO Products_price (price)
VALUES
(35.00),
(34.00),
(30.00),
(15.00),
(25.00),
(22.00),
(26.00),
(18.00),
(21.00),
(23.00),
(24.00),
(28.00);
 
SELECT * FROM Products;


CREATE TABLE alphabetical
AS (SELECT * FROM Products ORDER BY name);
CREATE TABLE backward
AS (SELECT * FROM Products ORDER BY name DESC);
CREATE TABLE lowToHigh
AS (SELECT * FROM Products_price ORDER BY price);
CREATE TABLE highToLow
AS (SELECT * FROM Products_price ORDER BY price DESC);