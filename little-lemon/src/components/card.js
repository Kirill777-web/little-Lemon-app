const Card = ({ title, price, description, imgSrc }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} />
      <div className="title-price">
      <h2>{title}</h2>
      <p className="price">{price}</p>
      </div>
      <p>{description}</p>
      <a href="#">Order a delivery ↪</a>
    </div>
  );
};

export default Card;