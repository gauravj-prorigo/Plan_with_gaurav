import React, { useState } from "react";

const Card = ({ tour, clicknon }) => {
  const [readmore, setreadmore] = useState(true);
  const infos = readmore
    ? `${String(tour.info).substring(0, 200)}...`
    : tour.info;
  function show() {
    setreadmore(!readmore);
  }
  return (
    <div
      style={{
        width: "350px",
        minHeight: "450px",
        border: "2px solid #ddd",
        borderRadius: "12px",
        padding: "16px",
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={tour.image}
        alt="img"
        style={{
          width: "320px",
          height: "250px",
          borderRadius: "10px",
        }}
      />
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>
        ₹ {tour.price}
      </p>

      <p
        style={{
          fontSize: "14px",
          color: "black",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        {infos}
      </p>

      <span
        onClick={show}
        style={{
          color: 'blue',
          marginBottom: "12px",
        }}
      >
        {readmore ? "Read More" : "Show Less"}
      </span>

      <button
        onClick={() => clicknon(tour.id)}
        style={{
          padding: "10px",
          borderRadius: "8px",
          background: "red",
          color: "white",
          border: "none",
        }}
      >
        Not Interested
      </button>
    </div>
  );
};

export default Card;
