import React, { useEffect } from "react";
import { connect } from "react-redux";
import FilmWidget from "../../molecules/FilmWidget/FilmWidget";
import { fetchFilmDataRequest } from "../../../reducers/filmReducer/actions";

export const Homepage = ({ loading, films, fetchFilmDataRequest }) => {
  useEffect(() => {
    fetchFilmDataRequest();
  }, []);

  if (loading) return <h1>Loading</h1>;

  return (
    <div className="homepage">
      <div className="homepage__film-widget-wrapper">
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
    </div>
  );
};

const mapStateToProps = state => ({
  loading: state.loadingReducer.loading,
  films: state.filmReducer.films
});

const mapDispatchToprops = {
  fetchFilmDataRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToprops
)(Homepage);
