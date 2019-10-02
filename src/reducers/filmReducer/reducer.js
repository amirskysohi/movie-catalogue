import { FETCH_FILM_DATA } from "./constants";

const initialState = {
  films: null
};

const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILM_DATA: {
      return { ...state, films: action.films };
    }
    default:
      return state;
  }
};

export default filmReducer;
