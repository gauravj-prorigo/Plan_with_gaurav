import { useEffect, useState } from "react";
import data from "../data/Product";
import Product from "../subcomponenets/Product";
import "../css/OurTeam.css";
import ProductSkeleton from "../Skeleton/ProductSkeleton";
function OurTeam() {
  const [prodata, Setprodata] = useState([]);
  useEffect(() => {
    const productdata = new Promise((res) => {
      setTimeout(() => {
        res(data);
      }, 2000);
    });

    productdata.then((res) => {
      console.log("rsposne of product", res);
      Setprodata(res);
    });
  }, []);
  const SKELETON_COUNT = 8;
  return (
    <div>
      <div className="main-product">
        <div className="sub-product">
          {prodata.length === 0
            ? Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                <ProductSkeleton key={index} />
              ))
            : prodata.map((product) => (
                <Product product={product} key={product.id} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
