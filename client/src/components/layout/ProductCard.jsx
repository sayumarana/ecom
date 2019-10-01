import React from "react";
import "./productcard.css";

const ProductCard = ({name,imageURL,description,price}) => {
    return(
        <div className="card-deck">
          <div className="card">
            <img className="img-cont" alt={name} src={imageURL}/>
            <div className="card-body">
              <h3>{name}</h3> 
              <p>{description}</p> 
              <p>${price.toFixed(2)}</p> 
              <button type="button" className="btn btn-primary buynow">Buy Now</button>
            </div>
          </div>
        </div>        
    );
}

export default ProductCard;