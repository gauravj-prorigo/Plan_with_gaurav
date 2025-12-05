import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useContext } from "react";
import { theamcontext } from "../context";
import { RiseLoader } from "react-spinners";
function UserProfile() {
  const [currentuser, setdata] = useState([]);
  const { theme } = useContext(theamcontext);
  const [loading, setloading] = useState(false);
  const { id } = useParams();
  // const location = useLocation()

  async function fetchuser() {
    setloading(true);
    try {
      const response = await fetch(
        `https://69329d23e5a9e342d2700388.mockapi.io/users/users/${id}`
      );
      console.log("response is ", response);
      const data = await response.json();
      console.log("response is from user is  ", data);
      setdata(data);
      if (!response.ok) {
        console.log("error from api");
      }
    } catch (e) {
      console.log("error", e);
    }
    setloading(false);
  }

  useEffect(() => {
    fetchuser();
  }, []);
  // // const newuser = location.state.data
  // const currentuser = data
  // // if (!currentuser) {
  // //   return <p>Loading ....</p>;
  // // }
  // console.log(data);

  // // console.log("current user is " ,location.state.data)
  return (
    <div
      className="wrapper"
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
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
          className="main-user"
          style={{ color: theme === "light" ? "black" : "white" }}
        >
          <div>
            <h2>Personal details</h2>
            <p>FirstName :{currentuser.Firtsname}</p>
            <p>lastName :{currentuser.Lastname}</p>
            <p>Phone :{currentuser.Phone}</p>
            <p>
              <span>Address : </span>
              {currentuser?.adress}
            </p>
      
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
