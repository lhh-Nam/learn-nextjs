import { IMAGES } from "../NameAction";

const reducer = (state = null, action) => {
  switch (action.type) {
    case IMAGES.LOAD_FAIL:
      return action.payload.error;

    case IMAGES.LOAD:
    case IMAGES.LOAD_SUCCESS:
      return null;

    default:
      return state;
  }
};

export default reducer;
