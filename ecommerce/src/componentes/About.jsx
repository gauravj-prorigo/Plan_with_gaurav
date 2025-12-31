import React, { useState, useCallback, useRef } from "react";

export default function About() {
  const [count, setCount] = useState(0);
  const functionRef = useRef(null);

//   const handleClick = useCallback(() => {
//     console.log("Clicked");
//   }, []); // No dependencies → stable function

const handleClick  = ()=>{
       console.log("Clicked");
}

  if (functionRef.current !== handleClick) {
    console.log("Same function instance retained");
    functionRef.current = handleClick;
  }

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Re-render</button>
      <p>{count}</p>
    </div>
  );
}
