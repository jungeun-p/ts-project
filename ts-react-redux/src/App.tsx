import React from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import GithubProfileLoader from './containers/GithubProfileLoader';
import TodoApp from './containers/TodoApp';

function App() {
  return (
    <div className="App">
      {/* <CounterContainer /> */}
      {/* <TodoApp /> */}
      <GithubProfileLoader />
    </div>
  );
}

export default App;
