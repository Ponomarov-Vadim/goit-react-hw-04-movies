import React, { Component } from "react";
import SearchForm from "../searchForm";
import fetch from "../../services/api.js";
import { formatData } from "../../utils/helper.js";

export default class Test extends Component {
  state = {
    hits: [],
    theme: "no theme",
    isPending: false,
  };

  componentDidMount() {
    this.setState({ isPending: true });
    fetch()
      .then(({ data }) => {
        this.setState({
          hits: formatData(data),
        });
      })
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ isPending: false });
      });
  }

  componentDidUpdate(prevProps, prevState) {}

  componentWillMount() {}

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
    fetch(value).then(({ data }) => {
      this.setState({
        hits: formatData(data),
      });
    });
  };

  onSearch = (query) => {
    fetch(query).then(({ data }) => {
      this.setState({
        hits: formatData(data),
      });
    });
  };

  render() {
    const { hits, isPending } = this.state;
    return (
      <div>
        <SearchForm onSearch={this.onSearch} />
        <select
          name="theme"
          onChange={this.handleChange}
          value={this.state.theme}
        >
          <option value="no theme" disabled>
            select theme
          </option>
          <option value="javascript">javascript</option>
          <option value="redux">redux</option>
          <option value="html">html</option>
        </select>
        {isPending && <h3>LOADING...</h3>}
        {!!hits.length && (
          <div>
            {hits.map((hit) => (
              <div
                key={hit.objectID}
                style={{ border: "1px solid black", marginBottom: "10px" }}
              >
                <h2>{hit.title}</h2>
                <p>{hit.author}</p>
                <p>
                  Link:
                  <a href={hit.url} target={"_blank"}>
                    Stories are here!
                  </a>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
