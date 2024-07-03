import React from "react";
import "./TaskList.css";

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div key={index} className="task-item">
          <h2>{task.title}</h2>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
