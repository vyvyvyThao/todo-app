import logo from './logo.svg';
import './App.css';
import React from 'react';
import TodoList from './components/TodoList';

function App() {
  return (
    <><h1>TO-DO LIST</h1>
    
    <div className="App">
        <TodoList />

      </div></>
  );
}

export default App;
