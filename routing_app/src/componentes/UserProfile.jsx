import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { theamcontext } from "../context";
import { RiseLoader } from "react-spinners";
import { toast } from "react-toastify";
function UserProfile() {
  const [currentuser, setdata] = useState([]);
  const { theme } = useContext(theamcontext);
  const [loading, setloading] = useState(false);
  const { id } = useParams();
  // const location = useLocation()
  const navigate = useNavigate();
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

  async function handledelte() {
    try {
      const resposne = await fetch(
        `https://69329d23e5a9e342d2700388.mockapi.io/users/users/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!resposne.ok) {
        console.log("error while delete");
      }
      toast.warning("Deleeted");
      navigate("/user");
    } catch (e) {
      console.log("error is ", e);
    }
  }

  function handleedit() {
    navigate(`/user/edit/${id}`);
  }
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
          className={theme === "light" ? "main-user" : "main-user-Dark"}
          style={{ color: theme === "light" ? "black" : "white" }}
        >
          <div className={theme === "light" ? "sub-user" : "sub-user-Dark"}>
            <h2>Personal details</h2>
            <p>FirstName :{currentuser.Firtsname}</p>
            <p>lastName :{currentuser.Lastname}</p>
            <p>Phone :{currentuser.Phone}</p>
            <p>
              <span>Address : </span>
              {currentuser?.adress}
            </p>
            <button className="buttons" style={{margin:'10px'}} onClick={handledelte}>Delete</button>
            <button className="buttons" onClick={handleedit}>Edit</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
