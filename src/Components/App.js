import React from "react";
import Youtube, { baseParams } from "../API/Youtube";
import SearchBar from "./SearchBar/SearchBar";
import VideoContainer from "./Video_Item_Container/VideoContainer";
import VideoDetail from "./Video_Detail/VideoDetail";

// API KEY
const KEY = "AIzaSyA7Z1AZimc19rn4GnFkqwUzJ9Q7fPJvu1k";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.searchVideo("Joe Rogan");
  }

  // Fetch Videos
  searchVideo = async (term) => {
    const response = await Youtube.get("/search", {
      params: {
        ...baseParams,
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  // Selected Video
  onSelectVideo = (video) => {
    console.log(video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar searchVideo={this.searchVideo} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoContainer
                onSelectVideo={this.onSelectVideo}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
