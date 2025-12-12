import { useCallback, useMemo, useState } from "react";
import "./App.css";
import Child from "./Child";
//expensive calculation without useMemo
// function App() {
//   const [count, setCount] = useState(0);
//   const [input, setinput] = useState(0);
//   function expnsive(n) {
//     for (let i = 0; i <= 1000000000; i++) {}
//     return n * n;
//   }
//   let doublevalue = expnsive(input);

//   return (
//     <>
//       <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
//       <input
//         type="text"
//         name=""
//         id=""
//         value={input}
//         onChange={(e) => setinput(e.target.value)}
//       />
//       {doublevalue}
//     </>
//   );
// }

//with usememo

function App() {
  const [count, setCount] = useState(0);
  const [input, setinput] = useState(0);
  function expnsive(n) {
    for (let i = 0; i <= 1000000000; i++) {}
    return n * n;
  }
  console.log("In the parent");
  let doublevalue = useMemo(() => expnsive(input), [input]);

  const handleClcik = useCallback(() => {
    console.log("clciked");
  }, []);

  // function handleClcik() {
  //   console.log("clciked");
  // }
// const arr1 = [0, 1, 2]
  const arr1 = useMemo(() => [0, 1, 2], []);
  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
      <input
        type="text"
        name=""
        id=""
        value={input}
        onChange={(e) => setinput(e.target.value)}
      />
      {doublevalue}
      <div>
        <Child arr={arr1} handleClcik={handleClcik} />
      </div>
    </>
  );
}

export default App;
