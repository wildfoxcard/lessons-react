# ReactJS

from youtube playlist:

https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3

### notes from videos:

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
const Greet = (props) => {
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
  count: this.state.count + 1,
});
```

You can also use the second param for a callback function

```javascript
this.setState(
  {
    count: this.state.count + 1,
  },
  () => {
    console.log(this.state.count);
  }
);
```

This is the better way to manage state

```javascript
this.setState((prevState) => ({
  count: prevState.count + 1,
}));
```

You can also have a state that is depended on props

```javascript
this.setState((prevState, props) => ({
  count: prevState.count + props.addValue,
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
const Greet = (props) => {
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
      message: "hello",
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
    message: "goodbye",
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
const nameList = names.map((name) => <h2>{name}</h2>);

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

1. item in your list do not have a unique Id
2. The list is a static list and will not change.
3. The list will never be reordered or filtered

#### 20th video

This video is about styling

1. CSS stylesheets
2. Inline Styling
3. CSS Modules
4. CSS in JS Libraries

how to use css stylesheets

```jsx
import "./myStyles.css";

function Stylesheet(props) {
  let className = props.primary ? "primary" : "";

  return (
    <div>
      <h1 className={className}>Stylesheets</h1>
    </div>
  );
}
```

how to use inline styling

```jsx
const heading = {
  fontSize: "72px",
  color: "blue",
};

function Inline() {
  return (
    <div>
      <h1 style={heading}>Inline</h1>
    </div>
  );
}
```

how to use css module

```jsx
import styles from "./appStyles.module.css";
```

```jsx
<h1 class={styles.success}>Success</h1>
```

#### 21st video

This video is the basic of working with forms in react.

Controlled component for input

```jsx
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <form>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
      </form>
    );
  }
}
```

example of a controlled component for textarea

```jsx
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: "",
    };
  }

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  render() {
    return (
      <form>
        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
      </form>
    );
  }
}
```

example of a controlled component for select

```jsx
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topic: "react",
    };
  }

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  render() {
    return (
      <form>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
      </form>
    );
  }
}
```

How to submit on a form

```jsx
<form onSubmit={this.handleSubmit}>
```

```jsx
handleSubmit = (event) => {
  event.preventDefault();
};
```

#### 22nd Video

This video is about the lifecycle methods. This applies to class components and not functional components

There are four phases:

1. Mounting
2. Updating
3. Unmounting
4. Error Handling

#### 23rd Video

This video is about the mounting lifecycle methods

| Method                                        | Description                                                                                         |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| constructor(props)                            | A special function that will get called whenever a new component is created.                        |
| static getDerivedStateFromProps(props, state) | When the state of the component depends on changes in props over time                               |
| render()                                      | Only Required Method                                                                                |
| ComponentDidMount                             | Invoked immediately after a component and all its children components have been rendered to the DOM |

Example of a constructor:

```jsx
constructor(props) {
    super(props)

    this.state = {
            name : "Mike"
    }
    console.log('LifecycleA constructor')
}
```

Example of getDrivedStateFromProps

```jsx
static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps')
    return null; // return null or state
}
```

Example of componentDidMount

```jsx
componentDidMount() {
    console.log('LifecycleA componentDidMount')
}
```

#### 24th Video

This video is about the updating lifecycle methods

| Method                                             | Description                                                                         |
| -------------------------------------------------- | ----------------------------------------------------------------------------------- |
| static getDerivedStateFromProps(props, state)      | Method is called everytime a component is re-rendered                               |
| shouldComponentUpdate(nextProps, nextState)        | Dictates if the component should re-render or not                                   |
| render()                                           | only required method                                                                |
| getSnapshotBeforeUpdate(prevProps, prevState)      | Called right before the changes from the virtual DOM are to be reflected in the DOM |
| componentDidUpdate(prevProps, prevState, snapshot) | Called after the render is finished in the re-render cycles                         |

Example of getDrivedStateFromProps

```jsx
static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromProps')
    return null; // return null or state
}
```

Example of shouldComponentUpdate

```jsx
shouldComponentUpdate() {
    console.log('Lifecycle! shouldComponentUpdate')
}
```

Example of getSnapshotBeforeUpdate

```jsx
getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('LifecycleA getSnapshotBeforeUpdate')
}
```

Example of ComponentDidUpdate

```jsx
componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate')
}
```

Unmounting phase has only one method

| Method               | Description                                                                  |
| -------------------- | ---------------------------------------------------------------------------- |
| componentWillUnmount | Method is invoked immediately before a component is unmounted and destroyedF |

Error Handling Phase Method

| Method                                 | Description |
| -------------------------------------- | ----------- |
| static getDerivedStateFromError(error) |             |
| componentDidCatch(error, info)         |             |

Both of these methods are when there is an error either during rendering, in a lifecycle method, or in the constructor of any child component

#### 25th Video

This video is about react fragments

```jsx
<React.Fragment>
  <h1>Fragment Demo</h1>
  <p>This describes the fragment demo component</p>
</React.Fragment>
```

The following will allow the h1 and p tag to be render without a wrapper element.

instead of using React.Fragment, you can use an empty tag

```jsx
<>
  <h1>Fragment Demo</h1>
  <p>This describes the fragment demo component</p>
</>
```

If you use the short hand, you cannot use key on fragments.

```jsx
<>
  {items.map((item) => (
    <React.Fragment key={item.id}>
      <h1>Title</h1>
      <p>{item.title}</p>
    </React.Fragment>
  ))}
</>
```

#### 26th Video

This video is about pure components

What is the difference between a Pure component and a normal component?

| Regular Component                                                                                          | Pure Component                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| A regular component does not implement the shouldComponentUpdate method. It always returns true by default | A pure component on the other hand implements shouldComponentUpdate with a shallow props and state comparison |

What is a shallow comparison

Primitive Types
returns true if a and b have the same value and are of the same type
example: string 'Mike' returns true

Complex Types
b returns true if a and b reference the exact same object

If you use pure components, don't push to an array or mod an object. Always setState or props to a new object.

#### 27th Video

This video is about React.memo

It is just like the pure component above with the shallow comparison but used for functional components.

```jsx
export default React.memo(MemoComp);
```

#### 28th Video

This video is about refs. Refs will allow you to attach the html node to a variable. Below is a ref being using to focus on an input

```jsx
class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}
```

This is an example like above but alerting the input value using a ref

```jsx
class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}
```

#### 29th Video

This video is about attaching a ref from a child component to a parent component.

Consider these two files:

The child

```jsx
import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  focusInput() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default Input;
```

The parent

```jsx
import React, { Component } from "react";
import Input from "./Input";

class FocusInput extends Component {
  constructor(props) {
    super(props);

    this.componentRef = React.createRef();
  }

  clickHandler = () => {
    this.componentRef.current.focusInput();
  };

  render() {
    return (
      <div>
        <Input ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default FocusInput;
```

The child focusInput is exposed to the parent ref. That is how this works.

#### 30th Video

This video is about forwarding refs. It is when the child passes the ref to the parent.

Conside the two files.

child

```jsx
import React from "react";

const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});

export default FRInput;
```

parent

```jsx
import React, { Component } from "react";
import FRInput from "./FRInput";

class FRParentInput extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  clickHandler = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <FRInput ref={this.inputRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default FRParentInput;
```

The functional component that is the child is using React.forwardRef, this has ref as the second param. We assign that second parameter to the element we want to reference. This is passed to the parent component so it can be assigned to a React.createRef() variable. Now the parent has access to the child ref.

#### 31st Video

This video is about react portals. This allows children to render in a child node that exist outside of the hierarchy. Put simple, it is the ability to render a DOM node outside of the root div the app is started from.

```jsx
import React from "react";
import ReactDom from "react-dom";

function PortalDemo() {
  return ReactDom.createPortal(
    <h1>Portals demo</h1>,
    document.getElementById("portal-root")
  );
}

export default PortalDemo;
```

Above is using a portal to render the react component into a different location.

#### 32nd Video

This video is about Error handling phase methods. These are two different methods.

1. static getDerivedStateFromError(error)
2. componentDidCatch(error, info)

This uses Error Boundaries

> A class component that implements either one or both of the lifecycle methods getDerivedStateFromError or componentDidCatch becomes an error boundary

The static method getDerivedStateFromErro method is used to render a fallback UI after an error is thrown and the componentDidCatch method is used to log the error information.

how to write an error boundary

```jsx
import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

This will allow an error boundary to be used in the app. Keep in mind that in development the error screen will still show. You will have to close the error screen to see your result. But in production, it will not show the error screen, instead it will show the ErrorBoundary coode.

```jsx
<ErrorBoundary>
  <Hero heroName="Batman" />
  <Hero heroName="Superman" />
  <Hero heroName="Joker" />
</ErrorBoundary>
```

Where to place this error boundary?

Well if superman and batman doesn't have errors, then each item should have it's own error boundary.

```jsx
<ErrorBoundary>
  <Hero heroName="Batman" />
</ErrorBoundary>
<ErrorBoundary>
  <Hero heroName="Superman" />
</ErrorBoundary>
<ErrorBoundary>
  <Hero heroName="Joker" />
</ErrorBoundary>
```

componentDidCatch is used to get the error you recieved

```jsx
componentDidCatch(error, info) {
    console.log(error)
}
```

Error boundaries are for react methods, not handlers. You can use a try catch in handlers.

#### 33rd video

This video is about higher order components. This video only showed a problem about why we would need higher order components. The next videos will explain how to implement this.

#### 34th video

What is a Higher Order Component (HOC)

A pattern where a function takes a component as an argument and returns a new component. In simple code it will look something like this:

```jsx
const NewComponent = higherOrderComponent(originalComponent);
//can also be referred to "EnhancedComponent"
const EnhancedComponent = higherOrderComponent(originalComponent);
```

Put simply in a non-technical way:

```jsx
const IronMan = withSuit(TonyStark);
```

The first example of a HOC is the following:

```jsx
import React from "react";

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    render() {
      return <OriginalComponent />;
    }
  }

  return NewComponent;
};
```

now we export the UpdatedComponent to our component exports:

```jsx
export default UpdatedComponent(HoverCounter);
```

#### 35th video

This is the last video about HOCs. It is about needing to pass the props from the HOC to the return of the WrappedComponent, example:

```jsx
return (
  <WrappedComponent
    count={this.state.count}
    incrementCount={this.incrementCount}
    {...this.props} // This is what I am talking about.
  />
);
```

The video also mentions that you can add other parameters to your HOC function. No example need because simple.

#### 36th video

This video is about Render Props. It is very similar to creating HOCs. This video is set up video similar to video 33.

#### 37th video

What is Render props?

The term "render prop" refers to a technique for sharing code between React components using a prop whose value is a function.

```jsx
<Counter
  render={(count, incrementCount) => (
    <ClickCounter2 count={count} incrementCount={incrementCount} />

  )}
/>
<Counter
  render={(count, incrementCount) => (
    <HoverCounter2 count={count} incrementCount={incrementCount} />
  )}
/>
```

```JSX
import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.incrementCount)}
            </div>
        )
    }
}

