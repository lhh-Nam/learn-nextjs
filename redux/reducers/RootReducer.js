import { combineReducers } from "redux";
import ImageReducer from "./ImageReducer";
import LoadingReducer from "./LoadingReducer";
import ErrorReducer from "./ErrorReducer";

import PageReducer from "./PageReducer";

const myReducer = combineReducers({
  isLoading: LoadingReducer,
  images: ImageReducer,
  error: ErrorReducer,
  nextPage: PageReducer,
});

export default myReducer;
