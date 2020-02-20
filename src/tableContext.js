import React, { createContext, useState, useEffect } from 'react';

export const TableContext = createContext();

const dummyData = [
  {
    id: 1,
    taskName: 'Task 1'
  },
  {
    id: 2,
    taskName: 'Task 2'
  }
];

function TableContextProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setTasks(dummyData);
    }, 1000);
  }, []);

  return (
    <TableContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TableContext.Provider>
  );
}

export default TableContextProvider;
