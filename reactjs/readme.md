# Typescript - The basics

from youtube video:

https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3

### notes from video:

#### First video

1. React in maintain by Facebook
2. Reusable components
3. React is declarative
4. React can be seamlessly integrated into any app.
5. HTML, CSS, and javascript (es6) fundamentals is required
6. ES6 requirements
   a) let & const
   b) arrow functions
   c) template literals
   d) default parameters
   e) object literals
   f) rest and spread operators
   g) destructuring assignments

#### Second Video

Requirements:

1. node
2. IDE (mine will be vscode)

how to install:

```bash
npx create-react-app hello-world
cd hello-world
npm start
```

how to run application:

```bash
cd hello-world
npm start
```

What is npx?
npm package runner

how to use normal npm

```bash
npm install create-react-app -g
create-react-app <project_name>
```

#### Third Video

This video explains file and folder structure.

1. package.json - normal node file with scripts and dependencies installed
2. public

- manifest.json - out of scope for this video
- favicon.ico - normal favicon, nothing to do with react.
- index.html - Normal index file with the root div.

3. src - the main react folder

- index.js - the starting point to the react application
- app.js - the scaffold component for the react app
- app.css - for styling
- app.test.js - for unit test
- index.css - applies styles to the body tag
- logo.svg - references by the app component
- serviceWorker.js - out of scope for this video.

#### Fourth Video

Components are in javascript files. They can also be in .jsx files.

There are two types of components:

1. Stateless functional Component
2. Stateful Class Component

#### Fifth Video

This video is about Functional Components

Only input is props.

We are using Pascel case for component file names.

#### Sixth Video

This video is about Class Components.

Input is props but also has private state.

When to use a functional compare to a class component

1. functional is the best to choice.
2. functional doesn't have "this"
3. functional makes you think of a solution without using state <-- decrepated statement

4. class is more feature rich
5. class has life-cycle hooks
6. class is best for complex UIs.

#### Seventh Video

Video seven is about a new feature that allows state in functional components.

#### Eighth Video

This video is about JSX.

JSX is an extension to the javascript language. JSX is not a necessity to write React Application. JSX ultimately transpiles to pure javascript which is understood by browsers.

html/JSX differences
|html|JSX|
|---|---|
| class | className|
| for | htmlFor |
| onclick | onClick |
| tabindex | tabIndex |

#### ninth Video

How to use props with functional component.

```javascript
const Greet = (props) => {
    ...
}
```

Now he can add props of the element.

```javascript
<Greet name="bob" />
```

plus we can use children props

```javascript
<Greet name="bob">
  <p>This is children props</p>
</Greet>
```

```javascript
const Greet = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      {props.children}
    </div>
  );
};
```

In a class component, props is available in this.props

```javascript
class Welcome extends Component {
  render() {
    return (
      <h1>
        Weclome {this.props.name} a.k.a. {this.props.heroName}
      </h1>
    );
  }
}
```

props are inmutatble. You cannot change the value.

#### 10th video

This video is about component state.

To use state in a class component, you need to extend the constructor functionality

```javascript
import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
  }

  render() {
    return <h1>Weclome visitor</h1>;
  }
}

export default Message;
```

The constructor calls super to all basic functionality to run while allowing you access to the constuctor.

```javascript
...brevity
    constructor() {
        super()
        this.state = {
            message: "Welcome visitor"
        }
    }
```

#### 11th video

This video is about the setState function.

Imagine we have a class component that has a state of count = 0

```javascript
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
```

We can use set state to increment that count

```javascript
this.setState({
  count: this.state.count + 1
});
```

You can also use the second param for a callback function

```javascript
this.setState(
  {
    count: this.state.count + 1
  },
  () => {
    console.log(this.state.count);
  }
);
```

This is the better way to manage state

```javascript
this.setState(prevState => ({
  count: prevState.count + 1
}));
```

You can also have a state that is depended on props

```javascript
this.setState((prevState, props) => ({
  count: prevState.count + props.addValue
}));
```

#### 12th video

This video is about destructuring props and state

In the function component, using destructuring I can do this:

```jsx
const Greet = (props) => {
```

