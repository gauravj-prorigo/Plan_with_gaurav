import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useContext } from "react";
import { theamcontext } from "../context";
import { RiseLoader } from "react-spinners";
import Form from "./Form";
function User() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const { theme } = useContext(theamcontext);
  const { userid } = useParams();
  async function fetchuser() {
    try {
      setloading(true);
      const response = await fetch(
        "https://69329d23e5a9e342d2700388.mockapi.io/users/users"
      );
      if (!response.ok) {
        console.log("error from api");
      }
      // console.log("response is ", response);
      const data = await response.json();
      // console.log("response is from data ", data);
      setdata(data);
    } catch (e) {
      console.log("error", e);
    }
    setloading(false);
  }

  useEffect(() => {
    fetchuser();
  }, []);
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        alignItems: "center",
        color: theme === "light" ? "black" : "white",
        justifyContent: "space-around",
      }}
    >
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <RiseLoader size={20} color="blue" />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
            border: theme === "light" ? "2px solid gray" : "2px solid white",
            borderRadius: "5px",
            padding: "5px 20px",
          }}
        >
          <h2 style={{ marginBottom: "20px" }}>List of user</h2>
          {data.length === 0 ? (
            <h2>No user</h2>
          ) : (
            data.map((user) => (
              <NavLink
                key={user.id}
                to={`/user/${user.id}`}
                state={{ data }}
                style={{
                  textDecoration: "none",
                  color: theme === "light" ? "black" : "white",
                  marginBottom: "10px",
                }}
              >
                <li
                  style={{
                    listStyle: "none",
                    padding: "10px 20px",
                    border: "1px solid #ccc",
                    borderRadius: "6px",
                    cursor: "pointer",
                    margin: "5px",
                    width: "350px",
                  }}
                >
<<<<<<< HEAD
                  {user.Firtsname +" "+ user.Lastname}
=======
                  {user.Firtsname}
>>>>>>> 8fe0870497c61c9a71323e6b507118ae8bab62be
                </li>
              </NavLink>
            ))
          )}
        </div>
      )}
      {/* <div
        style={{
          width: "30%",
          border: "2px solid gray",
          padding: "10px 20px",
          marginTop: "50px",
          borderRadius: "5px",
        }}
      >
        <Form id = {userid}/>
      </div> */}
    </div>
  );
}

export default User;
