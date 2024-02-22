const Card = ({ title, price, description, imgSrc }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt={title} />
      <h2>{title}</h2>
      <p className="price">{price}</p>
      <p>{description}</p>
      <a href="#">Order a delivery</a>
    </div>
  );
};

export default Card;