import React, { useState, useContext } from 'react';
import { TableContext } from './tableContext';

function Form() {
  const [newTask, setNewTask] = useState('');
  const allTasks = useContext(TableContext);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(newTask);
    const tasks = [
      ...allTasks.tasks,
      { id: allTasks.tasks.length + 1, taskName: newTask }
    ];
    setNewTask('');
    allTasks.setTasks(tasks);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='task name'>Task: </label>
      <input
        type='text'
        onChange={e => setNewTask(e.target.value)}
        placeholder='Enter your task'
        value={newTask}
      />
      <input type='submit' value='Add Task' />
    </form>
  );
}

export default Form;
