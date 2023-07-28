import React, { Component } from "react";
class GifSearch extends Component {
  state = {
    query: "",
  };

  handleChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFetchGifs(this.state.query);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.query}
          onChange={this.handleChange}
          placeholder="Enter search query"
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
export default GifSearch;