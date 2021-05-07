import images from "../../pages/images";
import { IMAGES } from "../NameAction";

const initState = [];

const reducer = (state = initState, action) => {
  if (action.type === IMAGES.LOAD_SUCCESS) {
    return [...state, ...action.images];
  }

  return state;
};

export default reducer;
