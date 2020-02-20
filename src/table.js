import React, { useContext } from 'react';
import { TableContext } from './tableContext';

function Table() {
  const allTasks = useContext(TableContext);

  console.log(allTasks);
  return (
    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>Task</td>
        </tr>
      </thead>
      <tbody>
        {allTasks.tasks.map(({ id, taskName }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{taskName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
