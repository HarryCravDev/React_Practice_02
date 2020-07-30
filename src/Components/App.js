import React from "react";
import Youtube, { baseParams } from "../API/Youtube";
import SearchBar from "./SearchBar/SearchBar";

// API KEY
const KEY = "AIzaSyA7Z1AZimc19rn4GnFkqwUzJ9Q7fPJvu1k";

class App extends React.Component {
  state = {};

  // Fetch Videos
  searchVideo = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        ...baseParams,
        q: term,
      },
    });

    console.log();
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
