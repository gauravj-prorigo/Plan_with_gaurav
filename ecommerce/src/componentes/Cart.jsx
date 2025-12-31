import { useContext } from "react";
import "../css/Cart.css";
import { ProductContext } from "../context/ProductContext";
import Cartitem from "../subcomponenets/Cartitem";
import { useNavigate } from "react-router";
function Cart() {
  const { item } = useContext(ProductContext);
  const navigate = useNavigate()
  return (
    <div className="main-cart">
      <h1>Cart Page</h1>
      <div className="sub-cart">
        {item.length === 0 ? (
          <div className="sub-cart3">
            <h1>Nothing in the card </h1>
            <button className="global-btn" onClick={()=>navigate('/ourteam')}>Add Items</button>
          </div>
        ) : (
          <div className="sub-cart2">
            {item.map((product, index) => (
              <Cartitem product={product} key={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
