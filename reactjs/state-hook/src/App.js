import React, { useReducer, useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';
// import ClassCounter from './components/ClassCounter';
// import HookCounter2 from './components/HookCounter2';
// import HookCounter from './components/HookCounter';
// import HookCounter3 from './components/HookCounter3';
// import HookCounter4 from './components/HookCounter4';
// import HookMouse from './components/HookMouse';
// import MouseContainer from './components/MouseContainer';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import DataFetching from './components/DataFetching';
// import CounterOne from './components/CounterOne';
// import CounterTwo from './components/CounterTwo';
// import CounterThree from './components/CounterThree';

export const CountContext = React.createContext()

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1
    case "decrement":
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
      <div className="App">
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
        {/* <CounterThree /> */}
        {/* <CounterOne /> */}
        {/* <MouseContainer /> */}
        {/* <DataFetching /> */}
        {/* <IntervalHookCounter /> */}
        {/* <HookMouse /> */}
        {/* <ClassCounter /> */}
        {/* <HookCounter /> */}
        {/* <HookCounter2 /> */}
        {/* <HookCounter3 /> */}
        {/* <HookCounter4 /> */}
      </div>

    </CountContext.Provider>
  );
}

export default App;
