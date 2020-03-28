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