export default Counter
```

#### 38th Video

This video is about the context api.

What is context?

> Context provides a way to pass data through the component tree without having to pass props down manually at every level.

#### 39th Video

There are three steps for context

1. Create the context
2. Provide a context value
3. Consume the context value

Lets create the context

```jsx
import React from "react";

const UserContext = React.createContext();

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
```

Now lets add the context, remember that the context will only be shared with parent/child components. The context cannot show up outside the main tag.

```jsx
<UserProvider value="Mike">
  <ComponentC />
</UserProvider>
```

Now lets use the context in a component 3 children down.

```jsx
class ComponentC extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return <div>Hello, {username}</div>;
        }}
      </UserConsumer>
    );
  }
}
```

#### 40th Video

You can set a default value to your context.

```jsx
const UserContext = React.createContext("asdf");
```

Now if you don't add the provider, the text asdf will appear.

```jsx
{
  /* <UserProvider value="Mike"> */
}
<ComponentC />;
{
  /* </UserProvider> */
}
```

Context type property

You can add the context as a property type.

```jsx
class ComponentE extends Component {
  render() {
    return (
      <div>
        Component E context {this.context}
        <ComponentF />
      </div>
    );
  }
}

ComponentE.contextType = UserContext;
```

#### 41st video

This video is about creating a new react app called "react-http"
Also I downloaded the npm package called "AXIOS"

#### 42nd video

Using JSONPlaceholder for an API end point.

This is how axios looks.

```jsx
axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    console.log("response", response);
    this.setState({ posts: response.data });
  })
  .catch((errors) => {
    console.log("errors", errors);
    this.setState({ errorMsg: "Error retreiving data." });
  });
