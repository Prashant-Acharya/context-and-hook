import React from 'react';
import Table from './table';
import TableContextProvider from './tableContext';
import Form from './form';

const App = () => {
  return (
    <TableContextProvider>
      <div>
        <h1>App</h1>
        <Form />
        <Table />
      </div>
    </TableContextProvider>
  );
};

export default App;
