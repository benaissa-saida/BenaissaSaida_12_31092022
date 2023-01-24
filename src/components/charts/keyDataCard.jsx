function Card({ type, src, quantity }) {
  return (
    <div className="Ss-card-container">
      <img src={src} alt={type} className="Ss-card-icon" />
      <div className="Ss-card-info-container">
        <p className="Ss-card-quantity">{quantity}</p>
        <p className="Ss-card-type">{type}</p>
      </div>
    </div>
  );
}

export default Card;
