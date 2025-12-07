const UserInput = ({ city, setcity, fetchweather }) => {
  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter the city name"
        value={city}
        onChange={(e) => setcity(e.target.value)}
      />

      <div>
        <button onClick={fetchweather}>Search</button>
      </div>
    </div>
  );
};

export default UserInput;
