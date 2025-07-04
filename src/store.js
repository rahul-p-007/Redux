import { combineReducers, createStore } from "redux";
import accountreducer from "./features/account/accountSlice";
import customerReducer from "./features/customer/customerSlice";

const rootReducer = combineReducers({
  account: accountreducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);
export default store;
