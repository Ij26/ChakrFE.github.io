import React, { useState } from 'react';
import './TodoList.css';

const initialTasks = [
  { id: 1, title: 'Task 1', description: 'Description 1' },
  { id: 2, title: 'Task 2', description: 'Description 2' },
];

const TodoList = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  const handleAddTask = () => {
    if (newTask.title && newTask.description) {
      setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
      setNewTask({ title: '', description: '' });
    }
  };

  const handleEditTask = (id, field, value) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, [field]: value } : task)));
  };

  const handleDeleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <div className="task-input">
        <input
          type="text"
          placeholder="Task Title"
          value={newTask.title}
          onChange={e => setNewTask({ ...newTask, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Task Description"
          value={newTask.description}
          onChange={e => setNewTask({ ...newTask, description: e.target.value })}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>
                <input
                  type="text"
                  value={task.title}
                  onChange={e => handleEditTask(task.id, 'title', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={task.description}
                  onChange={e => handleEditTask(task.id, 'description', e.target.value)}
                />
              </td>
              <td>
                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