```

#### 43rd video

This video starts with creating a new file: /src/components/PostForm.js

It is about posting to an api using axios.

```jsx
import React, { Component } from "react";
import axios from "axios";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  render() {
    const { userId, title, body } = this.state;

    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="userId"
              value={userId}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              value={body}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;
```

#### 44th video

This video is the introduction to using hooks in React

> What are hooks

Hooks are the new feature addition in React version 16.8 which allow you to use React features without having to write a class.

Ex: State of a component

Hooks don't work inside classes

> Why Hooks

1. Reason set 1

Understand how "this" keyword works in Javascript

Remember to blind event handlers in class components

Classes don't minify very well and make hot reloading very unreliable

2. Reason set 2

There is no particular way to reuse stateful component logic

HOW and render props patterns do address this problem

Make the code harder to follow

3. Readon set 3

Create components for comples scenarios such as data fetching and subscribling to events

Related code is not organized in one place

Ex: Data fetching - In componentDidMount and componentDidUpdate
Ex: Event listeners - In componentDidMount and componentWillMount

#### 45th video

This video is about replacing the state in a component with "useState".

The Class Component from react.

```jsx
import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Count {this.state.count}</button>
      </div>
    );
  }
}

export default ClassCounter;
```

Create the same functionality in a functional component using "useState"

```jsx
import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}

