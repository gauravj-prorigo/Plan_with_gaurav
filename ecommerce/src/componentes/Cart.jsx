import { useContext } from "react";
import "../css/Cart.css";
import { ProductContext } from "../context/ProductContext";
import Cartitem from "../subcomponenets/Cartitem";
import { useNavigate } from "react-router";
function Cart() {
  const { item } = useContext(ProductContext);
  const navigate = useNavigate();
  const totalcart = item.reduce((total, curr) => {
    return total + curr.price * curr.quntity;
  }, 0.0);
  return (
    <div className="main-cart">
      <h1>Cart Page</h1>
      <div className="sub-cart">
        {item.length === 0 ? (
          <div className="sub-cart3">
            <h1>Nothing in the card </h1>
            <p>Total: {totalcart}</p>
            <button className="global-btn" onClick={() => navigate("/ourteam")}>
              Add Items
            </button>
          </div>
        ) : (
          <div className="sub-cart2">
            {item.map((product, index) => (
              <Cartitem product={product} key={index} />
            ))}
            <div className="cart-total-box">
              <p className="cart-total">Total: ₹ {totalcart}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
