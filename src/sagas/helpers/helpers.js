import axios from "axios";
import { months } from "../../constants/dateConversion";

export const getMovieDatabase = () => {
  return axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
  );
};

export const getMovieDatabaseGenres = () => {
  return axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
  );
};

export const getReadableData = date => {
  const dateArray = date.split("-").reverse();
  return `${dateArray[0]} ${months[dateArray[1]]} ${dateArray[2]}`;
};