```jsx
const Greet = ({name, heroName}) => {
```

The second way is to assign to a const variable

```jsx
const Greet = props => {
  const { name, heroName, children } = props;
};
```

In a class component, using destructuring I can do this.

```jsx
class Welcome extends Component {
  render() {
    return (
      <h1>
        Weclome {this.props.name} a.k.a. {this.props.heroName}
      </h1>
    );
  }
}
```

```jsx
class Welcome extends Component {
  render() {
    const { name, heroName } = this.props;
    return (
      <h1>
        Weclome {name} a.k.a. {heroName}
      </h1>
    );
  }
}
```

this can also work with state

```jsx
const { state1, state2 } = this.state;
```

#### 13th video

This video is about event types

Event will use camelcase instead of lower case.

onClick in a functional component

```jsx
function clickHandler() {
  console.log("click");
}

return (
  <div>
    <button onClick={clickHandler}>Click</button>
  </div>
);
```

onClick in a class component

```jsx
class ClassClick extends Component {
  clickHandler() {
    console.log("clicked!");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}
```

#### 14th Video

This video is about binding event handlers in class components

The following calls a clickHandler on button click. But the state isn't transferred because this is undefined.

```jsx
class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello"
    };
  }

  clickHandler() {
    // this.setState({
    //     message: "goodbye"
    // })
    console.log(this);
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}
```

There are many ways to handle event binding.

1. use .bind(this)

```jsx
<button onClick={this.clickHandler.bind(this)}>Click</button>
```

But this will cause a render. This is not a problem for a small app but can cause issues in larger applications because of the nested children.

2. Arrow Function

```jsx
<button onClick={() => this.clickHandler()}>Click</button>
```

3. Use the constructor

The official way is to use the constructor to assign the bind.

```jsx
constructor(props) {
    super(props)

    this.state = {
        message: "hello"
    }

    this.clickHandler = this.clickHandler.bind(this)
}
```

```jsx
<button onClick={this.clickHandler}>Click</button>
```

4. Arrow function as a class property

```jsx
clickHandler = () => {
  this.setState({
    message: "goodbye"
  });
  // console.log(this)
};
```

#### 15th Video

This video is about passing a method to the child component

It works the same as passing a prop to a child component

```jsx
<ChildComponent greetHandler={this.greetParent} />
```

```jsx
function ChildComponent(props) {
  return (
    <div>
      <button onClick={props.greetHandler}>Greet Parent</button>
    </div>
  );
}
```

This is how to pass parameters to the child component

```jsx
<ChildComponent greetHandler={() => this.greetParent("child")} />
```

#### 16th Video

This video is about conditional rendering. It works the same way in react as it does in javascript. These are your options:

1. if/else
2. Element Variables
3. Ternary conditional operator
4. Short circuit operator

Conditional rendering is rendering components base on conditions. Below is the Element variable approach.

```jsx
render() {
    let message;
    if(this.state.isLoggedIn) {
        message = <div>Welcome Mike</div>
    } else {
        message = <div>Welcome Guest</div>
    }

    return <div>{message}</div>
}
```

Below is an example of a Ternary conditional operator

```jsx
render() {
    return (
        this.state.isLoggedIn ?
        <div>Welcome Mike</div> :
        <div>Welcome Guest</div>
    )
}
```

Below is a short circuit operator approach

```jsx
render() {
    return (
        this.state.isLoggedIn && <div>Welcome Mike</div>
    )
}
```

#### 17th Video

This video is about rendering a list in react.

Use .map in an array

```jsx
const names = ["bruce", "Clark", "Diana"];
const nameList = names.map(name => <h2>{name}</h2>);

return <div>{nameList}</div>;
```

note: this video didn't talk about keys

#### 18th Video

This video is about using a key prop when mapping

```jsx
const nameList = names.map((name, index) => <h2 key={index}>{name}</h2>);
```

Key props are not assessable in child component prop. Key is a keyword.

#### 19th Video

Use index as shown above.

Index as key makes it hard to maintain a list, best to use id in object if your list is dynamic.

list index rules:

1) item in your list do not have a unique Id
2) The list is a static list and will not change.
3) The list will never be reordered or filtered
