import React from "react";
import Card from "./Card";
const Tours = ({ tours, clicknon }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {tours.map((tour) => (
          <Card key={tour.id} tour={tour} clicknon={clicknon} />
        ))}
      </div>
    </div>
  );
};

export default Tours;
