import { useEffect, useState } from "react";

function Dummy(){
const [postdata, Setpostdata] = useState("");
  useEffect(() => {
    fetchuserlist();
  }, []);

  async function fetchuserlist() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      if (!response.ok) {
        throw new Error("api fail");
      }
      const data = await response.json();
      console.log(data);
      Setpostdata(data);
    } catch (err) {
      console.log("error");
    }
  }

  return (
    <div>
      <h1>Hello</h1>
      <p>{postdata.title}</p>
    </div>
  );
}

export default Dummy