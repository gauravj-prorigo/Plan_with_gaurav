import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Hello From home</h1>
      <button>
        {" "}
        <NavLink to={"/user"}>List Of user</NavLink>
      </button>
    </div>
  );
}

export default Home;
