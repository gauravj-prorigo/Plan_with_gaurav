import { useState } from "react";
import Tours from "./components/Tours";
import data from "./data";

const App = () => {
  const [tours, setTours] = useState(data);
  function notintrested(id) {
    const newtours = tours.filter((tour) => tour.id !== id);
    setTours(newtours);
  }

  function handlerefresh() {
    setTours(data);
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          margin: "25px",
        }}
      >
        <h2
          style={{
            border: "2px dotted blue",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          plan with Gaurav
        </h2>
      </div>
      {tours.length === 0 ? (
        <div>
          <h1>No tour Left</h1>
          <button onClick={handlerefresh}>Refresh</button>
        </div>
      ) : (
        <Tours tours={tours} clicknon={notintrested} />
      )}
    </div>
  );
};
export default App;
