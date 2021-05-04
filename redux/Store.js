import MyReducer from "./redercers/RootReducer";
import { createStore } from "redux";

const store = createStore(MyReducer);

export default store;
