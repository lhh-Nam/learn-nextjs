import { combineReducers } from "redux";
import ImageReducer from "./ImageReducer";
import LoadingReducer from "./LoadingReducer";
import ErrorReducer from "./ErrorReducer";
import StatsReducer from "./StatsReducer";

import PageReducer from "./PageReducer";

const myReducer = combineReducers({
  isLoading: LoadingReducer,
  images: ImageReducer,
  error: ErrorReducer,
  nextPage: PageReducer,
  imageStats: StatsReducer,
});

export default myReducer;
