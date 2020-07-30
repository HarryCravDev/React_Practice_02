import React from "react";
import "./VideoItem.styles.css";

const VideoItem = ({ video }) => {
  console.log("VideoItem", video);
  return (
    <div className="item video-item">
      <img
        src={video.snippet.thumbnails.medium.url}
        className="ui image"
        alt=""
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
