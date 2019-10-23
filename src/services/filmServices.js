import axios from "axios";

export const getMovieDatabase = () =>
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    )
    .then(res => {
      console.log(res);
      return res.data.results;
    });

export const getMovieDatabaseGenres = () =>
  axios
    .get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    )
    .then(res => {
      return res.data.genres;
    });
