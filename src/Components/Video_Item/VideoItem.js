import React from "react";
import "./VideoItem.styles.css";

const VideoItem = ({ video, onSelectVideo }) => {
  return (
    <div onClick={() => onSelectVideo(video)} className="item video-item">
      <img
        src={video.snippet.thumbnails.medium.url}
        className="ui image"
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
