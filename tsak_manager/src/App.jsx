import { useState } from "react";
import Task from "./components/Task";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [task, setTask] = useState([]);
  const [show, setshow] = useState(false);

  function handledelte(id) {
    console.log(id);
    setTask(task.filter((_, index) => index !== id));
  }

  return (
    <div>
      <button onClick={() => setshow(!show)} className="btn">
        Show Counter
      </button>
      <h1>Task Tracker</h1>
      <Task task={task} setTask={setTask} handledelte={handledelte}></Task>
      {show ? <Counter /> : null}
    </div>
  );
}

export default App;
