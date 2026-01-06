import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import promise from "./promise";

function App() {
  const [Watches, setWatches] = useState([]);
  const [count, setCount] = useState(0);
  const [num, setnum] = useState(1);
  const [arr, setarr] = useState([20]);
  const ref = useRef(null);


  useEffect(() => {
    if (count % 2 === 0) {
      // setnum(2);
      setarr([25])
    }
  }, [count]);

  // useEffect(() => {
  //   console.log("num causes re re render");
  // }, [num]);

    useEffect(() => {
    console.log("arr causes re re render");
  }, [arr]);
  return <button onClick={() => setCount((prev) => prev + 1)}>Hello</button>;
}


// function App() {
//   const [count, setCount] = useState(0);
//   const [num, setnum] = useState(1);
//   const [arr, setarr] = useState([20]);

//   // setnum(5)
//   setarr([25])
 
//   return <button onClick={() => setCount((prev) => prev + 1)}>Hello</button>;
// }

export default App;
