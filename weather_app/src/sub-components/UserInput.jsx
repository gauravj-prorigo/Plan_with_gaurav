import { useState } from "react";
import "./UserInput.css";
import { IoSearch } from "react-icons/io5";

const UserInput = ({ city, setcity, fetchweather }) => {
  const [error, seterror] = useState("");
  function handlesubmit() {

    if (city.trim() === "") {
      seterror("Enter the city name");
    } else {
      seterror("");
    }
    fetchweather();
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
