import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import {Link} from 'react-router-dom';

function Movie({ title, year, summary, poster, genres }) {
  return (
    <div className="movie">
      <Link to={{pathname: '/movie-detail', state:{year,title,summary,poster,genres},}}>
      <img className="movie_poster" src={poster} alt={title} title={title} />
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="movie_genres">
          {genres.map((genre, idx) => {
            return (
              <li key={idx} className="movie_genre">
                {genre}
              </li>
            );
          })}
        </ul>
        <p className="movie_summary">
          {summary.length > 250 ? summary.slice(0, 250) + "..." : summary}
        </p>
      </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}; //Movie의 prop-types 저장!

export default Movie;
