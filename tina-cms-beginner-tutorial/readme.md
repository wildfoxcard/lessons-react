# Tina CMS beginner tutorial

from tinacms.org documentation:

https://tinacms.org/docs/getting-started/introduction/

## notes from articles:

### First Article

how I clone the repo and installed dependencies

```bash
git clone https://github.com/tinacms/tina-intro-tutorial my-tina-app
cd my-tina-app
npm i
npm start
```

### Second Article

How the documentation wants me to install the following programs

```bash
npm i tinacms styled-components --save

```

Then the documentation wants me to add an import to App.js

```javascript
import { TinaProvider, TinaCMS } from "tinacms";
```

Then it wants me to add the following variable inside the functional component in app.js

```javascript
const cms = new TinaCMS();
```

so it looks like:

```javascript
function App() {
  const cms = new TinaCMS();

  return (
    <div className="App">
      <PageContent />
    </div>
  );
}
```

Then I need to wrap my App render in a TinaProvider

```javascript
<TinaProvider cms={cms}></TinaProvider>
```

so it looks like this:

```javascript
function App() {
  const cms = new TinaCMS();

  return (
    <TinaProvider cms={cms}>
      <div className="App">
        <PageContent />
      </div>
    </TinaProvider>
  );
}
```

The Cms is not usable yet, They want me to add a sidebar

```javascript
const cms = new TinaCMS({
  sidebar: true,
});
```

The CMS is not enabled, this is how they are enabling the TinaCMS

```javascript
import { TinaProvider, TinaCMS, useCMS } from "tinacms";
```

The Edit button handler got the following update:

```javascript
function EditButton() {
  const cms = useCMS();

  return (
    <button onClick={() => cms.toggle()}>
      {cms.enabled ? "Exit Edit Mode" : "Edit This Site"}
    </button>
  );
}
```

### Third Article

This article is about using forms. They don't automatically work in the sidebar, some configuration is needed.

The App.js file is being updated again

```javascript
import { TinaProvider, TinaCMS, useCMS, useForm, usePlugin } from "tinacms";
```

Then the PageContent function was updated

```javascript
function PageContent() {
  // 2. Define the form configuration object
  const formConfig = {
    id: "tina-tutorial-index",
    label: "Edit Page",
    fields: [
      {
        name: "title",
        label: "Title",
        component: "text",
      },
      {
        name: "body",
        label: "Body",
        component: "textarea",
      },
    ],
    initialValues: pageData,
    onSubmit: async () => {
      window.alert("Saved!");
    },
  };

  // 3. Create the form
  const [editableData, form] = useForm(formConfig);

  // 4. Register it with the CMS
  usePlugin(form);

  return (
    <section className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {/**
       * 5. Render the `editableData` returned from `useForm`
       */}
      <h1>{editableData.title}</h1>
      <p>{editableData.body}</p>
      <EditButton />
    </section>
  );
}
```

### Fourth Article

This form is about using a mock backend.

changes to the PageContent Function. The changes are in loadInitialValues, onSubmit.

```javascript
function PageContent() {
  const cms = useCMS();

  // 2. Define the form configuration object
  const formConfig = {
    id: "tina-tutorial-index",
    label: "Edit Page",
    fields: [
      {
        name: "title",
        label: "Title",
        component: "text",
      },
      {
        name: "body",
        label: "Body",
        component: "textarea",
      },
    ],
    loadInitialValues() {
      return fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      ).then((response) => response.json());
    },
    onSubmit(formData) {
      cms.alerts.info("Saving Content...");

      return fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        body: JSON.stringify({
          id: 1,
          title: formData.title,
          body: formData.body,
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          cms.alerts.success("Saved Content!");
          console.log(data);
        })
        .catch((e) => {
          cms.alerts.error("Error Saving Content");
          console.error(e);
        });
    },
  };

  // 3. Create the form
  const [editableData, form] = useForm(formConfig);

  // 4. Register it with the CMS
  usePlugin(form);

  return (
    <section className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {/**
       * 5. Render the `editableData` returned from `useForm`
       */}
      <h1>{editableData.title}</h1>
      <p>{editableData.body}</p>
      <EditButton />
    </section>
  );
}
```
