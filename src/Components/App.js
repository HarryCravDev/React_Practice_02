import React from "react";
import SearchBar from "./SearchBar/SearchBar";

class App extends React.Component {
  state = {};

  // Fetch Videos
  searchVideo = (term) => {
    console.log(term);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar searchVideo={this.searchVideo} />
      </div>
    );
  }
}

export default App;
