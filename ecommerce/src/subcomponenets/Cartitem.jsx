import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";


function Cartitem({ product }) {
    const {item ,setItem} = useContext(ProductContext)
    function handledelete(){
        toast.warn("Product removed !!")
        setItem((prev) => prev.filter((items)=> items.id !== product.id))
    }
  return (
    <div className="product" style={{display:'flex', width:'100%',gap:'50px',marginBottom:'10px'}}>
      <img src={product.image} alt={product.name} className="product-image" style={{width:'200px',height:'250px'}} />

      <div className="product-content" style={{width:'50%', textAlign:'start',padding:'10px'}}>
        <h2 className="review-title">{product.name}</h2>
        <p style={{height:'30px'}}>{product.description}</p>
        <h3>RS :{product.price}</h3>
      </div>
      <button className="global-btn" style={{height:'30px',margin:'10px'}} onClick={handledelete}>Delete <span style={{fontSize:'16px'}}><MdDelete />
</span></button>
    </div>
  );
}

export default Cartitem;
