import React from "react";

const BuggyComponent = () => {
  throw new Error("Test Error!");
};

export default BuggyComponent;
