import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import promise from "./promise";
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
  const [Watches, setWatches] = useState([]);
  const [Loading, setLoading] = useState(false);
  // const firstFiveImages = data.watches.then(()=> data)
  // data.watches.then(()=> console.log("Success:"))
  useEffect(() => {
    // promise.watches.then((resolvedData) => {
    //   setLoading(true);
    //   console.log(resolvedData);
    //   const Data = resolvedData.slice(0, 5);
    //   console.log("Data", Data);
    //   setWatches(Data);
    //   setLoading(false);
    // });
    const Data =  promise.watches.then((resolvedData));
     console.log(Data)
  }, []);
  return (
    <>
      <h2>Watches</h2>
      <div className="proSection">
        {Loading ? (
          <h1>Loading...</h1>
        ) : (
          Watches.map((item) => {
            return (
              <div className="imgBox">
                <img className="proImage" src={item.image} />
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default App;
