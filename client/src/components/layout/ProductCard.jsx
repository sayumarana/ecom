import React from "react";
import "./productcard.css";

const ProductCard = ({name,imageURL,description,price}) => {
    return(
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm d-flex">
              <div className="card card-body flex">
            <img className="img-cont" alt={name} src={imageURL}/>
            <div className="card-body">
              <h3 className="product_name">{name}</h3> 
              <p className="descrip">{description}</p> 
              <p>${price.toFixed(2)}</p> 
              <button type="button" className="btn btn-secondary">Buy Now</button>
            </div>
          </div>
        </div>
        </div>
        </div>      
    );
}

export default ProductCard;