# Typescript - The basics

from youtube video:

https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3


### notes from video:


#### First video

1) React in maintain by Facebook
2) Reusable components
3) React is declarative
4) React can be seamlessly integrated into any app.
5) HTML, CSS, and javascript (es6) fundamentals is required
6) ES6 requirements
    a) let & const
    b) arrow functions
    c) template literals
    d) default parameters
    e) object literals
    f) rest and spread operators
    g) destructuring assignments


#### Second Video

Requirements:
1) node
2) IDE (mine will be vscode)

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

1) package.json - normal node file with scripts and dependencies installed
2) public
- manifest.json - out of scope for this video
- favicon.ico - normal favicon, nothing to do with react.
- index.html - Normal index file with the root div.
3) src - the main react folder
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
1) Stateless functional Component
2) Stateful Class Component

#### Fifth Video

This video is about Functional Components

Only input is props.

We are using Pascel case for component file names.

#### Sixth Video

This video is about Class Components.

Input is props but also has private state.






