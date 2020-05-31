import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MoviesList = ({ movies }) => (
  <ul>
    {movies.map(({ id, name, title }) => (
      <li key={id}>
        <Link to={`/movies/${id}`}>{name !== undefined ? name : title}</Link>
      </li>
    ))}
  </ul>
);

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      title: PropTypes.string,
    }).isRequired
  ).isRequired,
};
