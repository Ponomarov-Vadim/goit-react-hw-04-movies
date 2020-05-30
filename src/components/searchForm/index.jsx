import React, { Component } from "react";

export default class SearchForm extends Component {
  state = {
    query: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="query"
          onChange={this.handleChange}
          value={this.state.query}
        ></input>
      </form>
    );
  }
}
