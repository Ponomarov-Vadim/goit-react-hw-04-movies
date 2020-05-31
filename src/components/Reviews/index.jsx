import React, { Component } from "react";
import fetch from "../../services/api";

export default class Review extends Component {
  state = {
    reviews: [],
  };
  componentDidMount() {
    fetch(`movie/${this.props.match.params.movieId}/reviews`).then(({ data }) =>
      this.setState({ reviews: data.results })
    );
  }

  render() {
    const { reviews } = this.state;
    const reviewsList = reviews.map(({ id, author, content }) => (
      <li key={id}>
        <h3>{author}</h3>
        <p>{content}</p>
      </li>
    ));
    return (
      <ul>
        {reviews.length
          ? reviewsList
          : "We don't have any reviews for this movie"}
      </ul>
    );
  }
}
