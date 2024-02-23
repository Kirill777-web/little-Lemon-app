import React from "react";
import { Link } from "react-router-dom";
const Card = ({ title, price, description, imgSrc }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} />
      <div className="title-price">
      <h2>{title}</h2>
      <p className="price">{price}</p>
      </div>
      <p>{description}</p>
      <Link to="/order-online">Order a delivery ↪</Link>
    </div>
  );
};

export default Card;