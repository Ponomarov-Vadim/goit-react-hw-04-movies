import React, { Component } from "react";
import fetch from "../../services/api";
import MoviesList from "../../components/common/MoviesList";

export default class MoviesPage extends Component {
  state = {
    query: "",
    movies: [],
  };

  componentDidMount() {
    const { state } = this.props.location;

    if (state) {
      fetch("search/movie", state.query).then(({ data }) =>
        this.setState({ movies: data.results })
      );
    }
  }

  handleSubmit = (e) => {
    const { history } = this.props;
    const { query } = this.state;

    e.preventDefault();
    history.push(`${history.location.pathname}?query=${query}`, this.state);

    fetch("search/movie", query).then(({ data }) =>
      this.setState({ movies: data.results })
    );
  };

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  render() {
    const { query, movies } = this.state;
    const { location } = this.props;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="query"
            value={query}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>
        <MoviesList movies={movies} location={location} />
      </>
    );
  }
}
