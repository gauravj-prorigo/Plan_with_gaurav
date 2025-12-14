import React from "react";
import { MdError } from "react-icons/md";
import { Link } from "react-router-dom";
const ErrorFallback = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "white",
          color: "black",
        }}
      >
        <MdError style={{ fontSize: "30px", color: "red" }} />
        <h1>Something Went Wrong</h1>
        
      </div>
    </div>
  );
};

export default ErrorFallback;
