import { useState } from "react";
import "./Task.css";
function Task(props) {
  let num = 1;
  const [inputval, setInput] = useState("");
  function handlinput() {
    if (inputval.length <= 0) {
      return;
    }
    props.setTask([...props.task, { task: inputval, check: false }]);
    setInput("");
  }

  function handleinputchange(event) {
    setInput(event.target.value);
  }

  function handlecheck(i) {
    let copyarray = [...props.task];
    copyarray[i].check = !copyarray[i].check;
    console.log(props.task);
    props.setTask(copyarray);
  }

  return (
    <div className="main-container">
      <div className="input">
        <input
          type="text"
          value={inputval}
          onChange={(e) => handleinputchange(e)}
          placeholder="Add tasks......"
        />
        <button className="btn" onClick={handlinput}>
          Add
        </button>
      </div>
      <div>
        {props.task.map((t, index) => (
          <div className="list">
            {num++}
            <div className="li">
              <input
                type="checkbox"
                name="checkbox"
                value={t.check}
                onChange={() => handlecheck(index)}
              />
              <li style={{ color: t.check ? "white" : "black" }} key={index}>
                {t.task}{" "}
              </li>
            </div>

            <button className="btn" onClick={() => props.handledelte(index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task;
