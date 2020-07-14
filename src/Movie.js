import React from "react";
import PropTypes from "prop-types";

function Movie() {
  return <h1></h1>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
}; //Movie의 prop-types 저장!

export default Movie;
