import "./App.css";
import Square from "./components/Square";
import { useState } from "react";
function App() {
  const [value, setValue] = useState([]);
  const [xtern, setxtern] = useState(true);
  const [resset, setReset] = useState(false);
  let win = null;
  function winner(s) {
    console.log("function get called", s);
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (s[a] && s[a] === s[b] && s[a] === s[c]) {
        return s[a];
      }
    }
    return null;
  }

  function handleOnclcick(i) {
    if (winner(value) || value[i]) {
      return;
    }
    const duplicate = value.slice();

    if (xtern) {
      duplicate[i] = "X";
    } else {
      duplicate[i] = "O";
    }
    setValue(duplicate);
    setxtern(!xtern);

    let choosewinner = winner(duplicate);
    if (choosewinner) {
      setReset(true);
    } else if (duplicate.every((v) => v !== null)) {
      setReset(true);
    } else {
      setReset(false);
    }
  }

  win = winner(value);
  if (win === "X") {
    win = "X is Winner";
  } else if (win === "O") {
    win = "O is winner";
  } else {
    win = "Next player is " + (xtern ? "X" : "O");
  }

  function handlereset() {
    setValue(Array(9).fill(null));
    win = "";
    setReset(false);
    setxtern(true);
  }
  return (
    <div className="main">
      <h1>
        Hello Welcome to <span className="span">TicTakToe</span>
      </h1>
      <div>{resset ? <button onClick={handlereset}>Reset</button> : null}</div>
      <p className="win">{win}</p>
      <div className="square">
        <Square handleOnclcick={() => handleOnclcick(0)} value={value[0]} />
        <Square handleOnclcick={() => handleOnclcick(1)} value={value[1]} />
        <Square handleOnclcick={() => handleOnclcick(2)} value={value[2]} />
      </div>
      <div className="square">
        <Square handleOnclcick={() => handleOnclcick(3)} value={value[3]} />
        <Square handleOnclcick={() => handleOnclcick(4)} value={value[4]} />
        <Square handleOnclcick={() => handleOnclcick(5)} value={value[5]} />
      </div>
      <div className="square">
        <Square handleOnclcick={() => handleOnclcick(6)} value={value[6]} />
        <Square handleOnclcick={() => handleOnclcick(7)} value={value[7]} />
        <Square handleOnclcick={() => handleOnclcick(8)} value={value[8]} />
      </div>
    </div>
  );
}

export default App;
