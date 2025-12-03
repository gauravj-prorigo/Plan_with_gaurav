import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const [data, setdata] = useState([]);
  const { id } = useParams();
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
  const currentuser = data?.find((user) => user.id == id);
  if (!currentuser) {
    return <p>Loading ....</p>;
  }
  console.log(currentuser);

  return (
    <div className="wrapper">
      <div className="main-user">
        <div>
          <h2>Personal details</h2>
          <p>Name :{currentuser.name}</p>
          <p>Email :{currentuser.email}</p>
          <p>Phone :{currentuser.phone}</p>
          <p>address : </p>
          <p>
            street :{currentuser.address.street} ,{" "}
            <span>suit : {currentuser.address.suite}</span>
          </p>
          <p>City : {currentuser.address.city}</p>
        </div>
        <div>
          <h2>Professional details</h2>
          <p>company Name : {currentuser.company.name}</p>
          {/* <p> company Email :{currentuser.company.catchPhrase} </p>
          <p> company Phone : {currentuser.company.bs}</p>
          <p> company address : {currentuser.company.name}</p> */}
        </div>
        <p>website : {currentuser.website}</p>
      </div>
    </div>
  );
}

export default UserProfile;
