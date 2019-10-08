import {
  FETCH_FILM_DATA_REQUEST,
  FETCH_FILM_DATA_SUCCESS,
  FETCH_FILM_DATA_FAILURE
} from "../filmReducer/constants";

const initialState = {
  loading: false
};

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILM_DATA_REQUEST: {
      return { ...state, loading: true };
    }
    case FETCH_FILM_DATA_SUCCESS:
    case FETCH_FILM_DATA_FAILURE: {
      return { ...state, loading: false };
    }
    default:
      return state;
  }
};

export default loadingReducer;
