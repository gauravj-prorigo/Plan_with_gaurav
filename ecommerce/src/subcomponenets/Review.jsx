import shoesData from "../data/data";
import "../css/Review.css";
import Card from "./Card";
import { useEffect, useState } from "react";
import ReviewCardSkeleton from "../Skeleton/ReviewCardSkeleton";

function Review() {
  const [shoedata, setshoedata] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const data = new Promise((resolve) => {
      setTimeout(() => {
        resolve(shoesData);
      }, 2000);
    });
    data.then((result) => {
      console.log(result);
      setshoedata(result);
      setloading(false);
    });
  }, []);

  return (
    <div className="main-review-container">
      <div className="sub-main-review" style={{ display: "flex" }}>
        <h2>Customer Reviews</h2>
        <p
          style={{
            width: "50%",
            fontSize: "16px",
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          "These shoes are incredibly comfortable and stylish! I've received so
          many compliments on them. Highly recommend to anyone looking for
          quality footwear."
        </p>

        <div className="show-review">
          {loading
            ? Array.from({ length: 5 }).map((_, index) => (
                <ReviewCardSkeleton key={index} />
              ))
            : shoedata.map((shoes) => <Card key={shoes.id} shoes={shoes} />)}
        </div>
      </div>
    </div>
  );
}

export default Review;
