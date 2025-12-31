import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";
import "../css/Cartitem.css";
function Cartitem({ product }) {
  const { item, setItem } = useContext(ProductContext);
  function handledelete() {
    toast.warn("Product removed !!");
    setItem((prev) => prev.filter((items) => items.id !== product.id));
  }
  return (
    <div
      className="product cart-item-main"
    >
      <img
        src={product.image}
        alt={product.name}
        className="product-image cart-item-img"
      />

      <div
        className="product-content cart-item-content"
      >
        <h2 className="review-title">{product.name}</h2>
        <p>{product.description}</p>
        <h3>RS :{product.price}</h3>
      </div>
      <button className="global-btn" onClick={handledelete}>
        <MdDelete />
      </button>
    </div>
  );
}

export default Cartitem;
