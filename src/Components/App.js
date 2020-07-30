import React from "react";
import Youtube, { baseParams } from "../API/Youtube";
import SearchBar from "./SearchBar/SearchBar";
import VideoContainer from "./Video_Item_Container/VideoContainer";

// API KEY
const KEY = "AIzaSyA7Z1AZimc19rn4GnFkqwUzJ9Q7fPJvu1k";

class App extends React.Component {
  state = {
    videos: [],
  };

  // Fetch Videos
  searchVideo = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        ...baseParams,
        q: term,
      },
    });
    this.setState({ videos: response.data.items });
    console.log(this.state.videos);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar searchVideo={this.searchVideo} />
        <VideoContainer videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
