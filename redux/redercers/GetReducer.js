const initState = {
  state: "",

  status: NONE,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    //get POST
    case GET_STATE:
      return {
        ...state,
        state: action.payload.state,
        status: SUCCESS,
      };

    default:
      return state;
  }
};

export default reducer;
