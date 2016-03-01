import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  render() {
    return (
      <div className="input-group">
        <input
          value={this.state.term}
          onChange={event => this.onInpuChange(event.target.value)}
          type="text"
          className="form-control"
          placeholder="Search for a video..." />
        <span className="input-group-btn">
          <button className="btn btn-primary" type="button">Search</button>
        </span>
      </div>
    );
  }

  onInpuChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
