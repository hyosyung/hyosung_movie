import React from "react";
import PropTypes from "prop-types";

function Movie({ title, year, summary, poster }) {
  return (
    <div className="movie">
      <img className="movie_poster" src={poster} alt={title} title={title} />
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <p className="movie_summary">{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
}; //Movie의 prop-types 저장!

export default Movie;
