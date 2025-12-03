import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function User() {
  const [data, setdata] = useState([]);
  async function fetchuser() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log("response is ", response);
      const data = await response.json();
      console.log("response is from data ", data);
      setdata(data);
      if (!response.ok) {
        console.log("error from api");
      }
    } catch (e) {
      console.log("error", e);
    }
  }

  useEffect(() => {
    fetchuser();
  }, []);
  return (
    <div style={{ padding: "20px",display:'flex', flexDirection:'column',  alignItems:'self-start' ,width:'400px'}}>
      <h2 style={{ marginBottom: "20px" }}>List of user</h2>

      <div style={{width:'100%'}}>
        {data.map((user) => (
          <NavLink
            key={user.id}
            to={`/user/${user.id}`}
            style={{
              textDecoration: "none",
              color: "black",
              display: "block",
              marginBottom: "10px",
            }}
          >
            <li
              style={{
                listStyle: "none",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              {user.name}
            </li>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default User;
