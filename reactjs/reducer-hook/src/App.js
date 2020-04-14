import React from 'react';
import './App.css';
// import DataFetchingOne from './component/DataFetchingOne';
// import DataFetchingTwo from './component/DataFetchingTwo';
// import Counter from './component/Counter';
// import FocusInput from './component/FocusInput';
// import HookTimer from './component/HookTimer';
// import DocTitleOne from './component/DocTitleOne';
// import DocTitleTwo from './component/DocTitleTwo';
import CounterOne from './component/CounterOne';
import CounterTwo from './component/CounterTwo';

function App() {
  return (
    <div className="App">
      <CounterOne />
      <CounterTwo />
      {/* <DocTitleOne />
      <DocTitleTwo /> */}
      {/* <HookTimer /> */}
      {/* <FocusInput /> */}
      {/* <DataFetchingTwo /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
