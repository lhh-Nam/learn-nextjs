import { IMAGES } from "../NameAction";

export const loadImages = () => {
  return {
    type: IMAGES.LOAD,
  };
};

export const setImages = (images) => {
  return {
    type: IMAGES.LOAD_SUCCESS,
    //payload: { images },
    images,
  };
};

export const setError = (error) => {
  return {
    type: IMAGES.LOAD_FAIL,
    payload: { error },
  };
};
