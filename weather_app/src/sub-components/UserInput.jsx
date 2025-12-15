import { useState } from "react";
import "./UserInput.css";
import { IoSearch } from "react-icons/io5";

const UserInput = ({ city, setcity, fetchcurrentweather }) => {
  const [error, seterror] = useState("");
  function handlesubmit() {

    if (city.trim() === "") {
      seterror("Enter the city name");
    } else {
      seterror("");
    }
    fetchcurrentweather(`https://api.weatherapi.com/v1/current.json?key=556769fc1cee4f978b9175318250712&q=${city}&aqi=no`);
    setcity("")
  }
  return (
    <div className="input-main">
      <div className="mains">
        <div>
          <input
            type="text"
            placeholder="Enter the city name"
            value={city}
            onChange={(e) => {
              seterror(""), setcity(e.target.value);
            }}
          />
          {error && <p style={{ color: "red", fontWeight: "300" }}>{error}</p>}
        </div>

        <div>
          <button onClick={handlesubmit}>
            <IoSearch />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInput;
export {handlesubmit}
