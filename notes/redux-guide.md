# 🔄 What is Redux?

**Redux** is a **state management library** for JavaScript applications, most commonly used with **React**. It helps manage and centralize application state, making it:

- Predictable
- Easier to debug
- Scalable for large applications

---

## 🔧 Why Use Redux?

- Avoid **prop drilling** (passing data through many component layers)
- Share global state (e.g. user, cart) across components
- Make state **predictable** and traceable
- Integrate with powerful **Redux DevTools**

---

## 🧠 Core Concepts

| Concept        | Description |
|----------------|-------------|
| **Store**      | Holds the global state |
| **Action**     | Plain object that describes an event |
| **Reducer**    | Function that updates state based on actions |
| **Dispatch**   | Sends actions to the store |
| **Selector**   | Function to access specific pieces of state |

---

## 🛠️ How to Use Redux (Step-by-Step)

### 1. 📦 Install Redux with React
```bash
npm install redux react-redux
```

---

### 2. 🧮 Create Reducer

```js
// counterReducer.js
const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default counterReducer;
```

---

### 3. 🏗️ Create Store

```js
// store.js
import { createStore } from "redux";
import counterReducer from "./counterReducer";

const store = createStore(counterReducer);
export default store;
```

---

### 4. 🧩 Provide Store to React App

```js
// index.js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

---

### 5. 🎛️ Use Redux in Components

```js
// Counter.js
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}
```

---

## 🚀 Bonus: Redux Toolkit (Recommended Way)

You can simplify setup and boilerplate by using:

```bash
npm install @reduxjs/toolkit
```

Let me know if you want this converted to Redux Toolkit or a full React + Redux demo app!