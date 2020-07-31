import React, { Component } from "react";

export class SearchBar extends Component {
  state = {
    term: "",
  };

  // Update state with user input
  onInputChange = (input) => {
    this.setState({ term: input.target.value });
  };

  // Submit user input
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.searchVideo(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search for a video</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder="Enter a search term"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
