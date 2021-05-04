//Get 
export const get= (state) => {
  return {
    type: GET_STATE,
    payload: { state },
  };
};
