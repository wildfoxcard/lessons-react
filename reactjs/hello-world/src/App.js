import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ComponentC from './components/ComponentC'
import { UserProvider } from './components/UserContext';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import ClickCounter2 from './components/ClickCounter2';
// import HoverCounter2 from './components/HoverCounter2';
// import User from './components/User';
// import Counter from './components/Counter-old';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
// import PortalDemo from './PortalDemo';
// import FRParentInput from './components/FRParentInput';
// import FocusInput from './components/FocusInput';
// import RefsDemo from './components/RefsDemo';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Hello from './components/Hello'
// import Message from './components/Message'
// import Counter from './components/Counter'
// import FunctionClick from './components/FunctionClick'
// import ClassClick from './components/ClassClick'
// import EventBind from './components/EventBind'
// import ParentComponent from './components/ParentComponent'
// import UserGreeting from './components/UserGreeting'
// import NameList from './components/NameList'
// import Stylesheet from './components/Stylesheet'
// import Inline from './components/Inline'
// import './appStyles.css'
// import styles from './appStyles.module.css'
// import Form from './components/Form'
// import LifecycleA from './components/LifecycleA'
// import FragmentDemo from './components/FragmentDemo'
// import Table from './components/Tables'
// import ParentComp from './components/ParentComp';

function App() {
  return (
    <div className="App">
      <UserProvider value="Mike">
        <ComponentC />
      </UserProvider>
      {/* <Counter
        render={(count, incrementCount) => (
          <ClickCounter2 count={count} incrementCount={incrementCount} />

        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounter2 count={count} incrementCount={incrementCount} />
        )}
      /> */}

      {/* <ClickCounter2 />
      <HoverCounter2 />
      <User render={(isLoggedIn) => isLoggedIn ? "Mike" : "Guest"} /> */}
      {/* <ClickCounter />
      <HoverCounter /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <h1 class="error">Error</h1>
      <h1 class={styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <ClassClick /> */}
      {/* <FunctionClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman" />
      <Welcome name="Bruce" heroName="Batman" />
      <Welcome name="Clark" heroName="Superman" />
      <Welcome name="Diana" heroName="Wonder Woman" /> */}
      {/* <Welcome /> */}
      {/* <Hello /> */}
    </div >
  );
}

export default App;
