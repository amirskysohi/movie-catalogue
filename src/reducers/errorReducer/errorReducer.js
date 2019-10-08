import { FETCH_FILM_DATA_FAILURE } from "../filmReducer/constants";

const initialState = {
  error: null
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILM_DATA_FAILURE: {
      return { ...state, error: action.error };
    }
    default:
      return state;
  }
};

export default errorReducer;
