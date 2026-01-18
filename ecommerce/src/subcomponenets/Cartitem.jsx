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

function handlecountupdate(id) {

  const updateditem = item.map((pro) => {
    if (pro.id === id ) {
      return {
        ...pro,
        quntity: pro.quntity + 1
      };
    }
    return pro;
  });

  setItem(updateditem);
}

function handlecountdeupdate(id) {

  const updateditem = item.map((pro) => {
    if (pro.id === id && pro.quntity > 1) {
      return {
        ...pro,
        quntity: pro.quntity - 1
      };
    }
    return pro;
  });

  setItem(updateditem);
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
        <div className="cart-quantity-box">

  <div className="quantity-control">
    <button onClick={()=> handlecountdeupdate(product.id)}>-</button>

    <span className="quantity-value">{product.quntity}</span>

    <button onClick={()=> handlecountupdate(product.id)}>+</button>
  </div>

  <p className="cart-subtotal">
    SubTotal : ₹ {product.quntity * product.price}
  </p>

</div>

      </div>
      <button className="global-btn" onClick={handledelete}>
        <MdDelete />
      </button>
    </div>
  );
}

export default Cartitem;
