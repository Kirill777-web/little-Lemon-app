import React from "react";

const OnlineOrderCard = ({ item, addToCart }) => {
  return (
    <div className="card">
      <img src={item.imgSrc} alt={item.title} />
      <div className="title-price">
        <h2>{item.title}</h2>
        <p className="price">{item.price}</p>
      </div>
      <p>{item.description}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
};

export default OnlineOrderCard;