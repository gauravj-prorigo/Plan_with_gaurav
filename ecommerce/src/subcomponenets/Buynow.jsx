import { useParams } from "react-router";
import Productdata from "../data/Product";
import "../css/BuyNow.css";
function BuyNow() {
  const { id } = useParams();
  console.log(id);
  console.log("dtaaauhhbcjhbj", Productdata);
  const data = Productdata.filter((item, index) => item.id === Number(id));
  console.log(data);
  return (
    <div
      className="main-buy"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url(${data[0].image})`,
      }}
    >
      <div className="sub-main-buy">
        <img src={data[0].image} />
        <div className="sub-main-buy2">
          <h1>{data[0].name}</h1>
          <h2>RS - {data[0].price}</h2>
          <p>{data[0].description}</p>
          <h3>⭐⭐⭐⭐</h3>
        </div>
      </div>
    </div>
  );
}

export default BuyNow;
