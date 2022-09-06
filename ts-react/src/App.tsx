import React from 'react';
import Counter from './Components/Counter';
import Greeting from './Components/Greeting';
import MyForm from './Components/MyForm';
import ReducerSample from './Components/ReducerSample';

function App() {
  const onClickName = (name: string) => {
    console.log(`${name} say hello`);
  }
  type form = {
    name: string;
    description: string;
  }
  const onSubmit = (form: form) => {
    console.log(form);
  }
  return (
    <div className="App">
      <p>this is ts-react-tutorial</p>
      <Greeting name="mark" mark="🔥" onClickName={onClickName}/>
      <Counter />
      <MyForm onSubmit={onSubmit}/>
      <ReducerSample />
    </div>
  );
}

export default App;