export default HookCounter;
```

> Rules of Hooks

"Only Call Hooks at the Top Level"

Don't call Hooks inside loops, conditions or nested functions.

"Only Call Hooks from React Functions"

Call them from within React functional components and not just any regular Javascript function

#### 46th video

This video is about how to set state base on the previous state value.

This is a very unsafe way to update count value.

```jsx
import React, { useState } from "react";

function HookCounter2() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(count + 1);
    }
  };
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => incrementFive}>Increment 5</button>
    </div>
  );
}

export default HookCounter2;
```

This is a better way to do this: using the "prevCount"

```jsx
import React, { useState } from "react";

function HookCounter2() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  );
}

export default HookCounter2;
```

#### 47th video

This video is about another example that used a the state hook. Objects as variables.

```jsx
import React, { useState } from "react";

function HookCounter3() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h2>Your first name is - {name.firstName}</h2>
      <h2>Your list name is - {name.lastName}</h2>
      <div>{JSON.stringify(name)}</div>
    </div>
  );
}

export default HookCounter3;
```

note: spread operator.

#### 48th video

This is about is when the state is an array.

```jsx
import React, { useState } from "react";

function HookCounter4() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <div>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default HookCounter4;
```

> Summary - useState

The useState hook lets you add state to functional components

in Classes, the state is always an object.

With the useState hook, the state doesn't have to be an object.

The useState hook returns an array with 2 elements.

The first element is the current value of the state, and the second element is a state setter function.

New state value depends on the previous state value? You can pass a function to the setter function.

When dealing with objects or arrays, always make sure to spread your state variable and then call the setter function.

#### 49th video

This video is an introduction to the "useEffects" hook.

This video was talking about how "useEffect" replaced "componentDidMount", "componentDidUpdate", and "componentWillUnmount"

#### 50th video

This video is using the "useEffect" hook for the first time.

```jsx
import React, { useState, useEffect } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `you clicked ${count} times`;
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}

export default HookCounter;
```

#### 51st video

Applying a conditional "useEffect" hook should be perferred for performance reasons.

You have an array with dependencies as the second argument on the "useEffect" hook. The code below means that I should only update the document.title if the count changes.

```jsx
useEffect(() => {
  console.log("useEffect - Updating document title");
  document.title = `you clicked ${count} times`;
}, [count]);
```

#### 52nd video

This video is about only loading the useEffect once.

Just add an empty array as the second useEffect argument.

```jsx
useEffect(() => {
  console.log("useEffect called");
  window.addEventListener("mousemove", logMousePosition);
}, []);
```

#### 53rd video

This video is cleaning up your code in the "useEffect" return statement.

```jsx
useEffect(() => {
  console.log("useEffect called");
  window.addEventListener("mousemove", logMousePosition);

  return () => {
    console.log("Component unmounting code");
    window.removeEventListener("mousemove", logMousePosition);
  };
}, []);
```
