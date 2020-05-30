import React, { Component } from "react";
import fetch from "../../services/api";
import { formatData } from "../../utils/helper";
import { Link, Route } from "react-router-dom";
import Article from "../../components/Article";

export default class Articles extends Component {
  state = {
    articles: [],
    selectedArticle: null,
  };

  componentDidMount() {
    fetch().then(({ data }) => this.setState({ articles: formatData(data) }));
  }

  handleClick = () => {};

  render() {
    const { articles, selectedArticle } = this.state;
    const articleList = articles.map((article) => (
      <li
        key={article.objectID}
        onClick={() => {
          this.setState({ selectedArticle: article });
        }}
      >
        <Link to={`${this.props.match.path}/${article.objectID}`}>
          {article.title}
        </Link>
      </li>
    ));
    const article = articles.filter(
      (artic) => artic.objectID === this.props.match.params.id
    );

    return (
      <>
        <h2>Articles page</h2>
        <ul>{articleList}</ul>
        <Route
          path={`${this.props.match.path}/:id`}
          component={Article}
          render={(props) => <Article {...props} article={selectedArticle} />}
        />
      </>
    );
  }
}
