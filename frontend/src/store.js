import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { foodDetailsReducer, foodReducer } from "./reducers/foodReducer";
import { profileReducer, userReducer } from "./reducers/userReducer";

const reducer = combineReducers({
  fooditems: foodReducer,
  foodDetails: foodDetailsReducer,
  user: userReducer,
  profile: profileReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
