# Redux Codebase Overview

This document provides a detailed explanation of the codebase structure and logic for the React-Redux banking application.

---

## Project Structure

```
Redux/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── store.js
│   ├── features/
│   │   ├── account/
│   │   │   ├── AccountOperations.jsx
│   │   │   ├── accountSlice.js
│   │   │   └── BalanceDisplay.jsx
│   │   └── customer/
│   │       ├── CreateCustomer.jsx
│   │       ├── customerSlice.js
│   │       └── Customer.jsx
│   ├── assets/
│   └── index.css
├── index.html
├── package.json
└── ...
```

---

## Redux Store Setup (`src/store.js`)

- **Combines reducers** from `account` and `customer` features using `combineReducers`.
- **Creates the Redux store** with `createStore`.
- **Exports** the store for use in the React app.

```js
import { combineReducers, createStore } from "redux";
import accountreducer from "./features/account/accountSlice";
import customerReducer from "./features/customer/customerSlice";

const rootReducer = combineReducers({
  account: accountreducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);
export default store;
```

---

## Account Feature (`src/features/account/`)

### `accountSlice.js`

- **Initial State:**
  - `balance`: number
  - `loan`: number
  - `loanPurpose`: string
- **Reducer:** Handles actions:
  - `account/deposit`: Increase balance
  - `account/withdraw`: Decrease balance
  - `account/requestLoan`: If no loan, set loan and purpose, increase balance
  - `account/payLoan`: Pay off loan, reset loan and purpose, decrease balance
- **Action Creators:**
  - `deposit(amount)`
  - `withdraw(amount)`
  - `requestLoan(amount, purpose)`
  - `payLoan()`

### `AccountOperations.jsx`

- **UI for account actions:** Deposit, Withdraw, Request Loan, Pay Loan
- **Uses local state** for form inputs
- **Dispatches actions** to the account slice
- **Selects account state** (balance, loan, loanPurpose) from Redux

### `BalanceDisplay.jsx`

- **Displays the current account balance**
- **Formats balance as currency**
- **Selects balance** from Redux state

---

## Customer Feature (`src/features/customer/`)

### `customerSlice.js`

- **Initial State:**
  - `fullName`: string
  - `nationalID`: string
  - `createdAt`: string (ISO date)
- **Reducer:** Handles actions:
  - `customer/createCustomer`: Set customer info
  - `customer/updateName`: Update customer name
- **Action Creators:**
  - `createCutomer(fullName, nationalID)`
  - `updateName(fullName)`

### `CreateCustomer.jsx`

- **UI for creating a new customer**
- **Uses local state** for form inputs (name, national ID)
- **Dispatches `createCutomer` action**

### `Customer.jsx`

- **Displays a welcome message** with the customer's name
- **Selects customer state** from Redux

---

## Main App Component (`src/App.jsx`)

- **Renders the app title**
- **Conditionally renders:**
  - If no customer: shows `CreateCustomer`
  - If customer exists: shows `Customer`, `AccountOperations`, and `BalanceDisplay`
- **Uses `useSelector`** to get customer name from Redux

---

## Data Flow Summary

1. **User creates a customer** → Dispatches `createCutomer` → Updates customer state
2. **User performs account operations** (deposit, withdraw, loan) → Dispatches actions → Updates account state
3. **UI components** subscribe to Redux state and update accordingly

---

## Notes

- The codebase uses **classic Redux** (not Redux Toolkit)
- All state logic is colocated in feature folders
- UI is split by feature for maintainability

---

For more details, see the source files in each feature folder.
