import React from "react";

function Task() {
  return (
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete">X</button>
    </div>
  );

 function Task({ task, onDelete }) {
  return (
    <div>
      <p>{task.text} ({task.category})</p>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}
}
export default Task;
