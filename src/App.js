import './App.css';
import React from 'react';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="wrap">
      <><h1>TO-DO LIST</h1>
    
      <div className="App">
        <TodoList />

      </div></>
    </div>
    
  );
}

export default App;
