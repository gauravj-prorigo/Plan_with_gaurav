import { useContext } from "react";
import { theamcontext } from "../context";
import { LuConstruction } from "react-icons/lu";
function Home() {
  const { theme } = useContext(theamcontext);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        color: theme === "light" ? "black" : "white",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          border: theme === "light" ? "2px solid black" : "2px solid white",
          padding: "20px 30px",
          borderRadius: "5px",
        }}
      >
        <h2>Home page Under Devlopment</h2>
        <LuConstruction style={{ fontSize: "100px" }} />
      </div>
    </div>
  );
}

export default Home;
