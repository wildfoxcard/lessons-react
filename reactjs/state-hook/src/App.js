import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter2 from './components/HookCounter2';
import HookCounter from './components/HookCounter';

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      <HookCounter2 />
    </div>
  );
}

export default App;
