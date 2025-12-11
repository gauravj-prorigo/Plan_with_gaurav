import { useState, useRef } from "react";
import Task from "./components/Task";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [task, setTask] = useState([]);
  const [show, setshow] = useState(false);
  const [count, setcount] = useState(0);
  const [input ,setinput] = useState('')
  const ref = useRef(0);
  ref.current++;

  console.log("app.js", ref);
  function handledelte(id) {
    console.log(id);
    setTask(task.filter((_, index) => index !== id));
  }


  return (
    <div>
      <input type="text" onChange={(e)=>setinput(e.target.value)} value={input} />
      {<Counter count={count} setcount={setcount}/>}
      {/* <button onClick={() => setshow(!show)} className="btn">
        Show Counter
      </button>
      <h1>Task Tracker</h1>
      <Task task={task} setTask={setTask} handledelte={handledelte}></Task>
      {show ? <Counter count={count} setcount={setcount} /> : null} */}
      
    </div>
  );
}

export default App;
