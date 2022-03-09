import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/index";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./saga/index";
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export default store;
