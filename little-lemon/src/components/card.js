import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, price, description, imgSrc, addToCart }) => {
  return (
    <div className="card" style={{ marginRight: '20px' }}>
      <img src={imgSrc} alt={title} />
      <div className="title-price">
        <h2>{title}</h2>
        <p className="price">{price}</p>
      </div>
      <p>{description}</p>
      {addToCart ? (
        <button className="add-to-cart" onClick={addToCart}>Add to Cart</button>
      ) : (
        <Link to="/order-online">Order a delivery ↪</Link>
      )}
    </div>
  );
};

export default Card;



    