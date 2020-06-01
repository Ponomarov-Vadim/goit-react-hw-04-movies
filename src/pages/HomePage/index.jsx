import React, { Component } from "react";
import fetch from "../../services/api";
import MoviesList from "../../components/common/MoviesList";

export default class HomePage extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch().then(({ data }) => this.setState({ movies: data.results }));
  }

  render() {
    const { movies } = this.state;
    const { location } = this.props;
    return (
      <>
        <h2>Trending today</h2>
        <MoviesList movies={movies} location={location} />
      </>
    );
  }
}
