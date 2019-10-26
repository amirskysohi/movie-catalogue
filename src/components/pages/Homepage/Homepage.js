import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { FETCH_FILM_DATA_REQUEST } from "../../../reducers/filmReducer/constants";
import FilmWidget from "../../molecules/FilmWidget/FilmWidget";

const Homepage = ({ loading, films }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (films.length < 1 && !loading) dispatch({ type: FETCH_FILM_DATA_REQUEST });
  });

  if (loading) return <h1>Loading</h1>;

  return (
    <div>
      {films.map(({ title, reviewRating, overview, releaseDate, poster, id }) => (
        <FilmWidget
          key={id}
          title={title}
          rating={reviewRating}
          description={overview}
          releaseDate={releaseDate}
          poster={poster}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  loading: state.loadingReducer.loading,
  films: state.filmReducer.films
});

export default connect(mapStateToProps)(Homepage);
