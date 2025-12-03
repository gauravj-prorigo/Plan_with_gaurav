import { useState } from "react";

function TaskInput(props) {
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

  return (
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
  );
}

export default TaskInput;
