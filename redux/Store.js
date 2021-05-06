import MyReducer from "./reducers/RootReducer";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  MyReducer,
  applyMiddleware(sagaMiddleware)
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(rootSaga);

// store.dispatch({ type: "LOGOUT" });
// store.dispatch({ type: "LOGIN" });
// store.dispatch({ type: "LOGOUT" });

export default store;
