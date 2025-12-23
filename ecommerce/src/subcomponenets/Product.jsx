import { useNavigate } from "react-router";
import "../css/product.css";

function Product({ product }) {
  const navigate = useNavigate()
  function handleonclick(){
    navigate(`/ourteam/${product.id}`)
  }
  return (
    <div className="product">
      <img src={product.image} alt={product.name} className="product-image" />

      <div className="product-content">
        <h2 className="review-title">{product.name}</h2>
        <p>{product.description}</p>
        <h3>RS :{product.price}</h3>
      </div>
      <div className="product-button">
        <button className="add">Add to cart</button>
        <button className="buy" onClick={handleonclick}>Buy Now</button>
      </div>
    </div>
  );
}
export default Product;
