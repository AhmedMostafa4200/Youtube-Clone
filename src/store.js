/* eslint-disable no-underscore-dangle */
import { createStore, compose } from "redux";
// import thunk from "redux-thunk";
import rootReducer from "./redux/reducers/index";

const initialState = {};
// const middlewares = [thunk];

export default createStore(
  rootReducer,
  initialState,
  compose(
    // applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
