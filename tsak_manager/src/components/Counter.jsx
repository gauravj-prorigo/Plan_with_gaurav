import { memo, useRef, useState } from "react";

function Counter({ count, setcount}) {
  // const [count ,setcount] = useState(0)
  const ref = useRef(0);
  ref.current++;
  console.log("counter.jsx",ref);
  return (
    <div
      style={{
        margin: "20px",
        border: "2px solid black",
        padding: "20px",
        borderRadius: "5px",
      }}
    >
      <h1>Counter app</h1>
      <button onClick={()=>setcount(prev => prev+1)} className="btn">
        Increment
      </button>
      <p>{count}</p>
      {ref.current}
      <button onClick={()=>setcount(prev => prev-1)} className="btn">
        Decrement
      </button>
    </div>
  );
}

export default memo(Counter);
