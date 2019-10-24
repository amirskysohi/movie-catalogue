import React from "react";
import { Link } from "react-router-dom";

const FilmWidget = ({ rating, description, date, title, poster }) => {
  return (
    <div className="film-widget">
      <div className="film-widget__image-wrapper">
        <Link className="film-widget__image-link navigation-bar">
          <img alt={`${title}-poster`} className="film-widget__image" src={poster} />
        </Link>
      </div>
      <div className="film-widget__description-wrapper">
        <div className="film-widget__text-header">
          <div className="film-widget__rating">
            <p>{rating}</p>
          </div>
          <div className="film-widget__title-wrapper">
            <Link className="film-widget__title-link navigation-bar">{title}</Link>
            <span className="film-widget__date">{date}</span>
          </div>
        </div>
        <p className="film-widget__description">{description}</p>
        <div className="film-widget__more-info-link-wrapper">
          <Link className="film-widget__more-info-link navigation-bar">More Info</Link>
        </div>
      </div>
    </div>
  );
};

export default FilmWidget;
