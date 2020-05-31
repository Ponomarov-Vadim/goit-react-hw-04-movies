import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import Cast from "../../components/Cast";
import Reviews from "../../components/Reviews";
import fetch from "../../services/api";

import styled from "./MovieDetailsPage.module.css";

export default class MovieDetailsPage extends Component {
  state = {
    movieInfo: null,
  };

  componentDidMount() {
    fetch(`movie/${this.props.match.params.movieId}`).then((response) =>
      this.setState({ movieInfo: response.data })
    );
  }

  hideCast = () => this.props.history.push(this.props.match.url, this.state);

  handleClick = () => {
    const { history } = this.props;

    if (history.length > 2) {
      history.goBack();
      // console.log(); history is broken

      return;
    }
    history.push("/", this.state);
  };

  render() {
    const { movieInfo } = this.state;
    const {
      match: { url, path },
      location,
    } = this.props;

    const reliaseDate = movieInfo
      ? movieInfo["release_date"].split("-")[0]
      : "";

    const locationList = location.pathname.split("/");

    const imgSrc =
      movieInfo !== null &&
      `https://image.tmdb.org/t/p/w300_and_h450_bestv2${movieInfo["poster_path"]}`;
    const genres = !!movieInfo ? movieInfo.genres : [];

    const genreList = genres.reduce(
      (genresString, genre) => `${genresString} ${genre.name} `,
      ""
    );

    return (
      <>
        <button onClick={this.handleClick}>{"Go Back"}</button>
        {!!movieInfo && (
          <div className={styled.border}>
            <div className={styled.wrapperImg}>
              {imgSrc && <img src={imgSrc} alt="poster" />}
            </div>

            <div className={styled.wrapperInfo}>
              <h2>{`${movieInfo.title} (${reliaseDate})`}</h2>
              <span>User score: {Math.round(movieInfo.popularity) + "%"}</span>

              <h3>Overview</h3>
              <p>{movieInfo.overview}</p>

              <h4>Genres</h4>
              <p>{genreList}</p>
            </div>
          </div>
        )}
        <div className={styled.border}>
          <h3>Aditional information</h3>

          <ul>
            <li>
              <NavLink exact to={`${url}/cast`}>
                Cast
              </NavLink>
              {locationList[locationList.length - 1] === "cast" && (
                <button className={styled.button} onClick={this.hideCast}>
                  Close
                </button>
              )}
            </li>

            <li>
              <NavLink to={`${url}/reviews`}>Reviews</NavLink>
              {locationList[locationList.length - 1] === "reviews" && (
                <button className={styled.button} onClick={this.hideCast}>
                  Close
                </button>
              )}
            </li>
          </ul>
        </div>
        <Switch>
          <Route path={`${path}/cast`} component={Cast} />
          <Route path={`${path}/reviews`} component={Reviews} />
        </Switch>
      </>
    );
  }
}
