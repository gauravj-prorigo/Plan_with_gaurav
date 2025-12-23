import "../css/Shoes.css";

function Card({ shoes }) {
  return (
    <div className="card">
      <img src={shoes.image} alt={shoes.name} className="card-image" />

      <div className="card-content">
        <h4 className="review-title">Reviews</h4>
        <p className="card-star">⭐⭐⭐⭐⭐</p>
        <ul className="review-list">
          {shoes.reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Card;
