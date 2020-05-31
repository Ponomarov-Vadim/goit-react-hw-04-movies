import React, { Component } from "react";
import fetch from "../../services/api";
import styled from "./Cast.module.css";

export default class Cast extends Component {
  state = {
    actorsList: [],
  };

  componentDidMount() {
    fetch(`movie/${this.props.match.params.movieId}/credits`).then((response) =>
      this.setState({ actorsList: response.data.cast })
    );
  }

  render() {
    const { actorsList } = this.state;
    const castlist = actorsList.map((actor) => {
      const imgSrc =
        actor["profile_path"] !== null
          ? `https://image.tmdb.org/t/p/w138_and_h175_face${actor["profile_path"]}`
          : actor.gender === 1
          ? "https://cdn1.savepice.ru/uploads/2020/5/31/c7130eda9f42f0501e700fe1372e6914-full.jpg"
          : "https://cdn1.savepice.ru/uploads/2020/5/31/31a796d4910f3d692cab34f99484fd2a-full.jpg";

      return (
        <li key={actor.id} className={styled.actorCard}>
          <img src={imgSrc} alt="Actor" width="138" height="175" />
          <span>{actor.name}</span>
          <span>Character: {actor.character}</span>
        </li>
      );
    });
    return (
      <>
        <ul className={styled.actorList}>{castlist}</ul>
      </>
    );
  }
}
