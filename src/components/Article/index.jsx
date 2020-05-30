import React, { Component } from "react";

export default class Article extends Component {
  render() {
    const { title, author } = this.props;
    console.log(this.props);
    // console.log(this.props.article.title);

    return (
      <>
        <h3>{title}</h3>
        <p>kdsfkdskf</p>
        <p>{author}</p>
      </>
    );
  }
}
