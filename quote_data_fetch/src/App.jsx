import { useEffect, useState } from "react";
import { useRef } from "react";
import "./App.css";
import Quote from "./components/Quote";
function App() {
  const [img, setimg] = useState([]);
  const [quote, setquote] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingimg, setLoadingimg] = useState(false);
  const ref = useRef(null);
  // async function handleonclcikimg() {
  //   setLoadingimg(true);
  //   try {
  //     const data = await fetch("https://picsum.photos/v2/list");
  //     if (!data.ok) {
  //       console.log("error from server");
  //     }
  //     const response = await data.json();
  //     console.log(response);
  //     setimg(response);
  //   } catch (err) {
  //     console.log("the error is ", err);
  //   }
  //   setLoadingimg(false);
  //   console.log("image is ", img);
  // }
  async function handleonclcik() {
    setLoading(true);
    try {
      const data = await fetch("/zenquotes/api/random");
      if (!data.ok) {
        console.log("error from server");
      }
      const response = await data.json();
      console.log(response);
      setquote(response);
    } catch (err) {
      console.log("the error is ", err);
    }
    setLoading(false);
  }
  return (
    <>
      <div>
        {/* <button onClick={handleonclcikimg}>clcik me to faech data</button> */}

        {/* <div>
          {loadingimg ? (
            <h1>Loading ............</h1>
          ) : (
            <Photos img={img}></Photos>
          )}
        </div> */}
        <div>
          <button onClick={handleonclcik}>clcik me to faech Quote</button>
          {loading ? (
            <h2>Loading ............</h2>
          ) : (
            <Quote quote={quote} ref={ref}></Quote>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
