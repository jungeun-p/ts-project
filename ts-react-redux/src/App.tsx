import React from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import TodoApp from './containers/TodoApp';

function App() {
  return (
    <div className="App">
      {/* <CounterContainer /> */}
      <TodoApp />
    </div>
  );
}

export default App;
