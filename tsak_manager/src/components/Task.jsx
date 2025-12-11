
import "./Task.css";
import TaskInput from "./TaskInput";
function Task(props) {
  let num = 1;
  function handlecheck(i) {
    let copyarray = props.task.map((task) => ({ ...task }));
    copyarray[i].check = !copyarray[i].check;
    console.log(props.task);
    props.setTask(copyarray);
  }

  return (
    <div className="main-container">

        <TaskInput {...props}/>

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
