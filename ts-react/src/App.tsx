import React from 'react';
import Greeting from './Components/Greeting';

function App() {
  const onClickName = (name: string) => {
    console.log(`${name} say hello`);
  }
  return (
    <div className="App">
      <p>this is ts-react-tutorial</p>
      <Greeting name="mark" mark="🔥" onClickName={onClickName}/>
    </div>
  );
}

export default App;
