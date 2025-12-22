import "../css/product.css";

function Product({ product }) {
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
        <button className="buy">Buy Now</button>
      </div>
    </div>
  );
}
export default Product;
