import { useNavigate } from "react-router";
import "../css/product.css";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { toast } from "react-toastify";

function Product({ product }) {
  const { item, setItem } = useContext(ProductContext);
  const navigate = useNavigate();
  function handleonclick() {
    navigate(`/ourteam/${product.id}`);
  }

  function handleaddclick() {
    // console.log(item)
    toast.success("Added in the card")
    setItem((prev) => [...prev, product]);
    console.log("item in context", item);
  }

  const isInCart = item.find((it) => it.id === product.id);
  console.log("iscart",isInCart)

  return (
    <div className="product">
      <img src={product.image} alt={product.name} className="product-image" />

      <div className="product-content">
        <h2 className="review-title">{product.name}</h2>
        <p>{product.description}</p>
        <h3>RS :{product.price}</h3>
      </div>
      <div className="product-button">
        {isInCart ? (
         null
        ) : (
          <button className="add" onClick={handleaddclick}>
            Add to cart
          </button>
        )}
        <button className="buy" onClick={handleonclick}>
          Buy Now
        </button>
      </div>
    </div>
  );
}
export default Product;
